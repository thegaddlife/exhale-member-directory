import { Badge } from './Badge'

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
  insta?: string
  twitter?: string
  facebook?: string
  website?: string
  badges?: Badge[]
}
