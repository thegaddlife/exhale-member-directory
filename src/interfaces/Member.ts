import { Badge } from './Badge'
import { SocialLink } from './SocialLink'

export interface Member {
  uniqueId: string
  objectID: string
  displayName: string
  title?: string
  blurb?: string
  joined?: string
  joinedString?: string
  city?: string
  stateProvince?: string
  country?: string
  lat?: number | null
  lng?: number | null
  isTeamMember: boolean
  isOriginalMember: boolean
  gravatarConfirmed: boolean
  anniversaryCount?: number

  links?: SocialLink[]

  badges?: Badge[]
  rnd: number
}
