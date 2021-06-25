// otherwise in dev grab members from our sample file(s)
import { MemberGroup } from '@/interfaces/MemberGroup'
import { postData } from './post'

export async function getAllMembersRemote(): Promise<MemberGroup[]> {
  const headers = {
    'Content-Type': 'application/json',
    'x-functions-key': process.env.FunctionKey,
  }

  const memberGroups = []

  // get members by calling sync on the azure serverless function
  await postData(`${process.env.MEMBERS_API_ENDPOINT}/api/SyncMembers`, headers)
    .then((memberGroups) => {
      console.log(`${memberGroups.length} member groups retrieved`)
    })
    .catch((error) => {
      console.error('Error during fetch:', error)
    })

  return memberGroups
}
