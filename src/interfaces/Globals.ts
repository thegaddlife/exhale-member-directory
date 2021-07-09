import { MemberSpaceMember } from './Member'

export {}

declare global {
  interface Window {
    member: MemberSpaceMember
  }
}
