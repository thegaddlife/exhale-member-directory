export interface Badge {
  type: BadgeType
  anniversaryCount: number
}

export enum BadgeType {
  Team,
  Founder,
  Anniversary,
  Newbie,
}
