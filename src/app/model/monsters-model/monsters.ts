export interface Monster {
level: any
  index: string
  name: string
  size: string
  type: string
  subtype: string | null
  alignment: string
  armor_class: number
  hit_points: number
  hit_dice: string
  speed: Record<string, string>
  url: string
}