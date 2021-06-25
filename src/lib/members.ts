import membersJson from './members.json'
import { postData } from './post'
import { Member } from '@/interfaces/Member'
import { MemberGroup } from '@/interfaces/MemberGroup'
import { __prod__ } from 'src/constants'

const getAllMembers = async (): Promise<Member[]> => {
  let memberGroups = []
  if (__prod__) {
    const headers = {
      'Content-Type': 'application/json',
      'x-functions-key': process.env.FunctionKey,
    }

    // get members by calling sync on the azure serverless function
    postData(`${process.env.MEMBERS_API_ENDPOINT}/api/SyncMembers`, headers)
      .then((memberGroups) => {
        console.log(`${memberGroups.length} member groups retrieved`)
      })
      .catch((error) => {
        console.error('Error during fetch:', error)
      })
  } else {
    // otherwise in dev grab members from our sample file(s)
    memberGroups = memberGroupsSample
  }

  // for default return, sort flattened member list by name
  return memberGroups
    .map((group) => group.members)
    .flat()
    .sort(function (a, b) {
      const nameA = a.displayName.toUpperCase() // ignore upper and lowercase
      const nameB = b.displayName.toUpperCase() // ignore upper and lowercase
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }

      // names must be equal
      return 0
    })
}

export default getAllMembers

//comment these line out when doing production build
const memberGroupsSample: MemberGroup[] = JSON.parse(JSON.stringify(membersJson))
