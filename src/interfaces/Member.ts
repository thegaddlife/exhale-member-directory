import { Badge } from './Badge'
import { Submission } from './Submission'

export interface Member {
  emailAddress?: string
  memberId?: string
  uniqueId?: string
  displayName?: string
  joined?: string
  joinedString?: string
  submission?: Submission
  lat?: number | null
  lng?: number | null
  latLng?: string
  isTeamMember?: boolean
  isOriginalMember?: boolean
  anniversaryCount?: number
  badges?: Badge[]
  locationCompareString?: string
}
