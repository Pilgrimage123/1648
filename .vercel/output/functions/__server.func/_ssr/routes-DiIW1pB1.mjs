import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Ship, c as Flag, i as Shield, n as Volume2, o as RotateCcw, s as Heart, t as VolumeX } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DiIW1pB1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SEED = 16480726;
var WEAPONS = {
	pistol: {
		id: "pistol",
		name: "Kolečková pistole",
		short: "Pistole",
		range: 4,
		damage: 4,
		ap: 1,
		reloadAp: 1,
		accuracy: 78,
		falloff: 8,
		firearm: true,
		misfire: .04,
		pierce: 1,
		shred: 0,
		blast: 0,
		delivery: "shot"
	},
	carbine: {
		id: "carbine",
		name: "Dragounská karabina",
		short: "Karabina",
		range: 6,
		damage: 5,
		ap: 1,
		reloadAp: 1,
		accuracy: 68,
		falloff: 4,
		firearm: true,
		misfire: .08,
		pierce: 2,
		shred: 0,
		blast: 0,
		delivery: "shot"
	},
	rapier: {
		id: "rapier",
		name: "Rapír",
		short: "Rapír",
		range: 1,
		damage: 4,
		ap: 1,
		reloadAp: 0,
		accuracy: 90,
		falloff: 0,
		firearm: false,
		misfire: 0,
		pierce: 0,
		shred: 0,
		blast: 0,
		delivery: "shot"
	},
	musket: {
		id: "musket",
		name: "Doutnáková mušketa",
		short: "Mušketa",
		range: 8,
		damage: 7,
		ap: 1,
		reloadAp: 2,
		accuracy: 74,
		falloff: 3,
		firearm: true,
		misfire: .12,
		pierce: 3,
		shred: 0,
		blast: 0,
		delivery: "shot"
	},
	halberd: {
		id: "halberd",
		name: "Halapartna",
		short: "Halapartna",
		range: 2,
		damage: 5,
		ap: 1,
		reloadAp: 0,
		accuracy: 84,
		falloff: 0,
		firearm: false,
		misfire: 0,
		pierce: 2,
		shred: 0,
		blast: 0,
		delivery: "shot"
	},
	pike: {
		id: "pike",
		name: "Pika",
		short: "Pika",
		range: 2,
		damage: 5,
		ap: 1,
		reloadAp: 0,
		accuracy: 78,
		falloff: 0,
		firearm: false,
		misfire: 0,
		pierce: 1,
		shred: 0,
		blast: 0,
		delivery: "shot"
	},
	swedeMusket: {
		id: "swedeMusket",
		name: "Švédská mušketa",
		short: "Mušketa",
		range: 7,
		damage: 4,
		ap: 1,
		reloadAp: 1,
		accuracy: 62,
		falloff: 5,
		firearm: true,
		misfire: .08,
		pierce: 2,
		shred: 0,
		blast: 0,
		delivery: "shot"
	},
	grenade: {
		id: "grenade",
		name: "Ruční granát",
		short: "Granát",
		range: 3,
		damage: 5,
		ap: 2,
		reloadAp: 0,
		accuracy: 58,
		falloff: 4,
		firearm: false,
		misfire: .12,
		pierce: 1,
		shred: 2,
		blast: 1,
		delivery: "throw"
	},
	petard: {
		id: "petard",
		name: "Petarda",
		short: "Petarda",
		range: 1,
		damage: 6,
		ap: 2,
		reloadAp: 0,
		accuracy: 100,
		falloff: 0,
		firearm: false,
		misfire: .18,
		pierce: 2,
		shred: 2,
		blast: 1,
		delivery: "place"
	}
};
var LOOK = {
	colloredo: {
		coat: "#7a1e2e",
		trim: "#e2c27a",
		skin: "#efd0b0",
		hat: "#241910",
		legs: "#1a1214",
		metal: "#d7c08a",
		scale: 1.02
	},
	martin: {
		coat: "#8d5a30",
		trim: "#9a2433",
		skin: "#f0d2b2",
		hat: "#3a2816",
		legs: "#241910",
		metal: "#c9ccd2",
		scale: 1
	},
	vaclav: {
		coat: "#1b2433",
		trim: "#ead9b8",
		skin: "#f3d5b8",
		hat: "#12161e",
		legs: "#14161c",
		metal: "#8d8272",
		scale: .96
	},
	jakub: {
		coat: "#4e3828",
		trim: "#c4a15a",
		skin: "#c99268",
		hat: "#3a2618",
		legs: "#241910",
		metal: "#b7bdc4",
		scale: 1.08
	},
	musketeer: {
		coat: "#d2b15c",
		trim: "#1d3e78",
		skin: "#f0d0ae",
		hat: "#243044",
		legs: "#2a2118",
		metal: "#9aa3ad",
		scale: 1
	},
	pikeman: {
		coat: "#c6a24e",
		trim: "#1d3e78",
		skin: "#e8c8a4",
		hat: "#8e969e",
		legs: "#2a2118",
		metal: "#d5d8de",
		scale: 1.04
	}
};
var TILE_LABEL = {
	cobble: "Dlažba",
	palace: "Nádvoří paláce",
	wall: "Kamenná zeď",
	cart: "Vůz — poloviční kryt",
	river: "Vltava",
	boat: "Loďka",
	quay: "Nábřeží",
	rubble: "Suť — poloviční kryt"
};
var SPAWNS = [
	[0, 3],
	[0, 4],
	[0, 5],
	[0, 2],
	[1, 2],
	[0, 6],
	[2, 8],
	[3, 8],
	[1, 7],
	[2, 7]
];
var RAW = [
	"pp#..c...#..c.~",
	"p...#....#....~",
	"..c.#..c...#..~",
	"..#c.......#qqb",
	".....#.....#.q~",
	"...#.#.c....q.~",
	"..c......#.#.c~",
	"p....#....#...~",
	"pp..c..#....c.~"
];
var LEGEND = {
	".": "cobble",
	p: "palace",
	"#": "wall",
	c: "cart",
	"~": "river",
	b: "boat",
	q: "quay"
};
function createTiles() {
	if (RAW.length !== 9) throw new Error("Mapa nemá 9 řad.");
	return RAW.map((row, y) => {
		if (row.length !== 15) throw new Error(`Řada ${y} má ${row.length} polí.`);
		return [...row].map((ch) => {
			const kind = LEGEND[ch];
			if (!kind) throw new Error(`Neznámé pole ${ch}`);
			return kind;
		});
	});
}
function hash01(x, y, n) {
	let h = Math.imul(x + 19, 374761393) ^ Math.imul(y + 7, 668265263) ^ Math.imul(n + 3, 1442695041);
	h = Math.imul(h ^ h >>> 13, 1274126177);
	return ((h ^ h >>> 16) >>> 0) / 4294967296;
}
function inBounds(x, y) {
	return x >= 0 && y >= 0 && x < 15 && y < 9;
}
function at(tiles, x, y) {
	if (!inBounds(x, y)) return null;
	return tiles[y]?.[x] ?? null;
}
function walkable(tiles, x, y, allowBoat) {
	const t = at(tiles, x, y);
	if (!t || t === "wall" || t === "river") return false;
	if (t === "boat") return allowBoat;
	return true;
}
function boards(unit, phase) {
	if (phase === "hold" || phase === "victory" || phase === "defeat") return false;
	return unit.vip || unit.faction === "swedish";
}
function chebyshev(ax, ay, bx, by) {
	return Math.max(Math.abs(ax - bx), Math.abs(ay - by));
}
var DIRS = [
	[1, 0],
	[-1, 0],
	[0, 1],
	[0, -1],
	[1, 1],
	[1, -1],
	[-1, 1],
	[-1, -1]
];
function occupied(units, ignoreId) {
	const set = /* @__PURE__ */ new Set();
	for (const u of units) {
		if (!u.alive || u.embarked || u.id === ignoreId) continue;
		set.add(`${u.x},${u.y}`);
	}
	return set;
}
function canStep(tiles, blocked, x, y, nx, ny, allowBoat) {
	if (!walkable(tiles, nx, ny, allowBoat)) return false;
	if (blocked.has(`${nx},${ny}`)) return false;
	if (nx !== x && ny !== y) {
		if (!walkable(tiles, x, ny, allowBoat) || !walkable(tiles, nx, y, allowBoat)) return false;
		if (blocked.has(`${x},${ny}`) || blocked.has(`${nx},${y}`)) return false;
	}
	return true;
}
function flood(tiles, blocked, sx, sy, maxSteps, allowBoat) {
	const nodes = /* @__PURE__ */ new Map();
	const start = `${sx},${sy}`;
	nodes.set(start, {
		x: sx,
		y: sy,
		steps: 0,
		parent: null
	});
	const queue = [start];
	let qi = 0;
	while (qi < queue.length) {
		const key = queue[qi++];
		const cur = nodes.get(key);
		if (cur.steps >= maxSteps) continue;
		for (const [dx, dy] of DIRS) {
			const nx = cur.x + dx;
			const ny = cur.y + dy;
			const nk = `${nx},${ny}`;
			if (nodes.has(nk)) continue;
			if (!canStep(tiles, blocked, cur.x, cur.y, nx, ny, allowBoat)) continue;
			nodes.set(nk, {
				x: nx,
				y: ny,
				steps: cur.steps + 1,
				parent: key
			});
			queue.push(nk);
		}
	}
	return nodes;
}
function reconstruct(nodes, x, y) {
	const out = [];
	let key = `${x},${y}`;
	for (let n = 0; n < 80 && nodes.has(key); n++) {
		const node = nodes.get(key);
		if (node.parent == null) break;
		out.push({
			x: node.x,
			y: node.y
		});
		key = node.parent;
	}
	out.reverse();
	return out;
}
function hasLineOfSight(tiles, x0, y0, x1, y1) {
	if (x0 === x1 && y0 === y1) return true;
	let x = x0;
	let y = y0;
	const dx = Math.abs(x1 - x0);
	const dy = Math.abs(y1 - y0);
	const sx = x0 < x1 ? 1 : -1;
	const sy = y0 < y1 ? 1 : -1;
	let err = dx - dy;
	while (x !== x1 || y !== y1) {
		const e2 = 2 * err;
		let ox = 0;
		let oy = 0;
		if (e2 > -dy) {
			err -= dy;
			x += sx;
			ox = sx;
		}
		if (e2 < dx) {
			err += dx;
			y += sy;
			oy = sy;
		}
		if (x === x1 && y === y1) return true;
		if (at(tiles, x, y) === "wall") return false;
		if (ox !== 0 && oy !== 0) {
			if (at(tiles, x - ox, y) === "wall" && at(tiles, x, y - oy) === "wall") return false;
		}
	}
	return true;
}
function coverValue(tiles, smokes, x, y, ax, ay) {
	let cover = 0;
	if (at(tiles, x, y) === "cart" || at(tiles, x, y) === "rubble" || smokes.some((s) => s.x === x && s.y === y)) cover = 25;
	const sx = Math.sign(ax - x);
	const sy = Math.sign(ay - y);
	const checks = [];
	if (sx !== 0) checks.push([x + sx, y]);
	if (sy !== 0) checks.push([x, y + sy]);
	if (sx !== 0 && sy !== 0) checks.push([x + sx, y + sy]);
	for (const [cx, cy] of checks) {
		const tile = at(tiles, cx, cy);
		if (tile === "wall") return 50;
		if (tile === "cart" || tile === "rubble") cover = 25;
	}
	return cover;
}
function placeSmoke(smokes, clock, x, y) {
	const expire = clock + 2;
	const existing = smokes.find((s) => s.x === x && s.y === y);
	if (existing) existing.expire = Math.max(existing.expire, expire);
	else smokes.push({
		x,
		y,
		expire
	});
}
function ageClock(clock, smokes) {
	const next = clock + 1;
	return {
		clock: next,
		smokes: smokes.filter((s) => s.expire > next)
	};
}
function mulberry32(seed) {
	let a = seed >>> 0;
	return () => {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function base(partial, gear) {
	const armor = gear?.armor ?? 0;
	return {
		...partial,
		maxHp: partial.hp,
		ap: 2,
		maxAp: 2,
		facing: partial.faction === "imperial" ? 1 : -1,
		alive: true,
		embarked: false,
		weaponIndex: 0,
		loaded: partial.weapons.some((w) => w.firearm),
		ready: partial.weapons.filter((w) => w.firearm).map((w) => w.id),
		stock: gear?.stock ?? {},
		armor,
		armorMax: armor,
		prayerUsed: false,
		blessing: false,
		overwatch: false,
		fate: "none",
		bob: hash01(partial.x, partial.y, 9) * Math.PI * 2
	};
}
function gunLoaded(unit, weapon) {
	if (!weapon.firearm) return true;
	return unit.ready.includes(weapon.id);
}
function markLoaded(unit, id) {
	if (!unit.ready.includes(id)) unit.ready.push(id);
	syncLoaded(unit);
}
function markUnloaded(unit, id) {
	unit.ready = unit.ready.filter((ready) => ready !== id);
	syncLoaded(unit);
}
function syncLoaded(unit) {
	const armed = unit.weapons[unit.weaponIndex];
	if (armed?.firearm) unit.loaded = unit.ready.includes(armed.id);
	else unit.loaded = unit.weapons.some((w) => w.firearm && unit.ready.includes(w.id));
}
function armorLabel(unit) {
	if (unit.armor >= 2) return "půlzbroj";
	if (unit.armor === 1) return "kabátec";
	if (unit.armorMax > 0) return "zbroj stržena";
	return "";
}
function createRoster() {
	return [
		base({
			id: "colloredo",
			name: "Colloredo",
			title: "Maršál, bez zbraně",
			faction: "imperial",
			archetype: "colloredo",
			vip: true,
			prayer: false,
			hp: 6,
			x: 1,
			y: 4,
			weapons: []
		}),
		base({
			id: "martin",
			name: "Martin",
			title: "Císařský dragoun",
			faction: "imperial",
			archetype: "martin",
			vip: false,
			prayer: true,
			hp: 10,
			x: 0,
			y: 3,
			weapons: [
				WEAPONS.pistol,
				WEAPONS.carbine,
				WEAPONS.rapier,
				WEAPONS.grenade
			]
		}, {
			armor: 1,
			stock: { grenade: 1 }
		}),
		base({
			id: "vaclav",
			name: "Václav",
			title: "Student z Klementina",
			faction: "imperial",
			archetype: "vaclav",
			vip: false,
			prayer: true,
			hp: 7,
			x: 0,
			y: 5,
			weapons: [WEAPONS.musket]
		}),
		base({
			id: "jakub",
			name: "Jakub",
			title: "Malostranský kovář",
			faction: "imperial",
			archetype: "jakub",
			vip: false,
			prayer: true,
			hp: 13,
			x: 1,
			y: 6,
			weapons: [WEAPONS.halberd, WEAPONS.petard]
		}, {
			armor: 1,
			stock: { petard: 1 }
		}),
		base({
			id: "olof",
			name: "Olof",
			title: "Švédský mušketýr",
			faction: "swedish",
			archetype: "musketeer",
			vip: false,
			prayer: false,
			hp: 6,
			x: 5,
			y: 0,
			weapons: [WEAPONS.swedeMusket]
		}, { armor: 1 }),
		base({
			id: "lars",
			name: "Lars",
			title: "Švédský mušketýr",
			faction: "swedish",
			archetype: "musketeer",
			vip: false,
			prayer: false,
			hp: 6,
			x: 7,
			y: 2,
			weapons: [WEAPONS.swedeMusket]
		}, { armor: 1 }),
		base({
			id: "erik",
			name: "Erik",
			title: "Švédský pikenýr",
			faction: "swedish",
			archetype: "pikeman",
			vip: false,
			prayer: false,
			hp: 10,
			x: 8,
			y: 4,
			weapons: [WEAPONS.pike]
		}, { armor: 2 }),
		base({
			id: "nils",
			name: "Nils",
			title: "Švédský pikenýr",
			faction: "swedish",
			archetype: "pikeman",
			vip: false,
			prayer: false,
			hp: 10,
			x: 10,
			y: 6,
			weapons: [WEAPONS.pike]
		}, { armor: 2 })
	];
}
function makeSwede(kind, id, name, x, y) {
	if (kind === "grenadier") return base({
		id,
		name,
		title: "Švédský granátník",
		faction: "swedish",
		archetype: "musketeer",
		vip: false,
		prayer: false,
		hp: 8,
		x,
		y,
		weapons: [WEAPONS.swedeMusket, WEAPONS.grenade]
	}, {
		armor: 1,
		stock: { grenade: 1 }
	});
	const musket = kind === "musketeer";
	return base({
		id,
		name,
		title: musket ? "Švédská posila · mušketa" : "Švédská posila · pika",
		faction: "swedish",
		archetype: musket ? "musketeer" : "pikeman",
		vip: false,
		prayer: false,
		hp: musket ? 6 : 10,
		x,
		y,
		weapons: [musket ? WEAPONS.swedeMusket : WEAPONS.pike]
	}, { armor: musket ? 1 : 2 });
}
function createSim(seed = SEED) {
	const tiles = createTiles();
	const units = createRoster();
	for (const u of units) {
		const tile = at(tiles, u.x, u.y);
		if (!tile || tile === "wall" || tile === "river") throw new Error(`Špatné pole pro ${u.id}: ${u.x},${u.y}`);
	}
	return {
		tiles,
		units,
		smokes: [],
		decals: [],
		clock: 0,
		phase: "briefing",
		turn: "player",
		round: 1,
		holdLeft: 0,
		seq: 1,
		kills: 0,
		log: [],
		rng: mulberry32(seed),
		pendingEnd: null,
		nameBag: [
			"Sven",
			"Gustaf",
			"Anders",
			"Per",
			"Karl",
			"Bengt"
		]
	};
}
function unitById(sim, id) {
	if (!id) return null;
	return sim.units.find((u) => u.id === id) ?? null;
}
function living(units) {
	return units.filter((u) => u.alive && !u.embarked);
}
function hasDefender(sim) {
	return sim.units.some((u) => u.faction === "imperial" && !u.vip && u.alive && !u.embarked);
}
function hasHope(sim) {
	return sim.units.some((u) => u.faction === "imperial" && !u.vip && u.alive);
}
function pushLog(sim, line) {
	sim.log.push(line);
	if (sim.log.length > 48) sim.log.shift();
}
function hitChance(attacker, weapon, dist, cover) {
	let acc = weapon.accuracy - Math.max(0, dist - 1) * weapon.falloff;
	const penalty = weapon.delivery === "throw" ? 0 : weapon.firearm ? cover : Math.round(cover * .5);
	acc -= penalty;
	if (attacker.blessing) acc += 25;
	return Math.max(6, Math.min(96, Math.round(acc)));
}
function evaluateShot(attacker, ax, ay, defender, tiles, smokes, opts) {
	const dist = chebyshev(ax, ay, defender.x, defender.y);
	if (attacker.weapons.length === 0 || defender.embarked || !defender.alive) return {
		weaponIndex: -1,
		chance: 0,
		cover: 0,
		dist,
		reason: "none"
	};
	const weaponIndex = Math.max(0, Math.min(attacker.weaponIndex, attacker.weapons.length - 1));
	const weapon = attacker.weapons[weaponIndex];
	const cover = weapon.delivery === "throw" ? 0 : coverValue(tiles, smokes, defender.x, defender.y, ax, ay);
	const chance = hitChance(attacker, weapon, dist, cover);
	let reason = "ok";
	const left = attacker.stock[weapon.id];
	if (weapon.delivery === "place") reason = "none";
	else if (left !== void 0 && left <= 0) reason = "empty";
	else if (dist <= 0 || dist > weapon.range) reason = "range";
	else if (!hasLineOfSight(tiles, ax, ay, defender.x, defender.y)) reason = "los";
	else if (weapon.firearm && !gunLoaded(attacker, weapon) && !opts?.ignoreLoad) reason = "load";
	else if (!opts?.ignoreAp && attacker.ap < weapon.ap) reason = "ap";
	return {
		weaponIndex,
		chance,
		cover,
		dist,
		reason
	};
}
function rollAttack(sim, weapon, chance) {
	if (weapon.firearm && weapon.misfire > 0 && sim.rng() < weapon.misfire) return {
		hit: false,
		misfire: true,
		damage: 0,
		roll: -1,
		stopped: 0,
		shredded: 0
	};
	const roll = sim.rng() * 100;
	const hit = roll < chance;
	return {
		hit,
		misfire: false,
		damage: hit ? weapon.damage : 0,
		roll,
		stopped: 0,
		shredded: 0
	};
}
function mitigate(target, weapon, damage) {
	const stopped = Math.max(0, Math.min(damage, target.armor - weapon.pierce));
	const dealt = damage - stopped;
	let shredded = 0;
	if (weapon.shred > 0 && target.armor > 0) {
		shredded = Math.min(target.armor, weapon.shred);
		target.armor -= shredded;
	}
	if (dealt > 0) target.hp = Math.max(0, target.hp - dealt);
	return {
		dealt,
		stopped,
		shredded
	};
}
var NEIGHBORS = [
	[1, 0],
	[-1, 0],
	[0, 1],
	[0, -1],
	[1, 1],
	[1, -1],
	[-1, 1],
	[-1, -1]
];
function scatterTile(sim, x, y) {
	const open = [];
	for (const [dx, dy] of NEIGHBORS) {
		const tile = at(sim.tiles, x + dx, y + dy);
		if (tile && tile !== "wall" && tile !== "river") open.push({
			x: x + dx,
			y: y + dy
		});
	}
	if (open.length === 0) return {
		x,
		y
	};
	return open[Math.floor(sim.rng() * open.length)] ?? {
		x,
		y
	};
}
function unitsInBlast(sim, x, y, radius) {
	return sim.units.filter((unit) => unit.alive && !unit.embarked && chebyshev(unit.x, unit.y, x, y) <= radius).sort((a, b) => Number(b.vip) - Number(a.vip));
}
function commitAttack(sim, attacker, defender, weapon, result) {
	if (weapon.firearm) {
		markUnloaded(attacker, weapon.id);
		placeSmoke(sim.smokes, sim.clock, attacker.x, attacker.y);
	}
	if (attacker.blessing) attacker.blessing = false;
	if (result.hit && !result.misfire) {
		const hit = mitigate(defender, weapon, result.damage);
		result.damage = hit.dealt;
		result.stopped = hit.stopped;
		result.shredded = hit.shredded;
	}
}
function reasonLine(info, attacker) {
	const weapon = attacker.weapons[info.weaponIndex];
	if (info.reason === "load") return `${weapon?.name ?? "Zbraň"} není nabitá.`;
	if (info.reason === "empty") return "Už mu žádná nezbyla.";
	if (info.reason === "ap") return "Málo akčních bodů.";
	if (info.reason === "los") return "Zeď stojí ve střele.";
	if (info.reason === "range") return "Příliš daleko.";
	if (attacker.vip) return "Colloredo neválčí zbraní. Může vydat rozkaz.";
	return "Teď nelze udeřit.";
}
function foesOf(sim) {
	return living(sim.units).filter((u) => u.faction === "imperial");
}
function jakubZone(sim, x, y) {
	const jakub = sim.units.find((u) => u.archetype === "jakub" && u.alive && !u.embarked && u.overwatch);
	if (!jakub) return false;
	if (chebyshev(x, y, jakub.x, jakub.y) > 2) return false;
	return hasLineOfSight(sim.tiles, jakub.x, jakub.y, x, y);
}
function bestShot(sim, unit, x, y, foes) {
	let best = null;
	for (const foe of foes) {
		const info = evaluateShot(unit, x, y, foe, sim.tiles, sim.smokes, { ignoreAp: true });
		if (info.reason !== "ok") continue;
		const weapon = unit.weapons[info.weaponIndex];
		if (!weapon || weapon.delivery !== "shot") continue;
		const stopped = Math.max(0, Math.min(weapon.damage, foe.armor - weapon.pierce));
		const dmg = weapon.damage - stopped;
		if (dmg <= 0) continue;
		let score = info.chance / 100 * dmg;
		if (foe.vip) score *= 1.35;
		if (foe.hp <= weapon.damage) score *= 1.25;
		if (!best || score > best.score) best = {
			foe,
			weaponIndex: info.weaponIndex,
			chance: info.chance,
			score
		};
	}
	return best;
}
function safety(sim, x, y, foes) {
	let best = 0;
	for (const foe of foes) best = Math.max(best, coverValue(sim.tiles, sim.smokes, x, y, foe.x, foe.y));
	return best;
}
function pathEntersZone(sim, nodes, x, y) {
	return reconstruct(nodes, x, y).some((p) => jakubZone(sim, p.x, p.y));
}
function moveDest(sim, unit, foes, avoidZone, minRange) {
	if (!unit.weapons[0]) return null;
	const blocked = occupied(sim.units, unit.id);
	const nodes = flood(sim.tiles, blocked, unit.x, unit.y, 40, boards(unit, sim.phase));
	let best = null;
	for (const node of nodes.values()) {
		if (node.steps === 0 || node.steps > 8) continue;
		if (avoidZone && pathEntersZone(sim, nodes, node.x, node.y)) continue;
		if (foes.some((f) => chebyshev(node.x, node.y, f.x, f.y) < minRange)) continue;
		const shot = bestShot(sim, unit, node.x, node.y, foes);
		if (!shot || shot.chance < 28) continue;
		const score = shot.score - node.steps * .35;
		if (!best || score > best.score) best = {
			node,
			score
		};
	}
	let goal = best?.node ?? null;
	if (!goal) {
		let bestD = Math.min(...foes.map((f) => chebyshev(unit.x, unit.y, f.x, f.y)));
		for (const node of nodes.values()) {
			if (node.steps === 0) continue;
			if (avoidZone && pathEntersZone(sim, nodes, node.x, node.y)) continue;
			let d = Infinity;
			for (const foe of foes) d = Math.min(d, chebyshev(node.x, node.y, foe.x, foe.y));
			if (d < minRange || d >= bestD) continue;
			bestD = d;
			goal = node;
		}
	}
	if (!goal) return null;
	const path = reconstruct(nodes, goal.x, goal.y);
	if (path.length === 0) return null;
	return path[Math.min(3, path.length) - 1] ?? null;
}
function coverStep(sim, unit, foes) {
	const gun = unit.weapons.find((w) => w.firearm);
	if (!gun || !gunLoaded(unit, gun) || unit.ap < 1 + gun.ap) return null;
	const blocked = occupied(sim.units, unit.id);
	const nodes = flood(sim.tiles, blocked, unit.x, unit.y, 3, boards(unit, sim.phase));
	const currentScore = (bestShot(sim, unit, unit.x, unit.y, foes)?.score ?? 0) + safety(sim, unit.x, unit.y, foes) * .035;
	let pick = null;
	for (const node of nodes.values()) {
		if (node.steps === 0 || node.steps > 3) continue;
		if (foes.some((f) => chebyshev(node.x, node.y, f.x, f.y) < 3)) continue;
		if (pathEntersZone(sim, nodes, node.x, node.y)) continue;
		const shot = bestShot(sim, unit, node.x, node.y, foes);
		if (!shot || shot.chance < 26) continue;
		const score = shot.score + safety(sim, node.x, node.y, foes) * .04 - node.steps * .15;
		if (!pick || score > pick.score) pick = {
			x: node.x,
			y: node.y,
			score
		};
	}
	if (!pick || pick.score < currentScore + .45) return null;
	return {
		x: pick.x,
		y: pick.y
	};
}
function grenadeThrow(sim, unit) {
	const weaponIndex = unit.weapons.findIndex((w) => w.delivery === "throw");
	if (weaponIndex < 0) return null;
	const weapon = unit.weapons[weaponIndex];
	if (!weapon || (unit.stock[weapon.id] ?? 0) <= 0 || unit.ap < weapon.ap) return null;
	let best = null;
	for (let y = 0; y < sim.tiles.length; y++) {
		const row = sim.tiles[y];
		if (!row) continue;
		for (let x = 0; x < row.length; x++) {
			const dist = chebyshev(unit.x, unit.y, x, y);
			if (dist < 1 || dist > weapon.range) continue;
			if (!hasLineOfSight(sim.tiles, unit.x, unit.y, x, y)) continue;
			let friends = 0;
			let hits = 0;
			let score = 0;
			for (const other of sim.units) {
				if (!other.alive || other.embarked) continue;
				if (chebyshev(other.x, other.y, x, y) > weapon.blast) continue;
				if (other.faction === "swedish") friends += 1;
				else {
					hits += 1;
					const stopped = Math.max(0, Math.min(weapon.damage, other.armor - weapon.pierce));
					score += weapon.damage - stopped;
				}
			}
			if (hits < 2 || friends > 0) continue;
			if (!best || score > best.score) best = {
				x,
				y,
				score
			};
		}
	}
	if (!best) return null;
	return {
		x: best.x,
		y: best.y,
		weaponIndex
	};
}
function nextAction(sim, unit) {
	if (!unit.alive || unit.embarked || unit.ap <= 0) return null;
	const foes = foesOf(sim);
	if (foes.length === 0) return null;
	const bomb = grenadeThrow(sim, unit);
	if (bomb) return {
		type: "throw",
		x: bomb.x,
		y: bomb.y,
		weaponIndex: bomb.weaponIndex
	};
	const weapon = unit.weapons[0];
	if (!weapon) return null;
	if (!weapon.firearm) {
		const shot = bestShot(sim, unit, unit.x, unit.y, foes);
		if (shot && unit.ap >= weapon.ap) return {
			type: "attack",
			targetId: shot.foe.id,
			weaponIndex: shot.weaponIndex
		};
		const dest = moveDest(sim, unit, foes, false, 1);
		if (dest && unit.ap >= 1) return {
			type: "move",
			x: dest.x,
			y: dest.y
		};
		return null;
	}
	const shot = gunLoaded(unit, weapon) ? bestShot(sim, unit, unit.x, unit.y, foes) : null;
	if (shot && shot.chance >= 42 && unit.ap >= weapon.ap) return {
		type: "attack",
		targetId: shot.foe.id,
		weaponIndex: shot.weaponIndex
	};
	const safer = gunLoaded(unit, weapon) ? coverStep(sim, unit, foes) : null;
	if (safer) return {
		type: "move",
		x: safer.x,
		y: safer.y
	};
	if (shot && shot.chance >= 28 && unit.ap >= weapon.ap) return {
		type: "attack",
		targetId: shot.foe.id,
		weaponIndex: shot.weaponIndex
	};
	if (!gunLoaded(unit, weapon) && unit.ap >= weapon.reloadAp) return { type: "reload" };
	if (shot && shot.chance >= 18 && unit.ap >= weapon.ap) return {
		type: "attack",
		targetId: shot.foe.id,
		weaponIndex: shot.weaponIndex
	};
	const dest = moveDest(sim, unit, foes, true, 3);
	if (dest && unit.ap >= 1 && (!shot || shot.chance < 18)) return {
		type: "move",
		x: dest.x,
		y: dest.y
	};
	if (shot && unit.ap >= weapon.ap) return {
		type: "attack",
		targetId: shot.foe.id,
		weaponIndex: shot.weaponIndex
	};
	return null;
}
function createMixer() {
	let ctx = null;
	let master = null;
	let sfx = null;
	let noise = null;
	let muted = false;
	function ensure() {
		const AC = window.AudioContext || window.webkitAudioContext;
		if (!AC) return null;
		if (!ctx) {
			ctx = new AC({ latencyHint: "interactive" });
			master = ctx.createGain();
			master.gain.value = .9;
			sfx = ctx.createGain();
			sfx.gain.value = .8;
			sfx.connect(master);
			master.connect(ctx.destination);
			const length = Math.floor(ctx.sampleRate * .45);
			noise = ctx.createBuffer(1, length, ctx.sampleRate);
			const data = noise.getChannelData(0);
			for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
		}
		if (ctx.state === "suspended") ctx.resume();
		return ctx;
	}
	function envGain(at, peak, dur) {
		if (!ctx || !sfx) return null;
		const g = ctx.createGain();
		g.connect(sfx);
		g.gain.setValueAtTime(1e-4, at);
		g.gain.exponentialRampToValueAtTime(Math.max(2e-4, peak), at + .012);
		g.gain.exponentialRampToValueAtTime(1e-4, at + dur);
		return g;
	}
	function tone(freq, dur, type, peak, slide = 1) {
		if (!ctx || muted) return;
		const t = ctx.currentTime;
		const o = ctx.createOscillator();
		const g = envGain(t, peak, dur);
		if (!g) return;
		o.type = type;
		o.frequency.setValueAtTime(freq, t);
		o.frequency.exponentialRampToValueAtTime(Math.max(40, freq * slide), t + dur);
		o.connect(g);
		o.start(t);
		o.stop(t + dur + .02);
		o.onended = () => {
			o.disconnect();
			g.disconnect();
		};
	}
	function burst(dur, peak, rate, freq) {
		if (!ctx || !noise || !sfx || muted) return;
		const t = ctx.currentTime;
		const src = ctx.createBufferSource();
		src.buffer = noise;
		src.playbackRate.value = rate;
		const filter = ctx.createBiquadFilter();
		filter.type = "lowpass";
		filter.frequency.setValueAtTime(freq, t);
		filter.frequency.exponentialRampToValueAtTime(180, t + dur);
		const g = envGain(t, peak, dur);
		if (!g) return;
		src.connect(filter);
		filter.connect(g);
		src.start(t);
		src.stop(t + dur + .02);
		src.onended = () => {
			src.disconnect();
			filter.disconnect();
			g.disconnect();
		};
	}
	return {
		unlock() {
			try {
				ensure();
			} catch {
				ctx = null;
			}
		},
		setMuted(next) {
			muted = next;
			if (!ctx || !master) return;
			master.gain.setTargetAtTime(next ? 1e-4 : .9, ctx.currentTime, .03);
		},
		close() {
			ctx?.close();
			ctx = null;
		},
		play(name) {
			if (muted) return;
			try {
				if (!ensure()) return;
			} catch {
				return;
			}
			const wobble = .94 + Math.random() * .12;
			if (name === "shot") {
				burst(.22, .55, wobble, 1400);
				tone(120, .18, "sine", .35, .4);
			} else if (name === "pistol") {
				burst(.12, .4, wobble * 1.2, 1800);
				tone(180, .1, "sine", .22, .5);
			} else if (name === "blade") {
				burst(.09, .22, 1.6, 2400);
				tone(640, .08, "triangle", .08, 1.4);
			} else if (name === "reload") {
				tone(180, .07, "square", .05, .8);
				tone(90, .12, "sine", .08, 1);
			} else if (name === "prayer") {
				tone(392, .35, "sine", .07, 1);
				tone(494, .4, "sine", .05, 1);
				tone(587, .45, "triangle", .04, 1);
			} else if (name === "ui") tone(520, .05, "sine", .04, 1.2);
			else if (name === "death") tone(110, .35, "sine", .2, .45);
			else if (name === "sail") {
				tone(262, .28, "triangle", .06, 1);
				tone(330, .36, "sine", .05, 1);
			} else if (name === "hurt") tone(90, .12, "sine", .16, .7);
			else if (name === "boom") {
				burst(.36, .72, .65, 520);
				tone(68, .3, "sine", .42, .32);
			}
		}
	};
}
var HIDDEN = {
	visible: false,
	enabled: false,
	label: ""
};
function ready(sim, busy) {
	return !busy && sim.turn === "player" && (sim.phase === "flight" || sim.phase === "dock" || sim.phase === "hold") && sim.pendingEnd == null;
}
function instrumental(unit) {
	if (unit.id === "martin") return "Martinem";
	if (unit.id === "vaclav") return "Václavem";
	if (unit.id === "jakub") return "Jakubem";
	return unit.name;
}
function firearm(unit) {
	if (!unit) return null;
	const armed = unit.weapons[unit.weaponIndex];
	if (armed?.firearm) return armed;
	const guns = unit.weapons.filter((w) => w.firearm);
	return guns.find((w) => !gunLoaded(unit, w)) ?? guns[0] ?? null;
}
function reloadInfo(sim, id, busy) {
	const unit = unitById(sim, id);
	const gun = firearm(unit);
	if (!unit || unit.faction !== "imperial" || !gun) return HIDDEN;
	const cost = gun.reloadAp;
	const loaded = gunLoaded(unit, gun);
	return {
		visible: true,
		enabled: ready(sim, busy) && unit.alive && !unit.embarked && !loaded && unit.ap >= cost,
		label: loaded ? `${gun.short} je nabitá` : `Nabít ${gun.short} · ${cost === 1 ? "1 AP" : `${cost} AP`}`
	};
}
function prayerInfo(sim, id, busy) {
	const unit = unitById(sim, id);
	if (!unit?.prayer || unit.faction !== "imperial") return HIDDEN;
	return {
		visible: true,
		enabled: ready(sim, busy) && unit.alive && !unit.embarked && !unit.prayerUsed,
		label: unit.prayerUsed ? "Modlitba už zazněla" : "Ježíši, Maria, pomoz!"
	};
}
function hradbaInfo(sim, id, busy) {
	const unit = unitById(sim, id);
	if (!unit || unit.archetype !== "jakub") return HIDDEN;
	return {
		visible: true,
		enabled: ready(sim, busy) && unit.alive && !unit.embarked && !unit.overwatch && unit.ap >= 1,
		label: unit.overwatch ? "Hradba stojí" : "Hradba · 1 AP"
	};
}
function rozkazInfo(sim, id, busy, mode) {
	const unit = unitById(sim, id);
	if (!unit?.vip) return HIDDEN;
	const on = mode === "rozkaz";
	return {
		visible: true,
		enabled: ready(sim, busy) && unit.alive && !unit.embarked && unit.ap >= 1,
		label: on ? "Zvolte spojence" : "Rozkaz · 1 AP"
	};
}
function sailInfo(sim, selectedId, busy) {
	if (sim.phase !== "dock") return {
		...HIDDEN,
		hero: null
	};
	const col = sim.units.find((u) => u.vip);
	const onBoat = !!col && col.alive && !col.embarked && at(sim.tiles, col.x, col.y) === "boat";
	const cands = sim.units.filter((u) => !u.vip && u.faction === "imperial" && u.alive && !u.embarked && at(sim.tiles, u.x, u.y) === "quay");
	if (!onBoat) return {
		visible: true,
		enabled: false,
		label: "Colloredo není na loďce",
		hero: null
	};
	if (cands.length === 0) return {
		visible: true,
		enabled: false,
		label: "Přiveďte hrdinu na nábřeží",
		hero: null
	};
	const only = cands.length === 1 ? cands[0] : cands.find((c) => c.id === selectedId) ?? null;
	if (!only) return {
		visible: true,
		enabled: false,
		label: "Vyberte, kdo odpluje",
		hero: null
	};
	return {
		visible: true,
		enabled: ready(sim, busy),
		label: `Odplout s ${instrumental(only)}`,
		hero: only
	};
}
function endTurnInfo(sim, busy) {
	if (!(sim.phase === "flight" || sim.phase === "dock" || sim.phase === "hold")) return HIDDEN;
	if (sim.turn === "enemy") return {
		visible: true,
		enabled: false,
		label: "Švédové jednají…"
	};
	return {
		visible: true,
		enabled: ready(sim, busy),
		label: busy ? "Provedení…" : "Ukončit tah"
	};
}
function objectiveLine(sim) {
	if (sim.phase === "briefing") return "Noc ještě nezačala.";
	if (sim.turn === "enemy") return "Švédové jednají — klepněte na mapu, ať se tah zrychlí.";
	if (sim.phase === "flight") return "Doveďte Colloreda živého na loďku u Vltavy.";
	if (sim.phase === "dock") return "Jeden hrdina na nábřeží. Ostatní dva zůstanou ve tmě.";
	if (sim.phase === "hold") {
		const n = sim.holdLeft;
		return `Udržte břeh. Loďka se odváže po ${n} ${n === 1 ? "náraz" : n >= 2 && n <= 4 ? "nárazy" : "nárazů"}.`;
	}
	return "";
}
function phaseLabel(sim) {
	switch (sim.phase) {
		case "briefing": return "Před útokem";
		case "flight": return "Útěk uličkami";
		case "dock": return "U loďky";
		case "hold": return "Poslední vzdor";
		case "victory": return "Odpluto";
		case "defeat": return "Pád";
	}
}
function healAmount(unit) {
	return Math.min(3, unit.maxHp - unit.hp);
}
var boat_default = "/assets/boat-ImI4fY28.png";
var cart_default = "/assets/cart-T8iR4WQ5.png";
var cobble_default = "/assets/cobble-DFXjQV4d.png";
var colloredo_default = "/assets/colloredo-BNmM2S6N.png";
var jakub_default = "/assets/jakub-Dai6rq0n.png";
var martin_default = "/assets/martin-CVxnIfjW.png";
var musketeer_default = "/assets/musketeer-CDKoOGeT.png";
var palace_default = "/assets/palace-ByTEvw4p.png";
var pikeman_default = "/assets/pikeman-BmpQq_MF.png";
var quay_default = "/assets/quay-Cs2DX3Vg.png";
var vaclav_default = "/assets/vaclav-C7zU_o83.png";
var wall_default = "/assets/wall-DawZIgvD.png";
var water_default = "/assets/water-C_m40Aso.png";
var plate = null;
var plateKey = "";
var GROUND = {
	cobble: cobble_default,
	wall: wall_default,
	palace: palace_default,
	water: water_default,
	quay: quay_default,
	cart: cart_default,
	boat: boat_default
};
var SPRITE = {
	colloredo: colloredo_default,
	martin: martin_default,
	vaclav: vaclav_default,
	jakub: jakub_default,
	musketeer: musketeer_default,
	pikeman: pikeman_default
};
var SPRITE_H = {
	colloredo: 46,
	martin: 44,
	vaclav: 44,
	jakub: 48,
	musketeer: 44,
	pikeman: 52
};
var images = /* @__PURE__ */ new Map();
function artImage(src) {
	if (typeof window === "undefined") return null;
	let img = images.get(src);
	if (!img) {
		img = new Image();
		img.decoding = "async";
		img.src = src;
		images.set(src, img);
	}
	return img.complete && img.naturalWidth > 0 ? img : null;
}
function artReady() {
	return Object.values(GROUND).every((src) => artImage(src));
}
function paint(ctx, view) {
	ctx.imageSmoothingEnabled = true;
	ctx.clearRect(0, 0, 960, 576);
	ctx.save();
	if (view.shake > 0) ctx.translate(Math.sin(view.time * 46) * view.shake, Math.cos(view.time * 37) * view.shake * .6);
	ctx.drawImage(staticPlate(view.tiles), 0, 0);
	drawShimmer(ctx, view);
	drawMarks(ctx, view, "ground");
	drawBoats(ctx, view);
	drawDecals(ctx, view.decals);
	drawSmoke(ctx, view);
	drawUnits(ctx, view);
	const vignette = ctx.createRadialGradient(480, 300, 220, 480, 300, 620);
	vignette.addColorStop(0, "rgba(0,0,0,0)");
	vignette.addColorStop(1, "rgba(0,0,0,0.28)");
	ctx.fillStyle = vignette;
	ctx.fillRect(0, 0, 960, 576);
	drawMarks(ctx, view, "rim");
	drawHud(ctx, view);
	drawFx(ctx, view);
	drawLabels(ctx);
	if (view.banner) {
		ctx.fillStyle = "rgba(16,8,12,0.82)";
		ctx.fillRect(310, 8, 340, 28);
		ctx.strokeStyle = "rgba(198,161,90,0.85)";
		ctx.strokeRect(310.5, 8.5, 339, 27);
		ctx.fillStyle = "#e2c27a";
		ctx.font = "600 13px Cinzel, Palatino, serif";
		ctx.textAlign = "center";
		ctx.fillText(view.banner, 480, 27);
		ctx.textAlign = "left";
	}
	ctx.restore();
}
function drawLabels(ctx) {
	ctx.save();
	ctx.font = "600 13px Cinzel, Palatino, serif";
	ctx.textAlign = "left";
	ctx.fillStyle = "rgba(8,4,6,0.7)";
	ctx.fillText("PALÁC", 15, 23);
	ctx.fillStyle = "rgba(234,217,184,0.88)";
	ctx.fillText("PALÁC", 14, 22);
	ctx.textAlign = "right";
	ctx.fillStyle = "rgba(8,4,6,0.7)";
	ctx.fillText("VLTAVA", 947, 23);
	ctx.fillStyle = "rgba(234,217,184,0.88)";
	ctx.fillText("VLTAVA", 946, 22);
	ctx.restore();
}
function staticPlate(tiles) {
	const key = `${tiles.map((row) => row.join("")).join("\n")}|${artReady() ? "art3" : "flat"}`;
	if (plate && plateKey === key) return plate;
	plateKey = key;
	plate = document.createElement("canvas");
	plate.width = 960;
	plate.height = 576;
	const g = plate.getContext("2d");
	if (!g) return plate;
	g.fillStyle = "#10080c";
	g.fillRect(0, 0, 960, 576);
	for (let y = 0; y < tiles.length; y++) {
		const row = tiles[y];
		if (!row) continue;
		for (let x = 0; x < row.length; x++) drawTile(g, tiles, x, y);
	}
	return plate;
}
function neighbor(tiles, x, y) {
	return tiles[y]?.[x] ?? null;
}
function drawTile(g, tiles, x, y) {
	const kind = tiles[y]?.[x] ?? "cobble";
	const px = x * 64;
	const py = y * 64;
	const near = (dx, dy) => neighbor(tiles, x + dx, y + dy);
	if (artReady()) {
		drawPaintedTile(g, kind, px, py, near);
		return;
	}
	if (kind === "wall") {
		drawWall(g, px, py);
		return;
	}
	if (kind === "river" || kind === "boat") {
		const water = g.createLinearGradient(px, py, px, py + 64);
		water.addColorStop(0, "#102838");
		water.addColorStop(1, "#0c3a52");
		g.fillStyle = water;
		g.fillRect(px, py, 64, 64);
		g.fillStyle = "rgba(180,210,220,0.05)";
		g.fillRect(px, py + 8, 64, 2);
	} else if (kind === "palace") drawPalace(g, px, py, x, y, near);
	else if (kind === "quay") drawQuay(g, px, py, near);
	else drawCobble(g, px, py, x, y);
	if (kind === "cart") drawCart(g, px, py);
	if (kind === "boat") drawBoat(g, px, py);
	if (kind === "rubble") drawRubble(g, px, py);
}
function drawPaintedTile(g, kind, px, py, near) {
	const cobble = artImage(GROUND.cobble);
	const wall = artImage(GROUND.wall);
	const palace = artImage(GROUND.palace);
	const water = artImage(GROUND.water);
	const quay = artImage(GROUND.quay);
	const cart = artImage(GROUND.cart);
	const boat = artImage(GROUND.boat);
	if (!cobble || !wall || !palace || !water || !quay || !cart || !boat) return;
	if (kind === "wall") {
		g.drawImage(wall, px, py, 64, 64);
		return;
	}
	if (kind === "river" || kind === "boat") g.drawImage(water, px, py, 64, 64);
	else if (kind === "palace") {
		g.drawImage(palace, px, py, 64, 64);
		if (near(0, -1) !== "palace") {
			g.fillStyle = "#c6a15a";
			g.fillRect(px, py, 64, 3);
			g.fillStyle = "rgba(255,220,170,0.35)";
			g.fillRect(px, py + 3, 64, 1);
		}
		if (near(0, 1) !== "palace") {
			g.fillStyle = "rgba(8,6,8,0.55)";
			g.fillRect(px, py + 64 - 7, 64, 7);
		}
	} else if (kind === "quay") {
		g.drawImage(quay, px, py, 64, 64);
		const riverSide = near(1, 0) === "river" || near(1, 0) === "boat" ? 1 : near(-1, 0) === "river" || near(-1, 0) === "boat" ? -1 : near(0, 1) === "river" ? 2 : 0;
		g.fillStyle = "#5c4024";
		if (riverSide === 1) g.fillRect(px + 64 - 5, py, 5, 64);
		else if (riverSide === -1) g.fillRect(px, py, 5, 64);
		else if (riverSide === 2) g.fillRect(px, py + 64 - 5, 64, 5);
	} else g.drawImage(cobble, px, py, 64, 64);
	if (kind === "rubble") drawRubble(g, px, py);
	if (kind === "cart") {
		const h = 42;
		const w = h * (cart.width / cart.height);
		g.drawImage(cart, px + (64 - w) / 2, py + 64 - h - 4, w, h);
	}
}
function drawRubble(g, px, py) {
	g.fillStyle = "rgba(40,28,22,0.45)";
	g.beginPath();
	g.moveTo(px + 8, py + 46);
	g.lineTo(px + 22, py + 28);
	g.lineTo(px + 34, py + 44);
	g.closePath();
	g.fill();
	g.fillStyle = "rgba(90,70,52,0.7)";
	g.fillRect(px + 36, py + 34, 16, 10);
	g.fillStyle = "rgba(20,12,10,0.55)";
	g.fillRect(px + 14, py + 48, 28, 6);
}
function drawCobble(g, px, py, x, y) {
	g.save();
	g.beginPath();
	g.rect(px, py, 64, 64);
	g.clip();
	g.fillStyle = "#1a1412";
	g.fillRect(px, py, 64, 64);
	for (let r = 0; r < 4; r++) {
		const off = r % 2 * 8;
		for (let c = -1; c < 5; c++) {
			const sx = px + c * 16 + off;
			const sy = py + r * 16;
			const tone = 38 + hash01(x * 3 + c, y * 5 + r, r + c + 2) * 22;
			g.fillStyle = `rgb(${tone + 8},${tone},${tone - 4})`;
			g.fillRect(sx + 1, sy + 1, 14, 13);
			g.fillStyle = "rgba(255,220,180,0.07)";
			g.fillRect(sx + 1, sy + 1, 14, 2);
		}
	}
	g.fillStyle = "rgba(0,0,0,0.28)";
	g.fillRect(px, py + 64 - 3, 64, 3);
	g.restore();
}
function drawWall(g, px, py) {
	g.save();
	g.beginPath();
	g.rect(px, py, 64, 64);
	g.clip();
	g.fillStyle = "#161412";
	g.fillRect(px, py, 64, 64);
	const course = 16;
	const first = Math.floor(py / course) * course;
	for (let wy = first; wy < py + 64; wy += course) {
		const row = Math.floor(wy / course);
		g.fillStyle = row % 2 === 0 ? "#4a4338" : "#3a342c";
		g.fillRect(px - 4, wy + 1, 72, 13);
		g.fillStyle = "rgba(255,220,180,0.06)";
		g.fillRect(px, wy + 1, 64, 2);
		g.fillStyle = "rgba(0,0,0,0.4)";
		g.fillRect(px, wy + course - 3, 64, 2);
		const stagger = row % 2 * 18;
		g.fillStyle = "rgba(0,0,0,0.32)";
		for (let vx = px - 36 + stagger; vx < px + 64; vx += 32) g.fillRect(vx, wy + 1, 2, 12);
	}
	g.fillStyle = "rgba(234,217,184,0.16)";
	g.fillRect(px, py, 64, 2);
	g.restore();
}
function drawPalace(g, px, py, x, y, near) {
	const up = near(0, -1) === "palace";
	const down = near(0, 1) === "palace";
	g.fillStyle = "#241c20";
	g.fillRect(px, py, 64, 64);
	g.fillStyle = "#2e2428";
	g.fillRect(px + 4, py + (up ? 0 : 12), 56, 64 - (up ? 4 : 12) - (down ? 0 : 8));
	if (!up) {
		g.fillStyle = "#3a2c28";
		g.fillRect(px, py, 64, 10);
		g.fillStyle = "#c6a15a";
		g.fillRect(px, py + 9, 64, 2);
	}
	if (!down) {
		g.fillStyle = "#120e10";
		g.fillRect(px, py + 64 - 8, 64, 8);
	}
	const lit = hash01(x, y, 2) > .4;
	for (const ox of [16, 38]) {
		const wy = py + (up ? 18 : 22);
		g.fillStyle = "#140e10";
		g.fillRect(px + ox, wy, 12, 18);
		g.fillStyle = lit ? "#e6b15a" : "#2a1a14";
		g.fillRect(px + ox + 2, wy + 2, 8, 10);
		if (lit) {
			g.fillStyle = "rgba(255,180,80,0.35)";
			g.fillRect(px + ox - 2, wy + 14, 16, 6);
		}
	}
}
function drawQuay(g, px, py, near) {
	g.fillStyle = "#3a4248";
	g.fillRect(px, py, 64, 64);
	g.strokeStyle = "rgba(20,16,14,0.45)";
	g.lineWidth = 1;
	for (let i = 0; i < 4; i++) {
		const yy = py + 8 + i * 14;
		g.beginPath();
		g.moveTo(px, yy);
		g.lineTo(px + 64, yy);
		g.stroke();
	}
	const riverSide = near(1, 0) === "river" || near(1, 0) === "boat" ? 1 : near(-1, 0) === "river" || near(-1, 0) === "boat" ? -1 : near(0, 1) === "river" ? 2 : 0;
	g.fillStyle = "#6a5030";
	if (riverSide === 1) g.fillRect(px + 64 - 6, py, 6, 64);
	else if (riverSide === -1) g.fillRect(px, py, 6, 64);
	else if (riverSide === 2) g.fillRect(px, py + 64 - 6, 64, 6);
}
function drawCart(g, px, py) {
	g.fillStyle = "#5c3a22";
	g.fillRect(px + 12, py + 28, 40, 14);
	g.fillStyle = "#7a5230";
	g.fillRect(px + 14, py + 22, 36, 8);
	g.fillStyle = "#8d6238";
	g.beginPath();
	g.ellipse(px + 32, py + 20, 10, 8, 0, 0, Math.PI * 2);
	g.fill();
	g.strokeStyle = "#c6a15a";
	g.lineWidth = 1;
	g.stroke();
	g.fillStyle = "#1a120e";
	g.beginPath();
	g.arc(px + 20, py + 46, 6, 0, Math.PI * 2);
	g.arc(px + 44, py + 46, 6, 0, Math.PI * 2);
	g.fill();
	g.strokeStyle = "#8a8070";
	g.lineWidth = 1.5;
	g.beginPath();
	g.arc(px + 20, py + 46, 3, 0, Math.PI * 2);
	g.arc(px + 44, py + 46, 3, 0, Math.PI * 2);
	g.stroke();
}
function drawBoat(g, px, py) {
	g.fillStyle = "#4a2e1c";
	g.beginPath();
	g.moveTo(px + 8, py + 36);
	g.quadraticCurveTo(px + 32, py + 56, px + 56, py + 36);
	g.lineTo(px + 50, py + 30);
	g.quadraticCurveTo(px + 32, py + 26, px + 14, py + 30);
	g.closePath();
	g.fill();
	g.strokeStyle = "#e2c27a";
	g.lineWidth = 1.4;
	g.stroke();
	g.fillStyle = "#6a4428";
	g.fillRect(px + 22, py + 32, 20, 4);
	g.fillStyle = "#ead9b8";
	g.fillRect(px + 30, py + 16, 3, 16);
	g.fillStyle = "#ffb45a";
	g.beginPath();
	g.arc(px + 31.5, py + 14, 5, 0, Math.PI * 2);
	g.fill();
	g.fillStyle = "#fff1c8";
	g.beginPath();
	g.arc(px + 31.5, py + 14, 2, 0, Math.PI * 2);
	g.fill();
}
function drawShimmer(ctx, view) {
	const moon = ctx.createRadialGradient(70, 30, 8, 160, 90, 540);
	moon.addColorStop(0, "rgba(186,206,230,0.08)");
	moon.addColorStop(1, "rgba(0,0,0,0)");
	ctx.fillStyle = moon;
	ctx.fillRect(0, 0, 960, 576);
	ctx.strokeStyle = "rgba(190,220,230,0.2)";
	ctx.lineWidth = 1;
	for (let y = 0; y < view.tiles.length; y++) {
		const row = view.tiles[y];
		if (!row) continue;
		for (let x = 0; x < row.length; x++) {
			if (row[x] !== "river") continue;
			const px = x * 64;
			const py = y * 64;
			for (let i = 0; i < 3; i++) {
				const base = py + 16 + i * 16;
				ctx.beginPath();
				ctx.moveTo(px, base + Math.sin(px * .05 + view.time * 1.3 + i) * 2);
				ctx.lineTo(px + 64, base + Math.sin((px + 64) * .05 + view.time * 1.3 + i) * 2);
				ctx.stroke();
			}
		}
	}
	const boat = boatAnchor(view.tiles);
	if (boat && view.phase !== "victory") {
		const glow = (view.phase === "hold" ? .28 : .42) + Math.sin(view.time * 4) * .08;
		const lampAt = boatLamp(boat.x, boat.y, view.phase);
		const lamp = ctx.createRadialGradient(lampAt.x, lampAt.y, 2, lampAt.x, lampAt.y, 36);
		lamp.addColorStop(0, `rgba(255,210,140,${glow})`);
		lamp.addColorStop(.45, "rgba(255,140,40,0.08)");
		lamp.addColorStop(1, "rgba(255,120,30,0)");
		ctx.fillStyle = lamp;
		ctx.fillRect(lampAt.x - 40, lampAt.y - 40, 80, 80);
	}
	drawRain(ctx, view.time);
}
function boatAnchor(tiles) {
	for (let y = 0; y < tiles.length; y++) {
		const row = tiles[y];
		if (!row) continue;
		for (let x = 0; x < row.length; x++) if (row[x] === "boat") return {
			x,
			y
		};
	}
	return null;
}
function castOff(phase) {
	if (phase === "hold") return 34;
	if (phase === "victory") return 96;
	return 0;
}
function boatBox(x, y, phase) {
	const boat = artImage(GROUND.boat);
	const h = 40;
	const w = boat ? h * (boat.width / boat.height) : 96;
	let dx = x * 64 + (64 - w) / 2;
	dx = Math.max(2, Math.min(dx, 960 - w - 2));
	dx += castOff(phase);
	return {
		dx,
		dy: y * 64 + 12,
		w,
		h
	};
}
function boatLamp(x, y, phase) {
	const box = boatBox(x, y, phase);
	return {
		x: box.dx + box.w * .56,
		y: box.dy + box.h * .37
	};
}
function drawBoats(ctx, view) {
	if (view.phase === "victory") return;
	const boat = artImage(GROUND.boat);
	if (!boat) return;
	const spot = boatAnchor(view.tiles);
	if (!spot) return;
	const box = boatBox(spot.x, spot.y, view.phase);
	ctx.save();
	if (view.phase === "hold") ctx.globalAlpha = .92;
	ctx.drawImage(boat, box.dx, box.dy, box.w, box.h);
	ctx.restore();
}
function drawRain(ctx, time) {
	ctx.save();
	ctx.strokeStyle = "rgba(186,206,220,0.16)";
	ctx.lineWidth = 1;
	for (let i = 0; i < 36; i++) {
		const x = (i * 137 + time * 70) % 990 - 10;
		const y = (i * 89 + time * 180) % 600 - 12;
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x - 2.5, y + 9);
		ctx.stroke();
	}
	ctx.restore();
}
function drawMarks(ctx, view, layer) {
	for (const mark of view.marks) {
		const x = mark.x * 64;
		const y = mark.y * 64;
		if (layer === "ground") {
			if (mark.kind === "move") ctx.fillStyle = "rgba(226,194,122,0.42)";
			else if (mark.kind === "far") ctx.fillStyle = "rgba(198,161,90,0.2)";
			else if (mark.kind === "attack") ctx.fillStyle = "rgba(143,36,51,0.4)";
			else if (mark.kind === "soft") ctx.fillStyle = "rgba(143,36,51,0.2)";
			else if (mark.kind === "path") ctx.fillStyle = "rgba(234,217,184,0.32)";
			else if (mark.kind === "zone") ctx.fillStyle = "rgba(226,194,122,0.18)";
			else if (mark.kind === "blast") ctx.fillStyle = "rgba(196,92,42,0.4)";
			else if (mark.kind === "quay") ctx.fillStyle = "rgba(198,161,90,0.18)";
			else ctx.fillStyle = "rgba(234,217,184,0.08)";
			ctx.fillRect(x + 3, y + 3, 58, 58);
			continue;
		}
		const ink = mark.kind === "attack" || mark.kind === "soft" ? "rgba(232,140,140,0.95)" : mark.kind === "blast" ? "rgba(224,140,70,0.95)" : mark.kind === "zone" ? "rgba(226,194,122,0.95)" : "rgba(234,217,184,0.92)";
		if (mark.kind === "move" || mark.kind === "attack" || mark.kind === "zone" || mark.kind === "path" || mark.kind === "blast") {
			ctx.strokeStyle = ink;
			ctx.lineWidth = mark.kind === "path" ? 1.5 : 2.5;
			ctx.strokeRect(x + 5.5, y + 5.5, 53, 53);
		} else if (mark.kind === "hover" || mark.kind === "quay" || mark.kind === "far" || mark.kind === "soft") {
			ctx.strokeStyle = mark.kind === "quay" ? "rgba(226,194,122,0.75)" : "rgba(234,217,184,0.55)";
			ctx.lineWidth = 1.5;
			ctx.strokeRect(x + 5.5, y + 5.5, 53, 53);
		}
	}
}
function drawDecals(ctx, decals) {
	for (const d of decals) {
		ctx.fillStyle = "rgba(90,12,18,0.72)";
		ctx.beginPath();
		ctx.ellipse(d.x * 64 + 34, d.y * 64 + 42, 16, 7, .3, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = "rgba(40,6,8,0.8)";
		ctx.beginPath();
		ctx.ellipse(d.x * 64 + 28, d.y * 64 + 40, 5, 3, .4, 0, Math.PI * 2);
		ctx.fill();
	}
}
function drawSmoke(ctx, view) {
	for (const s of view.smokes) {
		const cx = s.x * 64 + 32;
		const cy = s.y * 64 + 32 - 6;
		for (let i = 0; i < 4; i++) {
			const ox = Math.sin(view.time * .8 + i * 2 + s.x) * 8;
			const oy = Math.cos(view.time * .6 + i) * 4;
			ctx.fillStyle = `rgba(210,210,214,${.1 + i * .045})`;
			ctx.beginPath();
			ctx.arc(cx + ox, cy + oy, 10 + i * 5, 0, Math.PI * 2);
			ctx.fill();
		}
	}
}
function drawUnits(ctx, view) {
	const list = view.units.slice().sort((a, b) => Number(a.alive) - Number(b.alive) || a.py - b.py);
	for (const unit of list) {
		const x = unit.px * 64 + 32 + unit.facing * unit.lunge * 8;
		const y = unit.py * 64 + 32 + 8;
		const pal = LOOK[unit.archetype];
		ctx.save();
		ctx.translate(x, y);
		if (!unit.alive) {
			ctx.rotate(-1.15);
			ctx.globalAlpha = .8;
		}
		ctx.fillStyle = "rgba(0,0,0,0.5)";
		ctx.beginPath();
		ctx.ellipse(0, 18, 14, 4.5, 0, 0, Math.PI * 2);
		ctx.fill();
		if (unit.selected && unit.alive) {
			ctx.strokeStyle = "#e2c27a";
			ctx.lineWidth = 2;
			ctx.setLineDash([5, 4]);
			ctx.lineDashOffset = -view.time * 18;
			ctx.beginPath();
			ctx.ellipse(0, 18, 16, 6, 0, 0, Math.PI * 2);
			ctx.stroke();
			ctx.setLineDash([]);
		}
		if (unit.blessing && unit.alive) {
			ctx.strokeStyle = `rgba(226,194,122,${.45 + Math.sin(view.time * 4) * .25})`;
			ctx.lineWidth = 1.5;
			ctx.beginPath();
			ctx.ellipse(0, 0, 16, 22, 0, 0, Math.PI * 2);
			ctx.stroke();
		}
		if (unit.alive) ctx.translate(0, Math.sin(view.time * 1.7 + unit.bob) * .7);
		ctx.scale(unit.facing * pal.scale, pal.scale);
		const sprite = artImage(SPRITE[unit.archetype]);
		if (sprite) {
			const scale = Math.abs(pal.scale) || 1;
			const originY = y + (unit.alive ? Math.sin(view.time * 1.7 + unit.bob) * .7 : 0);
			let h = SPRITE_H[unit.archetype];
			if (originY + (22 - h) * scale < 2) h = 22 - (2 - originY) / scale;
			drawSprite(ctx, sprite, Math.max(28, h));
		} else drawBody(ctx, unit.archetype, pal);
		if (unit.flash > 0 && unit.alive) {
			ctx.fillStyle = `rgba(255,90,70,${unit.flash * .55})`;
			ctx.beginPath();
			ctx.arc(0, -2, 18, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.restore();
	}
}
function drawHud(ctx, view) {
	for (const unit of view.units) {
		if (!unit.alive) continue;
		const bx = unit.px * 64 + 32;
		const by = unit.py * 64 + 64 - 7;
		ctx.fillStyle = "rgba(0,0,0,0.78)";
		ctx.fillRect(bx - 16, by, 32, 5);
		const ratio = Math.max(0, unit.hp) / unit.maxHp;
		ctx.fillStyle = ratio < .34 ? "#e7b4b0" : unit.faction === "imperial" ? "#e2c27a" : "#c44848";
		ctx.fillRect(bx - 15, by + 1, 30 * ratio, 3);
		if (unit.vip) {
			ctx.fillStyle = "#e2c27a";
			ctx.beginPath();
			ctx.moveTo(bx - 22, by + 2);
			ctx.lineTo(bx - 18, by - 2);
			ctx.lineTo(bx - 14, by + 2);
			ctx.lineTo(bx - 18, by + 6);
			ctx.fill();
		}
		if (unit.overwatch) {
			ctx.strokeStyle = "#e2c27a";
			ctx.lineWidth = 1.5;
			ctx.beginPath();
			ctx.moveTo(bx - 8, by - 2);
			ctx.lineTo(bx, by - 8);
			ctx.lineTo(bx + 8, by - 2);
			ctx.stroke();
		}
	}
}
function drawSprite(ctx, img, h) {
	const w = h * (img.width / img.height);
	ctx.drawImage(img, -w / 2, 22 - h, w, h);
}
function drawBody(ctx, arch, pal) {
	if (arch === "colloredo") {
		ctx.fillStyle = "#5c1824";
		ctx.beginPath();
		ctx.moveTo(-8, -4);
		ctx.lineTo(-16, 18);
		ctx.lineTo(14, 18);
		ctx.lineTo(8, -4);
		ctx.fill();
	}
	ctx.strokeStyle = pal.legs;
	ctx.lineWidth = 4;
	ctx.lineCap = "round";
	ctx.beginPath();
	ctx.moveTo(-5, 8);
	ctx.lineTo(-7, 20);
	ctx.moveTo(4, 8);
	ctx.lineTo(8, 20);
	ctx.stroke();
	ctx.strokeStyle = "#0c0a0a";
	ctx.lineWidth = 5;
	ctx.beginPath();
	ctx.moveTo(-8, 18);
	ctx.lineTo(-10, 23);
	ctx.moveTo(8, 18);
	ctx.lineTo(11, 23);
	ctx.stroke();
	ctx.fillStyle = pal.coat;
	ctx.beginPath();
	ctx.moveTo(-11, -8);
	ctx.lineTo(-13, 14);
	ctx.lineTo(13, 14);
	ctx.lineTo(11, -8);
	ctx.quadraticCurveTo(0, -18, -11, -8);
	ctx.fill();
	ctx.fillStyle = "rgba(255,226,190,0.14)";
	ctx.fillRect(-10, -6, 5, 12);
	if (arch === "colloredo" || arch === "martin") {
		ctx.strokeStyle = pal.trim;
		ctx.lineWidth = 2.6;
		ctx.beginPath();
		ctx.moveTo(-9, -1);
		ctx.lineTo(9, 11);
		ctx.stroke();
	}
	if (arch === "jakub") {
		ctx.fillStyle = "#c4a574";
		ctx.beginPath();
		ctx.moveTo(-7, -2);
		ctx.lineTo(-8, 14);
		ctx.lineTo(8, 14);
		ctx.lineTo(7, -2);
		ctx.fill();
		ctx.fillStyle = "#6a4a28";
		ctx.fillRect(-1.5, 1, 3, 7);
	}
	if (arch === "vaclav") {
		ctx.fillStyle = pal.trim;
		ctx.fillRect(-7, -6, 14, 3);
	}
	if (arch === "musketeer" || arch === "pikeman") {
		ctx.fillStyle = pal.trim;
		ctx.fillRect(-12, 0, 5, 9);
		ctx.fillRect(7, 0, 5, 9);
	}
	ctx.fillStyle = pal.skin;
	ctx.beginPath();
	ctx.arc(0, -16, 6.4, 0, Math.PI * 2);
	ctx.fill();
	ctx.fillStyle = "#1a120e";
	ctx.fillRect(2, -17, 1.6, 1.6);
	ctx.fillStyle = pal.hat;
	if (arch === "colloredo") {
		ctx.beginPath();
		ctx.ellipse(0, -21, 12, 3.4, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillRect(-5, -32, 10, 12);
		ctx.fillStyle = pal.trim;
		ctx.fillRect(-5, -24, 10, 2);
	} else if (arch === "martin" || arch === "musketeer") {
		ctx.beginPath();
		ctx.ellipse(0, -20, 12, 3.2, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillRect(-4, -28, 8, 9);
	} else if (arch === "vaclav") ctx.fillRect(-8, -26, 16, 7);
	else if (arch === "pikeman") {
		ctx.beginPath();
		ctx.arc(0, -18, 7.5, Math.PI, 0);
		ctx.fill();
		ctx.fillRect(-1, -28, 2, 10);
		ctx.fillStyle = pal.metal;
		ctx.fillRect(-6, -20, 12, 2);
	} else {
		ctx.beginPath();
		ctx.arc(0, -20, 7, Math.PI, 0);
		ctx.fill();
	}
	ctx.lineCap = "round";
	if (arch === "colloredo") return;
	if (arch === "martin") {
		ctx.strokeStyle = pal.metal;
		ctx.lineWidth = 2.4;
		ctx.beginPath();
		ctx.moveTo(6, 0);
		ctx.lineTo(18, 4);
		ctx.stroke();
		ctx.strokeStyle = "#d7c08a";
		ctx.lineWidth = 1.4;
		ctx.beginPath();
		ctx.moveTo(4, 8);
		ctx.lineTo(18, 22);
		ctx.stroke();
		return;
	}
	if (arch === "vaclav" || arch === "musketeer") {
		ctx.strokeStyle = "#6b4a2c";
		ctx.lineWidth = 3.2;
		ctx.beginPath();
		ctx.moveTo(2, 2);
		ctx.lineTo(22, 8);
		ctx.stroke();
		ctx.strokeStyle = pal.metal;
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.moveTo(18, 6);
		ctx.lineTo(32, 10);
		ctx.stroke();
		return;
	}
	if (arch === "jakub") {
		ctx.strokeStyle = "#6b4a2c";
		ctx.lineWidth = 2.6;
		ctx.beginPath();
		ctx.moveTo(8, 12);
		ctx.lineTo(14, -22);
		ctx.stroke();
		ctx.fillStyle = pal.metal;
		ctx.beginPath();
		ctx.moveTo(8, -22);
		ctx.lineTo(22, -16);
		ctx.lineTo(14, -10);
		ctx.closePath();
		ctx.fill();
		return;
	}
	ctx.strokeStyle = pal.metal;
	ctx.lineWidth = 2.4;
	ctx.beginPath();
	ctx.moveTo(6, 10);
	ctx.lineTo(8, -30);
	ctx.stroke();
	ctx.lineWidth = 1.2;
	ctx.beginPath();
	ctx.moveTo(4, -30);
	ctx.lineTo(12, -26);
	ctx.stroke();
}
function drawFx(ctx, view) {
	for (const fx of view.fx) {
		const k = Math.min(1, fx.t / fx.life);
		ctx.globalAlpha = 1 - k;
		if (fx.kind === "text") {
			ctx.fillStyle = fx.color;
			ctx.font = "700 16px Literata, Georgia, serif";
			ctx.textAlign = "center";
			ctx.fillText(fx.text, fx.x * 64 + 32, fx.y * 64 + 18 - k * 22);
			ctx.textAlign = "left";
		} else if (fx.kind === "line") {
			ctx.strokeStyle = "rgba(255,244,210,0.95)";
			ctx.lineWidth = 2.4;
			ctx.beginPath();
			ctx.moveTo(fx.x0 * 64 + 32, fx.y0 * 64 + 32);
			ctx.lineTo(fx.x1 * 64 + 32, fx.y1 * 64 + 32);
			ctx.stroke();
			ctx.strokeStyle = fx.color;
			ctx.lineWidth = 1;
			ctx.stroke();
		} else if (fx.kind === "slash") {
			ctx.strokeStyle = "#ead9b8";
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.arc(fx.x * 64 + 32, fx.y * 64 + 32, 10 + k * 16, -.8, .9);
			ctx.stroke();
		} else if (fx.kind === "ring") {
			ctx.strokeStyle = fx.color;
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.arc(fx.x * 64 + 32, fx.y * 64 + 32, 8 + k * 28, 0, Math.PI * 2);
			ctx.stroke();
		} else {
			ctx.fillStyle = fx.color;
			ctx.fillRect(fx.x * 64, fx.y * 64, 3, 3);
		}
		ctx.globalAlpha = 1;
	}
}
function statusOf(unit) {
	if (unit.embarked) return "Na loďce";
	if (!unit.alive) return "Padl";
	const bits = [];
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
function hud(unit) {
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
		loaded: firearm(unit) ? gunLoaded(unit, firearm(unit)) : null,
		blessing: unit.blessing,
		overwatch: unit.overwatch,
		prayerUsed: unit.prayerUsed,
		weapons: unit.weapons.map((w, i) => ({
			id: w.id,
			name: unit.stock[w.id] === void 0 ? w.short : `${w.short} · ${unit.stock[w.id]}`,
			active: unit.weaponIndex === i
		})),
		status: statusOf(unit)
	};
}
function project(sim, ui, epilogue) {
	const selected = sim.units.find((u) => u.id === ui.selectedId) ?? null;
	const weaponButtons = selected && selected.faction === "imperial" && selected.weapons.length > 1 ? selected.weapons.map((w, i) => ({
		id: w.id,
		name: selected.stock[w.id] === void 0 ? w.short : `${w.short} · ${selected.stock[w.id]}`,
		active: selected.weaponIndex === i
	})) : [];
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
		sail: {
			visible: sail.visible,
			enabled: sail.enabled,
			label: sail.label
		},
		endTurn: endTurnInfo(sim, ui.busy),
		weaponButtons,
		epilogue
	};
}
var LINES = {
	martin: {
		sail: "Martin držel vesla, dokud světla Malé Strany nezhasla za zády. Rapír mu zůstal na kolenou.",
		alley: "Padl v uličce u paláce. Dragoun, který měl krýt ústup, koupil maršálovi první krok.",
		bank: "Padl na břehu v posledním vzdoru. Rapír zůstal tam, kde loďka už nesahá.",
		stood: "Tři nárazy přežil a do loďky nevstoupil. Rapír si nechal pro ulice, které ho nepropustí.",
		martyr: "Martin, císařský dragoun"
	},
	vaclav: {
		sail: "Václav odplul s mokrým doutnákem a kapsou střelného prachu. Z Klementina ho už nikdo nezkoušel.",
		alley: "Zůstal ležet mezi dlažbou a rozlitým prachem. Student, který vystřelil dřív, než se naučil nabíjet poslepu.",
		bank: "Padl na břehu s mokrým doutnákem. Poslední výstřel patřil břehu, ne řece.",
		stood: "Tři nárazy přežil s vlhkým prachem v kapse. Loďka odrazila bez něj.",
		martyr: "Václav z Klementina"
	},
	jakub: {
		sail: "Mistr Jakub odrazil od břehu s halapartnou přes kolena. Kovárna na Malé Straně vychladla bez něj.",
		alley: "Padl mezi vozy, jak stál — hradba, která se neotevřela.",
		bank: "Padl na břehu, jak stál. Halapartna držela ulici ještě chvíli potom, co loďka zmizela.",
		stood: "Tři nárazy vydržel a zůstal na kamenech. Kovárna na Malé Straně na něj počká marně.",
		martyr: "Mistr Jakub, kovář"
	}
};
var ACC = {
	Colloredo: "Colloreda",
	Martin: "Martina",
	Václav: "Václava",
	Jakub: "Jakuba",
	Olof: "Olofa",
	Lars: "Larse",
	Erik: "Erika",
	Nils: "Nilse",
	Sven: "Svena",
	Gustaf: "Gustafa",
	Anders: "Anderse",
	Per: "Pera",
	Karl: "Karla",
	Bengt: "Bengta"
};
function accName(name) {
	return ACC[name] ?? name;
}
function heroLine(unit) {
	const pack = LINES[unit.id];
	if (!pack) return unit.name;
	if (unit.fate === "sailed") return pack.sail;
	if (unit.fate === "alley") return pack.alley;
	if (unit.fate === "stood") return pack.stood;
	return pack.bank;
}
function fallenSwedes(n) {
	if (n <= 0) return "Ze Švédů nepadl nikdo.";
	if (n === 1) return "Ze Švédů padl jeden.";
	if (n <= 4) return `Ze Švédů padli ${n}.`;
	return `Ze Švédů padlo ${n}.`;
}
function victoryTale(heroes, round, kills) {
	const survivor = heroes.find((u) => u.fate === "sailed") ?? null;
	const martyrs = heroes.filter((u) => u.id !== survivor?.id);
	const who = survivor ? LINES[survivor.id]?.martyr ?? survivor.name : "Nikdo";
	const dead = martyrs.filter((u) => !u.alive).length;
	const stay = dead === martyrs.length ? "Dva zůstali městu, které je nepojmenuje na pomníku." : dead === 0 ? "Dva zůstali na břehu. Loďka se pro ně nevrátí." : "Jeden zůstal ležet, druhý ve tmě uliček. Loďka se nevrátí.";
	const sailedAs = survivor?.name === "Jakub" ? "mistra Jakuba" : survivor?.name === "Václav" ? "Václava" : "Martina";
	return {
		outcome: "victory",
		kicker: dead === martyrs.length ? "Přežil jen jeden" : "Odplul jen jeden",
		title: survivor ? `${survivor.name} odplouvá` : "Loďka mizí ve tmě",
		survivor: who,
		martyrs: martyrs.map((u) => ({
			name: LINES[u.id]?.martyr ?? u.name,
			line: heroLine(u)
		})),
		paragraphs: [
			survivor ? `Loďka unesla maršála Colloreda a ${sailedAs}. ${stay}` : "Loďka se odtrhla. Jména na ní už tma neudrží.",
			survivor ? heroLine(survivor) : "",
			`Kolo ${round}. ${fallenSwedes(kills)} Vltava si pamatuje jen světlo lucerny, které se zmenšovalo.`
		].filter((p) => p.length > 0)
	};
}
function defeatTale(reason, round, spot) {
	if (reason === "colloredo") return {
		outcome: "defeat",
		kicker: "26. července 1648",
		title: "Maršál padl",
		survivor: null,
		martyrs: [],
		paragraphs: [
			spot === "water" ? "Colloredo klesl na nábřeží. Loďka zůstala prázdná a město ztrácí jméno, které ještě drželo hradby." : "Colloredo klesl na dlažbu. Bez něj nemá loďka komu sloužit a město ztrácí jméno, které ještě drželo hradby.",
			"Königsmarkovi muži projdou dál. Malá Strana tu noc nepočká na ráno.",
			`Konec v kole ${round}.`
		]
	};
	return {
		outcome: "defeat",
		kicker: "26. července 1648",
		title: "Není komu veslovat",
		survivor: null,
		martyrs: [],
		paragraphs: [
			spot === "water" ? "Tři hrdinové umlkli dřív, než loďka odrazila. Colloredo stál u vody sám — a sám na ni nesmí." : "Tři hrdinové umlkli dřív, než došli k vodě. Colloredo zůstal v uličkách sám — a sám na loďku nesmí.",
			"Švédové ho našli dřív, než proud vzal prázdné veslo.",
			`Konec v kole ${round}.`
		]
	};
}
var HOVER0 = "Palác za zády. Vltava vpravo.";
function createBriefingSnapshot() {
	return project(createSim(), {
		selectedId: null,
		mode: "normal",
		hoverText: HOVER0,
		busy: false,
		muted: false
	}, null);
}
function createGame(canvas, onChange) {
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("Canvas není k dispozici.");
	const audio = createMixer();
	const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	let epoch = 1;
	let dead = false;
	let state = createSim();
	let visuals = {};
	let fx = [];
	let shake = 0;
	let time = 0;
	let speed = 1;
	let busy = false;
	let muted = false;
	let audioOn = false;
	let selectedId = null;
	let mode = "normal";
	let hoverText = HOVER0;
	let hover = null;
	let epilogue = null;
	let motion = null;
	let timer = null;
	let waiter = null;
	let last = performance.now();
	let raf = 0;
	function bootVisuals(sim) {
		const next = {};
		for (const u of sim.units) next[u.id] = {
			x: u.x,
			y: u.y,
			lunge: 0,
			flash: 0
		};
		return next;
	}
	visuals = bootVisuals(state);
	function emit() {
		if (dead) return;
		onChange(project(state, {
			selectedId,
			mode,
			hoverText,
			busy,
			muted
		}, epilogue));
	}
	function unlock() {
		audio.unlock();
		audioOn = true;
	}
	function nudge() {
		if (audioOn) audio.unlock();
	}
	function play(name) {
		if (audioOn) audio.play(name);
	}
	function wait(token, sec) {
		return new Promise((resolve) => {
			if (token !== epoch) {
				resolve();
				return;
			}
			timer = {
				left: sec,
				resolve,
				token
			};
		});
	}
	function waitUntil(token, pred) {
		return new Promise((resolve) => {
			if (token !== epoch || pred()) {
				resolve();
				return;
			}
			waiter = {
				pred,
				resolve,
				token
			};
		});
	}
	function update(dt) {
		time += dt;
		if (motion && !motion.done) {
			motion.t += dt * speed;
			const k = Math.min(1, motion.t / motion.dur);
			const e = k * k * (3 - 2 * k);
			const vis = visuals[motion.id];
			if (vis) {
				vis.x = motion.x0 + (motion.x1 - motion.x0) * e;
				vis.y = motion.y0 + (motion.y1 - motion.y0) * e;
			}
			if (motion.t >= motion.dur) motion.done = true;
		}
		for (const item of fx) {
			item.t += dt;
			if (item.kind === "spark") {
				item.x += item.vx * dt;
				item.y += item.vy * dt;
				item.vy += dt * 1.4;
			}
		}
		fx = fx.filter((item) => item.t < item.life);
		if (shake > 0) shake = Math.max(0, shake - dt * 22);
		for (const vis of Object.values(visuals)) {
			vis.lunge = Math.max(0, vis.lunge - dt * 3.2);
			vis.flash = Math.max(0, vis.flash - dt * 2.4);
		}
		if (timer) {
			if (timer.token !== epoch) {
				const resolve = timer.resolve;
				timer = null;
				resolve();
			} else {
				timer.left -= dt * speed;
				if (timer.left <= 0) {
					const resolve = timer.resolve;
					timer = null;
					resolve();
				}
			}
		}
		if (waiter && (waiter.token !== epoch || waiter.pred())) {
			const resolve = waiter.resolve;
			waiter = null;
			resolve();
		}
	}
	function textFx(x, y, text, color) {
		fx.push({
			kind: "text",
			x,
			y,
			text,
			color,
			t: 0,
			life: .95
		});
	}
	function sparks(x, y, color) {
		for (let i = 0; i < 6; i++) fx.push({
			kind: "spark",
			x: x + .5,
			y: y + .5,
			vx: (Math.random() - .5) * 1.4,
			vy: -Math.random() * .8,
			t: 0,
			life: .45,
			color
		});
	}
	function markDeath(unit) {
		if (!unit.alive) return;
		unit.alive = false;
		unit.hp = 0;
		unit.ap = 0;
		unit.overwatch = false;
		if (selectedId === unit.id) selectedId = null;
		state.decals.push({
			x: unit.x,
			y: unit.y
		});
		play("death");
		if (unit.vip) {
			state.pendingEnd = "colloredo";
			return;
		}
		if (unit.faction === "swedish") {
			state.kills += 1;
			return;
		}
		if (unit.fate === "none") {
			const tile = at(state.tiles, unit.x, unit.y);
			unit.fate = state.phase === "hold" || tile === "quay" || tile === "boat" ? "bank" : "alley";
		}
		if (state.pendingEnd === "colloredo") return;
		if (state.phase === "hold") {
			if (!hasDefender(state)) state.pendingEnd = "victory";
		} else if (!hasHope(state)) state.pendingEnd = "nohero";
	}
	function resolvePending() {
		if (state.phase === "victory" || state.phase === "defeat") return;
		if (state.pendingEnd === "colloredo") finishDefeat("colloredo");
		else if (state.pendingEnd === "nohero") finishDefeat("nohero");
		else if (state.pendingEnd === "victory") finishVictory();
	}
	function finishDefeat(reason) {
		if (state.phase === "victory" || state.phase === "defeat") return;
		const col = state.units.find((u) => u.vip);
		const tile = col ? at(state.tiles, col.x, col.y) : null;
		const spot = tile === "boat" || tile === "quay" || col && col.x >= 11 ? "water" : "street";
		state.pendingEnd = null;
		state.phase = "defeat";
		state.turn = "player";
		epilogue = defeatTale(reason, state.round, spot);
		play("death");
		emit();
	}
	function finishVictory() {
		if (state.phase === "victory" || state.phase === "defeat") return;
		const heroes = state.units.filter((u) => u.faction === "imperial" && !u.vip);
		for (const hero of heroes) if (hero.embarked) hero.fate = "sailed";
		else if (hero.fate === "none") hero.fate = hero.alive ? "stood" : "alley";
		state.pendingEnd = null;
		state.phase = "victory";
		state.turn = "player";
		epilogue = victoryTale(heroes, state.round, state.kills);
		play("sail");
		emit();
	}
	function syncDock() {
		const col = state.units.find((u) => u.vip);
		if (!col || !col.alive || col.embarked) return;
		if (state.phase !== "flight" && state.phase !== "dock") return;
		const onBoat = at(state.tiles, col.x, col.y) === "boat";
		if (onBoat && state.phase === "flight") {
			state.phase = "dock";
			pushLog(state, "Colloredo stojí v loďce. Přiveďte jednoho hrdinu na nábřeží.");
			play("sail");
		} else if (!onBoat && state.phase === "dock") {
			state.phase = "flight";
			pushLog(state, "Maršál sestoupil zpět na dlažbu.");
		}
	}
	async function glide(token, unit, tx, ty) {
		const vis = visuals[unit.id];
		if (!vis) return;
		motion = {
			id: unit.id,
			x0: vis.x,
			y0: vis.y,
			x1: tx,
			y1: ty,
			t: 0,
			dur: reduce ? .05 : .12,
			done: false
		};
		await waitUntil(token, () => motion == null || motion.done);
		if (token !== epoch) return;
		const next = visuals[unit.id];
		if (next) {
			next.x = tx;
			next.y = ty;
		}
	}
	async function strikeHradba(token, enemy, prev) {
		const jakub = state.units.find((u) => u.archetype === "jakub" && u.alive && !u.embarked && u.overwatch);
		if (!jakub || !enemy.alive) return false;
		const was = chebyshev(prev.x, prev.y, jakub.x, jakub.y);
		if (chebyshev(enemy.x, enemy.y, jakub.x, jakub.y) > 2 || was <= 2) return false;
		if (!hasLineOfSight(state.tiles, jakub.x, jakub.y, enemy.x, enemy.y)) return false;
		jakub.facing = enemy.x >= jakub.x ? 1 : -1;
		const dmg = WEAPONS.halberd.damage;
		const blow = mitigate(enemy, WEAPONS.halberd, dmg);
		jakub.overwatch = false;
		enemy.ap = 0;
		const vis = visuals[jakub.id];
		if (vis) vis.lunge = 1;
		if (!reduce) shake = 7;
		play("blade");
		textFx(enemy.x, enemy.y, `HRADBA −${blow.dealt}`, "#ead9b8");
		fx.push({
			kind: "slash",
			x: enemy.x,
			y: enemy.y,
			t: 0,
			life: .28
		});
		if (enemy.hp <= 0) {
			markDeath(enemy);
			pushLog(state, `Hradba. ${enemy.name} naběhl na halapartnu a padl.`);
		} else {
			play("hurt");
			const plate = blow.stopped > 0 ? ` Zbroj ubrala ${blow.stopped}.` : "";
			pushLog(state, `Hradba zastavila ${accName(enemy.name)} (−${blow.dealt}).${plate}`);
		}
		await wait(token, .18);
		return true;
	}
	async function performMove(token, unit, destX, destY) {
		const allowBoat = boards(unit, state.phase);
		const path = reconstruct(flood(state.tiles, occupied(state.units, unit.id), unit.x, unit.y, Math.max(3, unit.ap * 3), allowBoat), destX, destY);
		if (path.length === 0) {
			if (token === epoch && unit.faction === "imperial") pushLog(state, "Tam cesta nevede.");
			return;
		}
		const trimmed = path.slice(0, unit.ap * 3);
		const cost = Math.ceil(trimmed.length / 3);
		if (trimmed.length === 0 || cost > unit.ap) return;
		unit.ap -= cost;
		if (unit.faction === "imperial") pushLog(state, `${unit.name} postoupil o ${pole(trimmed.length)}.`);
		if (unit.overwatch) {
			unit.overwatch = false;
			pushLog(state, "Hradba povolila — Jakub se pohnul.");
		}
		let prev = {
			x: unit.x,
			y: unit.y
		};
		for (const step of trimmed) {
			if (step.x > prev.x) unit.facing = 1;
			else if (step.x < prev.x) unit.facing = -1;
			await glide(token, unit, step.x, step.y);
			if (token !== epoch) return;
			unit.x = step.x;
			unit.y = step.y;
			const vis = visuals[unit.id];
			if (vis) {
				vis.x = step.x;
				vis.y = step.y;
			}
			if (unit.faction === "swedish") {
				const stopped = await strikeHradba(token, unit, prev);
				if (token !== epoch || stopped || state.pendingEnd) return;
			}
			prev = {
				x: step.x,
				y: step.y
			};
			if (unit.vip) syncDock();
		}
	}
	async function performAttack(token, attacker, defender, weaponIndex) {
		const weapon = attacker.weapons[weaponIndex];
		if (!weapon || !defender.alive || defender.embarked || attacker.ap < weapon.ap) return;
		if (weapon.delivery !== "shot") return;
		if (weapon.firearm && !attacker.ready.includes(weapon.id)) return;
		const dist = chebyshev(attacker.x, attacker.y, defender.x, defender.y);
		if (dist <= 0 || dist > weapon.range) return;
		if (!hasLineOfSight(state.tiles, attacker.x, attacker.y, defender.x, defender.y)) return;
		const chance = hitChance(attacker, weapon, dist, coverValue(state.tiles, state.smokes, defender.x, defender.y, attacker.x, attacker.y));
		attacker.ap -= weapon.ap;
		if (attacker.overwatch) attacker.overwatch = false;
		attacker.facing = defender.x >= attacker.x ? 1 : -1;
		const result = rollAttack(state, weapon, chance);
		const vis = visuals[attacker.id];
		if (vis) vis.lunge = 1;
		if (weapon.firearm) {
			play(weapon.id === "pistol" ? "pistol" : "shot");
			fx.push({
				kind: "line",
				x0: attacker.x,
				y0: attacker.y,
				x1: defender.x,
				y1: defender.y,
				t: 0,
				life: .16,
				color: "#f3e2b0"
			});
		} else {
			play("blade");
			fx.push({
				kind: "slash",
				x: defender.x,
				y: defender.y,
				t: 0,
				life: .24
			});
		}
		await wait(token, weapon.firearm ? .12 : .1);
		if (token !== epoch) return;
		commitAttack(state, attacker, defender, weapon, result);
		const deadNow = result.hit && defender.hp <= 0;
		if (result.misfire) {
			textFx(attacker.x, attacker.y, "SELHÁNÍ", "#ead9b8");
			pushLog(state, `${attacker.name}: doutnák sykl ve vlhku. ${weapon.name} selhala.`);
		} else if (result.hit) {
			textFx(defender.x, defender.y, `−${result.damage}`, "#e7b4b0");
			sparks(defender.x, defender.y, "#8f2433");
			if (!reduce) shake = deadNow ? 8 : 4;
			play("hurt");
			const plate = result.stopped > 0 ? ` Zbroj ubrala ${result.stopped}.` : "";
			const torn = result.shredded > 0 ? " Zbroj povolila." : "";
			const tail = deadNow ? " Padá." : "";
			pushLog(state, result.damage > 0 ? `${attacker.name} zasáhl ${accName(defender.name)} (${chance} %, −${result.damage}).${plate}${torn}${tail}` : `${attacker.name} zasáhl ${accName(defender.name)}, ale zbroj ránu zastavila.${torn}`);
		} else {
			textFx(defender.x, defender.y, "MIMO", "#ead9b8");
			pushLog(state, `${attacker.name} minul ${accName(defender.name)} (${chance} %).`);
		}
		if (defender.hp <= 0) markDeath(defender);
		const hitVis = visuals[defender.id];
		if (hitVis && result.hit) hitVis.flash = 1;
		await wait(token, .16);
	}
	function blastLine(victims) {
		if (victims.length === 0) return "Nikoho nestrhl.";
		return victims.map((v) => {
			const plate = v.stopped > 0 ? `, zbroj −${v.stopped}` : "";
			const torn = v.shredded > 0 ? ", zbroj povolila" : "";
			return `${v.name} −${v.dealt}${plate}${torn}`;
		}).join("; ");
	}
	async function performThrow(token, attacker, tx, ty, weaponIndex) {
		const weapon = attacker.weapons[weaponIndex];
		if (!weapon || weapon.delivery !== "throw") return;
		if ((attacker.stock[weapon.id] ?? 0) <= 0 || attacker.ap < weapon.ap) return;
		const dist = chebyshev(attacker.x, attacker.y, tx, ty);
		if (dist <= 0 || dist > weapon.range) return;
		if (!hasLineOfSight(state.tiles, attacker.x, attacker.y, tx, ty)) return;
		attacker.ap -= weapon.ap;
		attacker.stock[weapon.id] = (attacker.stock[weapon.id] ?? 1) - 1;
		if (attacker.overwatch) attacker.overwatch = false;
		attacker.facing = tx >= attacker.x ? 1 : -1;
		const chance = hitChance(attacker, weapon, dist, 0);
		let landX = tx;
		let landY = ty;
		let how = "zásah";
		if (weapon.misfire > 0 && state.rng() < weapon.misfire) {
			landX = attacker.x;
			landY = attacker.y;
			how = "selhání";
		} else if (state.rng() * 100 >= chance) {
			const spot = scatterTile(state, tx, ty);
			landX = spot.x;
			landY = spot.y;
			how = "odskok";
		}
		if (attacker.blessing) attacker.blessing = false;
		const vis = visuals[attacker.id];
		if (vis) vis.lunge = 1;
		play("boom");
		if (!reduce) shake = 9;
		fx.push({
			kind: "ring",
			x: landX,
			y: landY,
			t: 0,
			life: .45,
			color: "#e07a3a"
		});
		await wait(token, .12);
		if (token !== epoch) return;
		const hurt = [];
		for (const victim of unitsInBlast(state, landX, landY, weapon.blast)) {
			const blow = mitigate(victim, weapon, weapon.damage);
			hurt.push({
				name: accName(victim.name),
				dealt: blow.dealt,
				stopped: blow.stopped,
				shredded: blow.shredded
			});
			textFx(victim.x, victim.y, blow.dealt > 0 ? `−${blow.dealt}` : "ZBROJ", "#e7b4b0");
			const hitVis = visuals[victim.id];
			if (hitVis) hitVis.flash = 1;
			if (victim.hp <= 0) markDeath(victim);
		}
		placeSmoke(state.smokes, state.clock, landX, landY);
		const where = how === "selhání" ? "doutnák selhal a granát bouchl u nohou" : how === "odskok" ? "granát minul pole a odskočil" : "granát dopadl";
		pushLog(state, `${attacker.name}: ${where} (${chance} %). ${blastLine(hurt)}`);
		await wait(token, .16);
	}
	async function performPetard(token, unit, wx, wy) {
		const weapon = unit.weapons[unit.weaponIndex];
		if (!weapon || weapon.delivery !== "place") return;
		if ((unit.stock[weapon.id] ?? 0) <= 0 || unit.ap < weapon.ap) return;
		if (at(state.tiles, wx, wy) !== "wall") return;
		if (chebyshev(unit.x, unit.y, wx, wy) > weapon.range) return;
		unit.ap -= weapon.ap;
		unit.stock[weapon.id] = (unit.stock[weapon.id] ?? 1) - 1;
		if (unit.overwatch) unit.overwatch = false;
		unit.facing = wx >= unit.x ? 1 : -1;
		if (weapon.misfire > 0 && state.rng() < weapon.misfire) {
			const blow = mitigate(unit, weapon, weapon.damage);
			play("boom");
			if (!reduce) shake = 8;
			textFx(unit.x, unit.y, `−${blow.dealt}`, "#e7b4b0");
			if (unit.hp <= 0) markDeath(unit);
			else {
				const vis = visuals[unit.id];
				if (vis) vis.flash = 1;
			}
			pushLog(state, `Petarda bouchla ${unit.name === "Jakub" ? "Jakubovi" : unit.name} v dlaních (−${blow.dealt}). Zeď stojí.`);
			await wait(token, .2);
			return;
		}
		const row = state.tiles[wy];
		if (row) row[wx] = "rubble";
		play("boom");
		if (!reduce) shake = 10;
		fx.push({
			kind: "ring",
			x: wx,
			y: wy,
			t: 0,
			life: .5,
			color: "#c6a15a"
		});
		await wait(token, .1);
		if (token !== epoch) return;
		const hurt = [];
		for (const victim of unitsInBlast(state, wx, wy, weapon.blast)) {
			const blow = mitigate(victim, weapon, weapon.damage);
			hurt.push({
				name: accName(victim.name),
				dealt: blow.dealt,
				stopped: blow.stopped,
				shredded: blow.shredded
			});
			textFx(victim.x, victim.y, blow.dealt > 0 ? `−${blow.dealt}` : "ZBROJ", "#e7b4b0");
			const hitVis = visuals[victim.id];
			if (hitVis) hitVis.flash = 1;
			if (victim.hp <= 0) markDeath(victim);
		}
		placeSmoke(state.smokes, state.clock, wx, wy);
		pushLog(state, `Petarda rozrazila zeď. Suť teď kryje napůl. ${blastLine(hurt)}`);
		await wait(token, .16);
	}
	function playing() {
		return !busy && state.turn === "player" && (state.phase === "flight" || state.phase === "dock" || state.phase === "hold") && state.pendingEnd == null;
	}
	async function doMove(unit, x, y) {
		const token = epoch;
		busy = true;
		emit();
		await performMove(token, unit, x, y);
		if (token !== epoch) return;
		busy = false;
		resolvePending();
		emit();
	}
	async function attackTarget(target) {
		const sel = unitById(state, selectedId);
		if (!sel || sel.faction !== "imperial" || !sel.alive || sel.embarked) {
			pushLog(state, "Nejprve vyberte císařského.");
			emit();
			return;
		}
		const armed = sel.weapons[sel.weaponIndex];
		if (armed?.delivery === "place") {
			pushLog(state, "Petarda patří na zeď.");
			emit();
			return;
		}
		if (armed?.delivery === "throw") {
			pushLog(state, "Granát se hází na pole v dostřelu, ne na muže mimo něj.");
			emit();
			return;
		}
		if (!playing()) return;
		const info = evaluateShot(sel, sel.x, sel.y, target, state.tiles, state.smokes);
		if (info.reason !== "ok") {
			pushLog(state, reasonLine(info, sel));
			emit();
			return;
		}
		const token = epoch;
		busy = true;
		emit();
		await performAttack(token, sel, target, info.weaponIndex);
		if (token !== epoch) return;
		busy = false;
		resolvePending();
		emit();
	}
	function onTile(x, y) {
		unlock();
		if (state.turn === "enemy") {
			speed = 4;
			return;
		}
		if (!playing()) return;
		const stood = living(state.units).find((u) => u.x === x && u.y === y) ?? null;
		if (mode === "rozkaz") {
			const col = unitById(state, selectedId);
			if (stood && col?.vip && stood.faction === "imperial" && stood.id !== col.id && !stood.embarked) {
				giveOrder(stood);
				emit();
				return;
			}
			mode = "normal";
			emit();
		}
		if (stood?.faction === "imperial") {
			selectedId = stood.id;
			hoverText = describe(x, y);
			play("ui");
			emit();
			return;
		}
		if (stood?.faction === "swedish") {
			const sel = unitById(state, selectedId);
			const armed = sel?.weapons[sel.weaponIndex];
			if (sel && armed?.delivery === "throw" && (sel.stock[armed.id] ?? 0) > 0 && chebyshev(sel.x, sel.y, x, y) >= 1 && chebyshev(sel.x, sel.y, x, y) <= armed.range && hasLineOfSight(state.tiles, sel.x, sel.y, x, y)) {
				if (sel.ap < armed.ap) {
					pushLog(state, "Granát stojí celý tah.");
					emit();
					return;
				}
				doThrow(sel, x, y, sel.weaponIndex);
				return;
			}
			attackTarget(stood);
			return;
		}
		const sel = unitById(state, selectedId);
		if (!sel || sel.faction !== "imperial" || !sel.alive || sel.embarked) return;
		const armed = sel.weapons[sel.weaponIndex];
		if (armed?.delivery === "place" && at(state.tiles, x, y) === "wall") {
			if ((sel.stock[armed.id] ?? 0) <= 0) pushLog(state, "Petarda už je pryč.");
			else if (chebyshev(sel.x, sel.y, x, y) > armed.range || sel.ap < armed.ap) pushLog(state, "Petarda patří na sousední zeď a stojí celý tah.");
			else doPetard(sel, x, y);
			emit();
			return;
		}
		if (armed?.delivery === "throw" && (sel.stock[armed.id] ?? 0) > 0 && chebyshev(sel.x, sel.y, x, y) >= 1 && chebyshev(sel.x, sel.y, x, y) <= armed.range && hasLineOfSight(state.tiles, sel.x, sel.y, x, y)) {
			if (sel.ap < armed.ap) {
				pushLog(state, "Granát stojí celý tah.");
				emit();
				return;
			}
			doThrow(sel, x, y, sel.weaponIndex);
			return;
		}
		const node = flood(state.tiles, occupied(state.units, sel.id), sel.x, sel.y, sel.ap * 3, boards(sel, state.phase)).get(`${x},${y}`);
		if (!node || node.steps <= 0) {
			if (at(state.tiles, x, y) === "boat" && !boards(sel, state.phase)) {
				pushLog(state, state.phase === "hold" ? "Loďka už odrazila." : "Na loďku smí jen Colloredo.");
				emit();
			}
			return;
		}
		doMove(sel, x, y);
	}
	function giveOrder(ally) {
		const col = unitById(state, selectedId);
		if (!col?.vip || col.ap < 1 || ally.id === col.id || !ally.alive || ally.embarked || ally.faction !== "imperial") {
			mode = "normal";
			return;
		}
		col.ap -= 1;
		ally.ap += 1;
		mode = "normal";
		play("ui");
		textFx(ally.x, ally.y, "+1 AP", "#e2c27a");
		pushLog(state, `Colloredo: „Držte linii.“ ${ally.name} získává 1 akční bod.`);
	}
	async function doThrow(unit, x, y, weaponIndex) {
		const token = epoch;
		busy = true;
		emit();
		await performThrow(token, unit, x, y, weaponIndex);
		if (token !== epoch) return;
		busy = false;
		resolvePending();
		emit();
	}
	async function doPetard(unit, x, y) {
		const token = epoch;
		busy = true;
		emit();
		await performPetard(token, unit, x, y);
		if (token !== epoch) return;
		busy = false;
		resolvePending();
		emit();
	}
	function findSpawn() {
		const blocked = occupied(state.units);
		for (const [x, y] of SPAWNS) if (walkable(state.tiles, x, y, false) && !blocked.has(`${x},${y}`)) return {
			x,
			y
		};
		for (let x = 0; x < 4; x++) for (let y = 0; y < 9; y++) if (walkable(state.tiles, x, y, false) && !blocked.has(`${x},${y}`)) return {
			x,
			y
		};
		return null;
	}
	function spawn(kind) {
		const spot = findSpawn();
		if (!spot) {
			pushLog(state, "Posila se v uličce zasekla.");
			return;
		}
		const name = state.nameBag.shift() ?? `Švéd ${state.seq}`;
		const id = `reinf-${state.seq++}`;
		const unit = makeSwede(kind, id, name, spot.x, spot.y);
		state.units.push(unit);
		visuals[id] = {
			x: spot.x,
			y: spot.y,
			lunge: 0,
			flash: 0
		};
		pushLog(state, kind === "grenadier" ? `Od paláce se řítí ${name} s granátem.` : `Od paláce se řítí ${name}.`);
	}
	async function runEnemies(token) {
		state.turn = "enemy";
		const agedIn = ageClock(state.clock, state.smokes);
		state.clock = agedIn.clock;
		state.smokes = agedIn.smokes;
		for (const unit of state.units) if (unit.faction === "swedish" && unit.alive) unit.ap = unit.maxAp;
		pushLog(state, "Švédové postupují ulicemi.");
		emit();
		const ids = state.units.filter((u) => u.faction === "swedish" && u.alive).map((u) => u.id);
		for (const id of ids) {
			if (token !== epoch || state.pendingEnd) return;
			const unit = unitById(state, id);
			if (!unit?.alive) continue;
			for (let n = 0; n < 4; n++) {
				if (token !== epoch || state.pendingEnd || !unit.alive || unit.ap <= 0) break;
				const action = nextAction(state, unit);
				if (!action) break;
				if (action.type === "move") await performMove(token, unit, action.x, action.y);
				else if (action.type === "throw") await performThrow(token, unit, action.x, action.y, action.weaponIndex);
				else if (action.type === "reload") {
					const gun = firearm(unit);
					if (!gun || unit.ap < gun.reloadAp) break;
					unit.ap -= gun.reloadAp;
					markLoaded(unit, gun.id);
					play("reload");
					pushLog(state, `${unit.name} nabíjí.`);
					await wait(token, .16);
				} else {
					const target = unitById(state, action.targetId);
					if (!target?.alive) break;
					await performAttack(token, unit, target, action.weaponIndex);
				}
				if (token !== epoch) return;
				emit();
			}
		}
		if (token !== epoch) return;
		if (state.pendingEnd === "colloredo") return finishDefeat("colloredo");
		if (state.pendingEnd === "nohero") return finishDefeat("nohero");
		if (state.pendingEnd === "victory") return finishVictory();
		if (state.phase === "hold") {
			state.holdLeft -= 1;
			if (state.holdLeft <= 0) return finishVictory();
			if (state.holdLeft === 2) spawn("pikeman");
			if (state.holdLeft === 1) spawn("grenadier");
			if (!hasDefender(state)) return finishVictory();
			const word = state.holdLeft === 1 ? "náraz" : "nárazy";
			pushLog(state, `Proud cloumá loďkou. Zbývá ${state.holdLeft} ${word}.`);
		}
		state.turn = "player";
		const agedOut = ageClock(state.clock, state.smokes);
		state.clock = agedOut.clock;
		state.smokes = agedOut.smokes;
		state.round += 1;
		speed = 1;
		for (const unit of state.units) {
			if (unit.faction !== "imperial") continue;
			unit.overwatch = false;
			if (unit.alive && !unit.embarked) unit.ap = unit.maxAp;
		}
	}
	function pole(n) {
		if (n === 1) return "1 pole";
		if (n >= 2 && n <= 4) return `${n} pole`;
		return `${n} polí`;
	}
	function describe(x, y) {
		const tile = at(state.tiles, x, y);
		const bits = [];
		const stood = state.units.find((u) => u.x === x && u.y === y && !u.embarked);
		const body = stood?.alive ? stood : null;
		if (body) {
			bits.push(`${body.name} · ${body.hp}/${body.maxHp}`);
			const plate = armorLabel(body);
			if (plate) bits.push(plate);
		} else if (stood && !stood.alive) bits.push(`${stood.name} · padl`);
		const label = TILE_LABEL[tile ?? ""] ?? "Pole";
		const smoked = state.smokes.some((s) => s.x === x && s.y === y);
		bits.push(smoked ? `${label} · kouř (−25 %)` : label);
		const sel = unitById(state, selectedId);
		const armed = sel?.weapons[sel.weaponIndex];
		if (sel && armed?.delivery === "throw" && sel.faction === "imperial" && sel.alive) {
			const dist = chebyshev(sel.x, sel.y, x, y);
			if ((sel.stock[armed.id] ?? 0) <= 0) bits.push("Granát už není");
			else if (dist >= 1 && dist <= armed.range && hasLineOfSight(state.tiles, sel.x, sel.y, x, y)) {
				const chance = hitChance(sel, armed, dist, 0);
				const names = unitsInBlast(state, x, y, armed.blast).map((u) => u.name);
				bits.push(`Hod ${chance} % · celý tah · ${names.length ? names.join(", ") : "prázdné pole"}`);
				return bits.join(" · ");
			}
		}
		if (sel && armed?.delivery === "place" && tile === "wall") {
			const left = sel.stock[armed.id] ?? 0;
			bits.push(left <= 0 ? "Petarda už není" : chebyshev(sel.x, sel.y, x, y) <= armed.range ? "Petarda · zeď spadne · nosič ve výbuchu" : "Petarda jen na sousední zeď");
			return bits.join(" · ");
		}
		if (sel && body?.alive && body.faction === "swedish" && sel.faction === "imperial") {
			const info = evaluateShot(sel, sel.x, sel.y, body, state.tiles, state.smokes);
			const weapon = sel.weapons[info.weaponIndex];
			if (info.reason === "ok" && weapon) bits.push(`${weapon.short} · zásah ${info.chance} % · kryt ${info.cover} %`);
			else bits.push(reasonLine(info, sel));
		} else if (sel && sel.faction === "imperial" && sel.alive && !body) {
			const node = flood(state.tiles, occupied(state.units, sel.id), sel.x, sel.y, sel.ap * 3, boards(sel, state.phase)).get(`${x},${y}`);
			if (node && node.steps > 0) bits.push(`Přesun ${pole(node.steps)} · ${Math.ceil(node.steps / 3)} AP`);
			else if (tile === "boat" && !boards(sel, state.phase)) bits.push(state.phase === "hold" ? "Loďka už odrazila" : "Na loďku smí jen Colloredo");
		}
		return bits.join(" · ");
	}
	function banner() {
		if (state.turn === "enemy") return "TAH ŠVÉDŮ";
		if (state.phase === "dock") return "LOĎKA ČEKÁ";
		if (state.phase === "hold") return `BŘEH · ${state.holdLeft}`;
		return "";
	}
	function buildView() {
		const marks = [];
		const sel = unitById(state, selectedId);
		if (!!sel && sel.alive && !sel.embarked && state.turn === "player" && !busy && sel) {
			const nodes = flood(state.tiles, occupied(state.units, sel.id), sel.x, sel.y, sel.ap * 3, boards(sel, state.phase));
			for (const node of nodes.values()) {
				if (node.steps <= 0) continue;
				const kind = node.steps <= 3 ? "move" : "far";
				marks.push({
					x: node.x,
					y: node.y,
					kind
				});
			}
			if (hover) {
				const path = reconstruct(nodes, hover.x, hover.y);
				for (const step of path) marks.push({
					x: step.x,
					y: step.y,
					kind: "path"
				});
			}
			for (const foe of living(state.units)) {
				if (foe.faction !== "swedish") continue;
				const info = evaluateShot(sel, sel.x, sel.y, foe, state.tiles, state.smokes);
				if (info.reason === "ok" && sel.weapons[info.weaponIndex]?.delivery === "shot") marks.push({
					x: foe.x,
					y: foe.y,
					kind: "attack"
				});
				else if (info.reason === "load" || info.reason === "ap") marks.push({
					x: foe.x,
					y: foe.y,
					kind: "soft"
				});
			}
			const armed = sel.weapons[sel.weaponIndex];
			if (armed?.delivery === "throw" && (sel.stock[armed.id] ?? 0) > 0 && sel.ap >= armed.ap) for (let y = 0; y < 9; y++) for (let x = 0; x < 15; x++) {
				const dist = chebyshev(sel.x, sel.y, x, y);
				if (dist < 1 || dist > armed.range) continue;
				if (!hasLineOfSight(state.tiles, sel.x, sel.y, x, y)) continue;
				marks.push({
					x,
					y,
					kind: "blast"
				});
			}
			if (armed?.delivery === "place" && (sel.stock[armed.id] ?? 0) > 0 && sel.ap >= armed.ap) for (const [dx, dy] of [
				[1, 0],
				[-1, 0],
				[0, 1],
				[0, -1],
				[1, 1],
				[1, -1],
				[-1, 1],
				[-1, -1]
			]) {
				const x = sel.x + dx;
				const y = sel.y + dy;
				if (at(state.tiles, x, y) === "wall") marks.push({
					x,
					y,
					kind: "blast"
				});
			}
		}
		if (state.phase === "dock" || state.phase === "hold") for (let y = 0; y < 9; y++) for (let x = 0; x < 15; x++) {
			const tile = at(state.tiles, x, y);
			if (tile === "quay" || tile === "boat" && state.phase === "dock") marks.push({
				x,
				y,
				kind: "quay"
			});
		}
		const jakub = state.units.find((u) => u.archetype === "jakub" && u.overwatch && u.alive && !u.embarked);
		if (jakub) for (let y = jakub.y - 2; y <= jakub.y + 2; y++) for (let x = jakub.x - 2; x <= jakub.x + 2; x++) {
			if (!walkable(state.tiles, x, y, true) && at(state.tiles, x, y) !== "boat") continue;
			if (chebyshev(x, y, jakub.x, jakub.y) <= 2 && hasLineOfSight(state.tiles, jakub.x, jakub.y, x, y)) marks.push({
				x,
				y,
				kind: "zone"
			});
		}
		if (hover) marks.push({
			x: hover.x,
			y: hover.y,
			kind: "hover"
		});
		const units = [];
		for (const unit of state.units) {
			if (unit.embarked) continue;
			const vis = visuals[unit.id] ?? {
				x: unit.x,
				y: unit.y,
				lunge: 0,
				flash: 0
			};
			units.push({
				id: unit.id,
				archetype: unit.archetype,
				faction: unit.faction,
				px: vis.x,
				py: vis.y,
				facing: unit.facing,
				alive: unit.alive,
				hp: unit.hp,
				maxHp: unit.maxHp,
				ap: unit.ap,
				selected: unit.id === selectedId,
				overwatch: unit.overwatch,
				blessing: unit.blessing,
				vip: unit.vip,
				lunge: vis.lunge,
				flash: vis.flash,
				bob: unit.bob
			});
		}
		return {
			tiles: state.tiles,
			smokes: state.smokes,
			decals: state.decals,
			units,
			marks,
			fx,
			time,
			shake: reduce ? 0 : shake,
			banner: banner(),
			phase: state.phase
		};
	}
	function frame(now) {
		const dt = Math.min(.05, (now - last) / 1e3);
		last = now;
		update(dt);
		paint(ctx, buildView());
		if (!dead) raf = requestAnimationFrame(frame);
	}
	function fit() {
		const dpr = Math.min(2, window.devicePixelRatio || 1);
		canvas.width = Math.floor(960 * dpr);
		canvas.height = Math.floor(576 * dpr);
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
	}
	function tileFrom(event) {
		const rect = canvas.getBoundingClientRect();
		if (rect.width <= 0 || rect.height <= 0) return null;
		const x = Math.floor((event.clientX - rect.left) / rect.width * 15);
		const y = Math.floor((event.clientY - rect.top) / rect.height * 9);
		if (x < 0 || y < 0 || x >= 15 || y >= 9) return null;
		return {
			x,
			y
		};
	}
	const onPointerDown = (event) => {
		unlock();
		if (state.turn === "enemy") speed = 4;
		event.preventDefault();
	};
	const onPointerUp = (event) => {
		const tile = tileFrom(event);
		if (!tile) return;
		onTile(tile.x, tile.y);
	};
	const onPointerMove = (event) => {
		const tile = tileFrom(event);
		hover = tile;
		if (!tile) return;
		const text = describe(tile.x, tile.y);
		if (text !== hoverText) {
			hoverText = text;
			emit();
		}
	};
	const onPointerLeave = () => {
		hover = null;
	};
	const onContext = (event) => {
		event.preventDefault();
		if (mode === "rozkaz") {
			mode = "normal";
			emit();
		}
	};
	const onVis = () => {
		if (document.visibilityState === "visible") nudge();
	};
	canvas.addEventListener("pointerdown", onPointerDown);
	canvas.addEventListener("pointerup", onPointerUp);
	canvas.addEventListener("pointermove", onPointerMove);
	canvas.addEventListener("pointerleave", onPointerLeave);
	canvas.addEventListener("contextmenu", onContext);
	document.addEventListener("visibilitychange", onVis);
	const observer = new ResizeObserver(() => fit());
	observer.observe(canvas);
	fit();
	document.fonts?.load("600 16px Cinzel");
	document.fonts?.load("500 16px Literata");
	emit();
	raf = requestAnimationFrame(frame);
	const api = {
		destroy() {
			dead = true;
			epoch += 1;
			cancelAnimationFrame(raf);
			observer.disconnect();
			canvas.removeEventListener("pointerdown", onPointerDown);
			canvas.removeEventListener("pointerup", onPointerUp);
			canvas.removeEventListener("pointermove", onPointerMove);
			canvas.removeEventListener("pointerleave", onPointerLeave);
			canvas.removeEventListener("contextmenu", onContext);
			document.removeEventListener("visibilitychange", onVis);
			audio.close();
			timer?.resolve();
			waiter?.resolve();
			timer = null;
			waiter = null;
		},
		begin() {
			unlock();
			if (state.phase !== "briefing") return;
			state.phase = "flight";
			pushLog(state, "Königsmarkovi muži drží ulice mezi palácem a Vltavou.");
			pushLog(state, "Doveďte Colloreda na loďku. Uveze jen jeho a jednoho hrdinu.");
			pushLog(state, "Zeď z úhlu kryje naplno. Vůz, suť a kouř kryjí napůl. Kabátec ubere málo, půlzbroj víc — dokud ji granát nestrhne.");
			pushLog(state, "Martin má jeden granát, Jakub jednu petardu. Granát stojí celý tah. Petarda boří zeď a chytí i nosiče.");
			play("ui");
			emit();
		},
		unlock,
		endTurn() {
			if (!playing()) return;
			const token = epoch;
			busy = true;
			mode = "normal";
			emit();
			runEnemies(token).then(() => {
				if (token !== epoch || dead) return;
				busy = false;
				resolvePending();
				emit();
			});
		},
		reload() {
			const unit = unitById(state, selectedId);
			const gun = firearm(unit);
			if (!unit || !gun || !playing() || gunLoaded(unit, gun) || unit.ap < gun.reloadAp) return;
			unit.ap -= gun.reloadAp;
			markLoaded(unit, gun.id);
			play("reload");
			pushLog(state, `${unit.name} nabíjí. ${gun.short} je připravená.`);
			emit();
		},
		prayer() {
			const unit = unitById(state, selectedId);
			if (!unit?.prayer || !playing() || unit.prayerUsed || !unit.alive || unit.embarked) return;
			const healed = healAmount(unit);
			unit.hp += healed;
			unit.prayerUsed = true;
			unit.blessing = true;
			play("prayer");
			fx.push({
				kind: "ring",
				x: unit.x,
				y: unit.y,
				t: 0,
				life: .7,
				color: "#e2c27a"
			});
			const breath = healed > 0 ? `léčí ${healed === 1 ? "1 život" : `${healed} životy`}` : "se chytá dechu";
			pushLog(state, `„Ježíši, Maria, pomoz!“ ${unit.name} ${breath}. Příští úder povede jistěji.`);
			emit();
		},
		hradba() {
			const unit = unitById(state, selectedId);
			if (!unit || unit.archetype !== "jakub" || !playing() || unit.overwatch || unit.ap < 1) return;
			unit.ap -= 1;
			unit.overwatch = true;
			play("blade");
			pushLog(state, "Jakub zabodává halapartnu. První Švéd na dvě pole skončí na hrotu.");
			emit();
		},
		startRozkaz() {
			const unit = unitById(state, selectedId);
			if (!unit?.vip || !playing() || unit.ap < 1) return;
			mode = mode === "rozkaz" ? "normal" : "rozkaz";
			play("ui");
			emit();
		},
		sail() {
			const info = sailInfo(state, selectedId, busy);
			if (!info.enabled || !info.hero) return;
			const col = state.units.find((u) => u.vip);
			if (!col) return;
			info.hero.embarked = true;
			info.hero.fate = "sailed";
			col.embarked = true;
			if (selectedId === info.hero.id || selectedId === col.id) selectedId = null;
			state.phase = "hold";
			state.holdLeft = 3;
			const left = state.units.filter((u) => u.faction === "imperial" && !u.vip && u.alive && !u.embarked);
			const tail = left.length >= 2 ? "Dva zůstávají na kamenech." : left.length === 1 ? `${left[0].name} zůstává na kamenech.` : "Na břehu už nikdo nestojí.";
			pushLog(state, `${info.hero.name} skáče do loďky k maršálovi. ${tail}`);
			pushLog(state, "Ještě tři švédské nárazy, než proud odtrhne lano.");
			spawn("musketeer");
			play("sail");
			if (!hasDefender(state)) finishVictory();
			else emit();
		},
		setWeapon(id) {
			const unit = unitById(state, selectedId);
			if (!unit || !playing()) return;
			const index = unit.weapons.findIndex((w) => w.id === id);
			if (index < 0) return;
			unit.weaponIndex = index;
			syncLoaded(unit);
			play("ui");
			emit();
		},
		activate(id) {
			unlock();
			const unit = unitById(state, id);
			if (!unit) return;
			if (mode === "rozkaz") {
				if (unit.faction === "imperial") giveOrder(unit);
				emit();
				return;
			}
			if (unit.faction === "imperial" && unit.alive && !unit.embarked) {
				selectedId = unit.id;
				play("ui");
				emit();
				return;
			}
			if (unit.faction === "swedish" && unit.alive) attackTarget(unit);
		},
		restart() {
			epoch += 1;
			const pendingTimer = timer;
			const pendingWait = waiter;
			timer = null;
			waiter = null;
			motion = null;
			state = createSim();
			visuals = bootVisuals(state);
			fx = [];
			shake = 0;
			speed = 1;
			busy = false;
			selectedId = null;
			mode = "normal";
			hoverText = HOVER0;
			epilogue = null;
			play("ui");
			emit();
			pendingTimer?.resolve();
			pendingWait?.resolve();
		},
		toggleMute() {
			muted = !muted;
			audio.setMuted(muted);
			emit();
		}
	};
	const probe = window;
	probe.__praha = {
		click: (x, y) => onTile(x, y),
		phase: () => state.phase,
		turn: () => state.turn,
		busy: () => busy,
		log: () => state.log.slice(-8),
		units: () => state.units.map((u) => ({
			id: u.id,
			hp: u.hp,
			ap: u.ap,
			x: u.x,
			y: u.y,
			alive: u.alive,
			embarked: u.embarked,
			loaded: u.loaded,
			overwatch: u.overwatch
		}))
	};
	return api;
}
function Home() {
	const canvasRef = (0, import_react.useRef)(null);
	const gameRef = (0, import_react.useRef)(null);
	const [snap, setSnap] = (0, import_react.useState)(() => createBriefingSnapshot());
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "topbar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Praha · 26. července"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Malá Strana 1648" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "top-meta",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pill",
							children: snap.phaseLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "pill",
							children: ["Kolo ", snap.round]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pill",
							children: snap.turn === "player" ? "Císařští" : "Švédové"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "pill",
							children: ["Nepřátel ", snap.enemiesAlive]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "icon-btn",
							"aria-label": snap.muted ? "Zapnout zvuk" : "Ztlumit",
							onClick: () => api()?.toggleMute(),
							children: snap.muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "icon-btn",
							"aria-label": "Nová mise",
							onClick: () => api()?.restart(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stage",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "canvas-frame",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
							ref: canvasRef,
							width: 960,
							height: 576,
							"aria-label": "Mapa Malé Strany, patnáct na devět polí"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "status-line",
						"aria-live": "polite",
						children: snap.hoverText
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "panel",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "objective",
							children: snap.objective
						}),
						playable ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "actions",
							children: [
								snap.weaponButtons.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "weapon-row",
									children: snap.weaponButtons.map((weapon) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "btn",
										"data-on": weapon.active,
										disabled: snap.busy || snap.turn !== "player",
										onClick: () => api()?.setWeapon(weapon.id),
										children: weapon.name
									}, weapon.id))
								}) : null,
								snap.reload.visible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "btn",
									disabled: !snap.reload.enabled,
									onClick: () => api()?.reload(),
									children: snap.reload.label
								}) : null,
								snap.prayer.visible ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "btn",
									disabled: !snap.prayer.enabled,
									onClick: () => api()?.prayer(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" }), snap.prayer.label]
								}) : null,
								snap.rozkaz.visible ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "btn",
									"data-on": snap.mode === "rozkaz",
									disabled: !snap.rozkaz.enabled,
									onClick: () => api()?.startRozkaz(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { className: "size-4" }), snap.rozkaz.label]
								}) : null,
								snap.hradba.visible ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "btn",
									disabled: !snap.hradba.enabled,
									onClick: () => api()?.hradba(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-4" }), snap.hradba.label]
								}) : null,
								snap.sail.visible ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "btn btn-blood",
									disabled: !snap.sail.enabled,
									onClick: () => api()?.sail(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "size-4" }), snap.sail.label]
								}) : null,
								snap.endTurn.visible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "btn btn-gold",
									disabled: !snap.endTurn.enabled,
									onClick: () => api()?.endTurn(),
									children: snap.endTurn.label
								}) : null
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "objective",
							children: "Vyberte muže na mapě nebo v seznamu. Zlatá pole jsou pohyb, rudí Švédové útok."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "roster",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Císařští" }),
								imperials.map((unit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitCard, {
									unit,
									selected: snap.selectedId === unit.id,
									onPick: () => api()?.activate(unit.id)
								}, unit.id)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Švédové" }),
								swedes.map((unit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitCard, {
									unit,
									selected: false,
									onPick: () => api()?.activate(unit.id)
								}, unit.id))
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "help",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: "Jak se velí" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Klepněte na svého muže, pak na zlaté pole. Jedna až tři pole stojí 1 akční bod." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Klepněte na Švéda v dostřelu. Šanci zásahu uvidíte před ranou." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Po výstřelu z palné zbraně nabijte. Kouř na vašem poli kryje jako vůz." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Vůz, suť a kouř kryjí −25 %. Zeď z úhlu −50 %. Zeď v přímce střelu zastaví. Sečná zbraň bere z krytu jen polovinu. Granát kryt obchází." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Kabátec ubere 1 život zbraním s malým průrazem, půlzbroj 2. Mušketa plát prorazí. Granát zbroj strhne." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Granát: vyberte ho a klepněte na pole. Výbuch vezme i sousedy, i vaše. Stojí celý tah. Ve vlhku doutnák někdy bouchne u nohou." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Petarda: vyberte ji a klepněte na sousední zeď. Zeď spadne v suť. Nosič stojí ve výbuchu." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Rozkaz maršála přidá spojenci bod. Jeho smrt končí noc." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Jednou za noc: modlitba vrátí 3 životy a přidá čtvrtinu k příštímu úderu." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Jakubova Hradba bodne a zastaví prvního Švéda, který vstoupí na dvě pole." })
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "log",
							"aria-live": "polite",
							children: snap.log.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Rozkaz ještě nepadl." }) : snap.log.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, `${i}-${line}`))
						})
					]
				})]
			}),
			snap.phase === "briefing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overlay",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "sheet",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sheet-body",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "26. července 1648"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Noc na Malé Straně" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Švédský generál Königsmark přepadl Prahu. Maršál Rudolf Colloredo je odříznut mezi palácem a Vltavou. Loďka u nábřeží uveze jen jeho a jednoho muže. Druzí dva zůstanou na břehu a tři nárazy drží posily." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Colloredo nemá zbraň. Rozkaz dá spojenci další akční bod. Padne-li, noc končí." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "V prvním tahu ho schovejte za zeď u paláce. Švédové míří na maršála přednostně." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Martin nese kolečkovou pistoli, karabinu, rapír a jeden granát. Zlaté tlačítko je zbraň, kterou právě drží." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Václav má doutnákovou mušketu. Nabití stojí celý tah a ve vlhku od řeky občas selže. Prorazí půlzbroj." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Jakub drží halapartnu a petardu. Hradba zastaví prvního Švéda. Petarda boří zeď." })
							] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn btn-gold",
						onClick: () => {
							api()?.unlock();
							api()?.begin();
						},
						children: "Vstoupit do ulic"
					})]
				})
			}) : null,
			snap.epilogue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overlay",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "sheet",
					"data-outcome": snap.epilogue.outcome,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sheet-body",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: snap.epilogue.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: snap.epilogue.title }),
							snap.epilogue.paragraphs.map((paragraph, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, `${i}-${paragraph}`)),
							snap.epilogue.martyrs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "martyrs",
								children: snap.epilogue.martyrs.map((martyr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: martyr.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: martyr.line })] }, martyr.name))
							}) : null
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn btn-blood",
						onClick: () => api()?.restart(),
						children: "Nová noc"
					})]
				})
			}) : null
		]
	});
}
function apLabel(n) {
	const m = Math.abs(n) % 100;
	if (m === 1) return `${n} akční bod`;
	if (m >= 2 && m <= 4) return `${n} akční body`;
	return `${n} akčních bodů`;
}
function UnitCard({ unit, selected, onPick }) {
	const pips = Math.max(unit.maxAp, unit.ap);
	const width = `${Math.max(0, Math.min(100, unit.hp / unit.maxHp * 100))}%`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "card",
		"data-on": selected,
		"data-dead": !unit.alive || unit.embarked,
		onClick: onPick,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "seal",
			"data-side": unit.faction === "swedish" ? "swedish" : "imperial",
			children: unit.name.slice(0, 1)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
				unit.name,
				" · ",
				unit.hp,
				"/",
				unit.maxHp
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [unit.title, unit.status ? ` · ${unit.status}` : ""] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hp",
				"data-side": unit.faction,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width } })
			}),
			unit.alive && !unit.embarked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pips",
				"aria-label": apLabel(unit.ap),
				children: Array.from({ length: pips }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { "data-on": i < unit.ap }, i))
			}) : null
		] })]
	});
}
//#endregion
export { Home as component };
