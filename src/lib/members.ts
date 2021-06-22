import { Member } from '../interfaces/Member'
import { MemberGroup } from '../interfaces/MemberGroup'

const getAllMembers = async (): Promise<Member[]> => {
  // uncomment this line for production build
  //const response = await fetch(`${process.env.MEMBERS_API_ENDPOINT}/api/GetMembers`)
  //const memberGroups = await response.json()

  const members = memberGroups.map((group) => group.members).flat()

  return members
}

export default getAllMembers

//comment these line out when doing production build
import membersJson from './members.json'
const memberGroups: MemberGroup[] = JSON.parse(JSON.stringify(membersJson))
