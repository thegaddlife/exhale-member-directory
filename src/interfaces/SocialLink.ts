export interface SocialLink {
  type: LinkType
  url: string
}

export enum LinkType {
  Instagram = 'Instagram',
  Website = 'Website',
  Voxer = 'Voxer',
}
