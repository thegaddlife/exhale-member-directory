// otherwise in dev grab members from our sample file(s)
import { MemberGroup } from '@/interfaces/MemberGroup'
import membersJson from './members.json'

export function getAllLocalMembers(): MemberGroup[] {
  const memberGroupsSample: MemberGroup[] = JSON.parse(JSON.stringify(membersJson))
  return memberGroupsSample
}
