export interface MonsterDetail {
  index: string
  name: string
  desc?: string[]
  size: string
  type: string
  subtype: string | null
  alignment: string
  armor_class: number
  hit_points: number
  hit_dice: string
  speed: Record<string, string>
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  proficiencies: Proficiency[]
  damage_vulnerabilities: string[]
  damage_resistances: string[]
  damage_immunities: string[]
  condition_immunities: ConditionImmunity[]
  senses: Record<string, string>
  languages: string
  challenge_rating: number
  special_abilities: SpecialAbility[]
  actions: Action[]
  legendary_actions: LegendaryAction[]
  url: string
  updated_at: string
}

export interface Proficiency {
  proficiency: {
    index: string
    name: string
    url: string
  }
  value: number
}

export interface ConditionImmunity {
  index: string
  name: string
  url: string
}

export interface SpecialAbility {
  name: string
  desc: string
  usage?: {
    type: string
    times: number
  }
}

export interface Action {
  name: string
  desc: string
  attack_bonus?: number
  damage?: Damage[]
}

export interface Damage {
  damage_type: DamageType
  damage_dice: string
  damage_bonus: number
}

export interface DamageType {
  index: string
  name: string
  url: string
}

export interface LegendaryAction {
  name: string
  desc: string
  attack_bonus?: number
  damage?: Damage[]
}