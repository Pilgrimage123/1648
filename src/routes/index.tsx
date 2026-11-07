import { createFileRoute } from "@tanstack/react-router";
import { Flag, Heart, RotateCcw, Shield, Ship, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createBriefingSnapshot, createGame, type GameHandle } from "@/game/main";
import type { HudUnit, Snapshot } from "@/game/types";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<GameHandle | null>(null);
  const [snap, setSnap] = useState<Snapshot>(() => createBriefingSnapshot());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const game = createGame(canvas, setSnap);
    gameRef.current = game;
    return () => {
      game.destroy();
      if (gameRef.current === game) gameRef.current = null;
    };
  }, []);

  const api = () => gameRef.current;
  const imperials = snap.units.filter((u) => u.faction === "imperial");
  const swedes = snap.units.filter((u) => u.faction === "swedish");
  const playable = snap.phase === "flight" || snap.phase === "dock" || snap.phase === "hold";

  return (
    <main className="shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Praha · 26. července</p>
          <h1>Malá Strana 1648</h1>
        </div>
        <div className="top-meta">
          <span className="pill">{snap.phaseLabel}</span>
          <span className="pill">Kolo {snap.round}</span>
          <span className="pill">{snap.turn === "player" ? "Císařští" : "Švédové"}</span>
          <span className="pill">Nepřátel {snap.enemiesAlive}</span>
          <button
            type="button"
            className="icon-btn"
            aria-label={snap.muted ? "Zapnout zvuk" : "Ztlumit"}
            onClick={() => api()?.toggleMute()}
          >
            {snap.muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </button>
          <button type="button" className="icon-btn" aria-label="Nová mise" onClick={() => api()?.restart()}>
            <RotateCcw className="size-4" />
          </button>
        </div>
      </header>

      <div className="layout">
        <div className="stage">
          <div className="canvas-frame">
            <canvas
              ref={canvasRef}
              width={960}
              height={576}
              aria-label="Mapa Malé Strany, patnáct na devět polí"
            />
          </div>
          <p className="status-line" aria-live="polite">
            {snap.hoverText}
          </p>
        </div>

        <aside className="panel">
          <p className="objective">{snap.objective}</p>
          {playable ? (
            <div className="actions">
              {snap.weaponButtons.length > 0 ? (
                <div className="weapon-row">
                  {snap.weaponButtons.map((weapon) => (
                    <button
                      key={weapon.id}
                      type="button"
                      className="btn"
                      data-on={weapon.active}
                      disabled={snap.busy || snap.turn !== "player"}
                      onClick={() => api()?.setWeapon(weapon.id)}
                    >
                      {weapon.name}
                    </button>
                  ))}
                </div>
              ) : null}
              {snap.reload.visible ? (
                <button type="button" className="btn" disabled={!snap.reload.enabled} onClick={() => api()?.reload()}>
                  {snap.reload.label}
                </button>
              ) : null}
              {snap.prayer.visible ? (
                <button type="button" className="btn" disabled={!snap.prayer.enabled} onClick={() => api()?.prayer()}>
                  <Heart className="size-4" />
                  {snap.prayer.label}
                </button>
              ) : null}
              {snap.rozkaz.visible ? (
                <button
                  type="button"
                  className="btn"
                  data-on={snap.mode === "rozkaz"}
                  disabled={!snap.rozkaz.enabled}
                  onClick={() => api()?.startRozkaz()}
                >
                  <Flag className="size-4" />
                  {snap.rozkaz.label}
                </button>
              ) : null}
              {snap.hradba.visible ? (
                <button type="button" className="btn" disabled={!snap.hradba.enabled} onClick={() => api()?.hradba()}>
                  <Shield className="size-4" />
                  {snap.hradba.label}
                </button>
              ) : null}
              {snap.sail.visible ? (
                <button type="button" className="btn btn-blood" disabled={!snap.sail.enabled} onClick={() => api()?.sail()}>
                  <Ship className="size-4" />
                  {snap.sail.label}
                </button>
              ) : null}
              {snap.endTurn.visible ? (
                <button type="button" className="btn btn-gold" disabled={!snap.endTurn.enabled} onClick={() => api()?.endTurn()}>
                  {snap.endTurn.label}
                </button>
              ) : null}
            </div>
          ) : (
            <p className="objective">Vyberte muže na mapě nebo v seznamu. Zlatá pole jsou pohyb, rudí Švédové útok.</p>
          )}

          <div className="roster">
            <h2>Císařští</h2>
            {imperials.map((unit) => (
              <UnitCard key={unit.id} unit={unit} selected={snap.selectedId === unit.id} onPick={() => api()?.activate(unit.id)} />
            ))}
            <h2>Švédové</h2>
            {swedes.map((unit) => (
              <UnitCard key={unit.id} unit={unit} selected={false} onPick={() => api()?.activate(unit.id)} />
            ))}
          </div>

          <details className="help">
            <summary>Jak se velí</summary>
            <ul>
              <li>Klepněte na svého muže, pak na zlaté pole. Jedna až tři pole stojí 1 akční bod.</li>
              <li>Klepněte na Švéda v dostřelu. Šanci zásahu uvidíte před ranou.</li>
              <li>Po výstřelu z palné zbraně nabijte. Kouř na vašem poli kryje jako vůz.</li>
              <li>Vůz, suť a kouř kryjí −25 %. Zeď z úhlu −50 %. Zeď v přímce střelu zastaví. Sečná zbraň bere z krytu jen polovinu. Granát kryt obchází.</li>
              <li>Kabátec ubere 1 život zbraním s malým průrazem, půlzbroj 2. Mušketa plát prorazí. Granát zbroj strhne.</li>
              <li>Granát: vyberte ho a klepněte na pole. Výbuch vezme i sousedy, i vaše. Stojí celý tah. Ve vlhku doutnák někdy bouchne u nohou.</li>
              <li>Petarda: vyberte ji a klepněte na sousední zeď. Zeď spadne v suť. Nosič stojí ve výbuchu.</li>
              <li>Rozkaz maršála přidá spojenci bod. Jeho smrt končí noc.</li>
              <li>Jednou za noc: modlitba vrátí 3 životy a přidá čtvrtinu k příštímu úderu.</li>
              <li>Jakubova Hradba bodne a zastaví prvního Švéda, který vstoupí na dvě pole.</li>
            </ul>
          </details>

          <div className="log" aria-live="polite">
            {snap.log.length === 0 ? <p>Rozkaz ještě nepadl.</p> : snap.log.map((line, i) => <p key={`${i}-${line}`}>{line}</p>)}
          </div>
        </aside>
      </div>

      {snap.phase === "briefing" ? (
        <div className="overlay">
          <article className="sheet">
            <div className="sheet-body">
              <p className="kicker">26. července 1648</p>
              <h2>Noc na Malé Straně</h2>
              <p>
                Švédský generál Königsmark přepadl Prahu. Maršál Rudolf Colloredo je odříznut mezi palácem a Vltavou.
                Loďka u nábřeží uveze jen jeho a jednoho muže. Druzí dva zůstanou na břehu a tři nárazy drží posily.
              </p>
              <ul>
                <li>Colloredo nemá zbraň. Rozkaz dá spojenci další akční bod. Padne-li, noc končí.</li>
                <li>V prvním tahu ho schovejte za zeď u paláce. Švédové míří na maršála přednostně.</li>
                <li>Martin nese kolečkovou pistoli, karabinu, rapír a jeden granát. Zlaté tlačítko je zbraň, kterou právě drží.</li>
                <li>Václav má doutnákovou mušketu. Nabití stojí celý tah a ve vlhku od řeky občas selže. Prorazí půlzbroj.</li>
                <li>Jakub drží halapartnu a petardu. Hradba zastaví prvního Švéda. Petarda boří zeď.</li>
              </ul>
            </div>
            <button
              type="button"
              className="btn btn-gold"
              onClick={() => {
                api()?.unlock();
                api()?.begin();
              }}
            >
              Vstoupit do ulic
            </button>
          </article>
        </div>
      ) : null}

      {snap.epilogue ? (
        <div className="overlay">
          <article className="sheet" data-outcome={snap.epilogue.outcome}>
            <div className="sheet-body">
              <p className="kicker">{snap.epilogue.kicker}</p>
              <h2>{snap.epilogue.title}</h2>
              {snap.epilogue.paragraphs.map((paragraph, i) => (
                <p key={`${i}-${paragraph}`}>{paragraph}</p>
              ))}
              {snap.epilogue.martyrs.length > 0 ? (
                <div className="martyrs">
                  {snap.epilogue.martyrs.map((martyr) => (
                    <div key={martyr.name}>
                      <h3>{martyr.name}</h3>
                      <p>{martyr.line}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <button type="button" className="btn btn-blood" onClick={() => api()?.restart()}>
              Nová noc
            </button>
          </article>
        </div>
      ) : null}
    </main>
  );
}

function apLabel(n: number): string {
  const m = Math.abs(n) % 100;
  if (m === 1) return `${n} akční bod`;
  if (m >= 2 && m <= 4) return `${n} akční body`;
  return `${n} akčních bodů`;
}

function UnitCard({
  unit,
  selected,
  onPick,
}: {
  unit: HudUnit;
  selected: boolean;
  onPick: () => void;
}) {
  const pips = Math.max(unit.maxAp, unit.ap);
  const width = `${Math.max(0, Math.min(100, (unit.hp / unit.maxHp) * 100))}%`;
  return (
    <button
      type="button"
      className="card"
      data-on={selected}
      data-dead={!unit.alive || unit.embarked}
      onClick={onPick}
    >
      <span className="seal" data-side={unit.faction === "swedish" ? "swedish" : "imperial"}>
        {unit.name.slice(0, 1)}
      </span>
      <span>
        <strong>
          {unit.name} · {unit.hp}/{unit.maxHp}
        </strong>
        <small>
          {unit.title}
          {unit.status ? ` · ${unit.status}` : ""}
        </small>
        <span className="hp" data-side={unit.faction}>
          <span style={{ width }} />
        </span>
        {unit.alive && !unit.embarked ? (
          <span className="pips" aria-label={apLabel(unit.ap)}>
            {Array.from({ length: pips }, (_, i) => (
              <i key={i} data-on={i < unit.ap} />
            ))}
          </span>
        ) : null}
      </span>
    </button>
  );
}
