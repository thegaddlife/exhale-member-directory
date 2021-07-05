export interface SocialLink {
  type: LinkType
  url: string
}

export enum LinkType {
  Team,
  Founder,
  Anniversary,
  Newbie,
}
