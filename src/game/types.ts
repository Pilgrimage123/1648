export type Faction = "imperial" | "swedish";
export type Archetype =
  | "colloredo"
  | "martin"
  | "vaclav"
  | "jakub"
  | "musketeer"
  | "pikeman";
export type TileKind =
  | "cobble"
  | "palace"
  | "wall"
  | "cart"
  | "river"
  | "boat"
  | "quay"
  | "rubble";
export type Phase =
  | "briefing"
  | "flight"
  | "dock"
  | "hold"
  | "victory"
  | "defeat";
export type WeaponId =
  | "pistol"
  | "carbine"
  | "rapier"
  | "musket"
  | "halberd"
  | "pike"
  | "swedeMusket"
  | "grenade"
  | "petard";
export type Delivery = "shot" | "throw" | "place";
export type Fate = "none" | "alley" | "bank" | "stood" | "sailed";
export type PendingEnd = null | "colloredo" | "nohero" | "victory";

export type Weapon = {
  id: WeaponId;
  name: string;
  short: string;
  range: number;
  damage: number;
  ap: number;
  reloadAp: number;
  accuracy: number;
  falloff: number;
  firearm: boolean;
  misfire: number;
  pierce: number;
  shred: number;
  blast: number;
  delivery: Delivery;
};

export type Unit = {
  id: string;
  name: string;
  title: string;
  faction: Faction;
  archetype: Archetype;
  vip: boolean;
  prayer: boolean;
  hp: number;
  maxHp: number;
  ap: number;
  maxAp: number;
  x: number;
  y: number;
  facing: 1 | -1;
  alive: boolean;
  embarked: boolean;
  weapons: Weapon[];
  weaponIndex: number;
  loaded: boolean;
  ready: WeaponId[];
  stock: Partial<Record<WeaponId, number>>;
  armor: number;
  armorMax: number;
  prayerUsed: boolean;
  blessing: boolean;
  overwatch: boolean;
  fate: Fate;
  bob: number;
};

export type Smoke = { x: number; y: number; expire: number };
export type Decal = { x: number; y: number };

export type Sim = {
  tiles: TileKind[][];
  units: Unit[];
  smokes: Smoke[];
  decals: Decal[];
  clock: number;
  phase: Phase;
  turn: "player" | "enemy";
  round: number;
  holdLeft: number;
  seq: number;
  kills: number;
  log: string[];
  rng: () => number;
  pendingEnd: PendingEnd;
  nameBag: string[];
};

export type Epilogue = {
  outcome: "victory" | "defeat";
  kicker: string;
  title: string;
  paragraphs: string[];
  survivor: string | null;
  martyrs: { name: string; line: string }[];
};

export type HudUnit = {
  id: string;
  name: string;
  title: string;
  faction: Faction;
  archetype: Archetype;
  hp: number;
  maxHp: number;
  ap: number;
  maxAp: number;
  alive: boolean;
  embarked: boolean;
  vip: boolean;
  loaded: boolean | null;
  blessing: boolean;
  overwatch: boolean;
  prayerUsed: boolean;
  weapons: { id: string; name: string; active: boolean }[];
  status: string;
};

export type ActionBtn = { visible: boolean; enabled: boolean; label: string };

export type Snapshot = {
  phase: Phase;
  phaseLabel: string;
  objective: string;
  round: number;
  turn: "player" | "enemy";
  holdLeft: number | null;
  busy: boolean;
  muted: boolean;
  mode: "normal" | "rozkaz";
  selectedId: string | null;
  hoverText: string;
  log: string[];
  units: HudUnit[];
  enemiesAlive: number;
  reload: ActionBtn;
  prayer: ActionBtn;
  rozkaz: ActionBtn;
  hradba: ActionBtn;
  sail: ActionBtn;
  endTurn: ActionBtn;
  weaponButtons: { id: string; name: string; active: boolean }[];
  epilogue: Epilogue | null;
};

export type UiState = {
  selectedId: string | null;
  mode: "normal" | "rozkaz";
  hoverText: string;
  busy: boolean;
  muted: boolean;
};
