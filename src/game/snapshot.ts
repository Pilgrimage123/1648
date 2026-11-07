import {
  endTurnInfo,
  firearm,
  hradbaInfo,
  objectiveLine,
  phaseLabel,
  prayerInfo,
  reloadInfo,
  rozkazInfo,
  sailInfo,
} from "./orders";
import type { Epilogue, HudUnit, Sim, Snapshot, UiState, Unit } from "./types";
import { armorLabel, gunLoaded } from "./units";

function statusOf(unit: Unit): string {
  if (unit.embarked) return "Na loďce";
  if (!unit.alive) return "Padl";
  const bits: string[] = [];
  if (unit.overwatch) bits.push("Hradba");
  if (unit.blessing) bits.push("Požehnán");
  const plate = armorLabel(unit);
  if (plate) bits.push(plate);
  const gun = firearm(unit);
  if (gun) bits.push(gunLoaded(unit, gun) ? `${gun.short} nabitá` : `${gun.short} vybitá`);
  else if (unit.weapons.length > 0) bits.push(unit.weapons[unit.weaponIndex]?.short ?? "Zbraň");
  else bits.push("Beze zbraně");
  return bits.join(" · ");
}

function hud(unit: Unit): HudUnit {
  return {
    id: unit.id,
    name: unit.name,
    title: unit.title,
    faction: unit.faction,
    archetype: unit.archetype,
    hp: unit.hp,
    maxHp: unit.maxHp,
    ap: unit.ap,
    maxAp: unit.maxAp,
    alive: unit.alive,
    embarked: unit.embarked,
    vip: unit.vip,
    loaded: firearm(unit) ? gunLoaded(unit, firearm(unit)!) : null,
    blessing: unit.blessing,
    overwatch: unit.overwatch,
    prayerUsed: unit.prayerUsed,
    weapons: unit.weapons.map((w, i) => ({
      id: w.id,
      name: unit.stock[w.id] === undefined ? w.short : `${w.short} · ${unit.stock[w.id]}`,
      active: unit.weaponIndex === i,
    })),
    status: statusOf(unit),
  };
}

export function project(sim: Sim, ui: UiState, epilogue: Epilogue | null): Snapshot {
  const selected = sim.units.find((u) => u.id === ui.selectedId) ?? null;
  const weaponButtons =
    selected && selected.faction === "imperial" && selected.weapons.length > 1
      ? selected.weapons.map((w, i) => ({
          id: w.id,
        name: selected.stock[w.id] === undefined ? w.short : `${w.short} · ${selected.stock[w.id]}`,
          active: selected.weaponIndex === i,
        }))
      : [];
  const sail = sailInfo(sim, ui.selectedId, ui.busy);
  return {
    phase: sim.phase,
    phaseLabel: phaseLabel(sim),
    objective: objectiveLine(sim),
    round: sim.round,
    turn: sim.turn,
    holdLeft: sim.phase === "hold" ? sim.holdLeft : null,
    busy: ui.busy,
    muted: ui.muted,
    mode: ui.mode,
    selectedId: ui.selectedId,
    hoverText: ui.hoverText,
    log: sim.log.slice(-12),
    units: sim.units.map(hud),
    enemiesAlive: sim.units.filter((u) => u.faction === "swedish" && u.alive).length,
    reload: reloadInfo(sim, ui.selectedId, ui.busy),
    prayer: prayerInfo(sim, ui.selectedId, ui.busy),
    rozkaz: rozkazInfo(sim, ui.selectedId, ui.busy, ui.mode),
    hradba: hradbaInfo(sim, ui.selectedId, ui.busy),
    sail: { visible: sail.visible, enabled: sail.enabled, label: sail.label },
    endTurn: endTurnInfo(sim, ui.busy),
    weaponButtons,
    epilogue,
  };
}
