import { postData } from './post'
import { Member } from '@/interfaces/Member'
import { __prod__ } from 'src/constants'
import { readFile } from 'fs'

const getAllMembers = async (): Promise<Member[]> => {
  let memberGroups = []
  if (__prod__) {
    // get members by calling sync on the azure serverless function
    postData(`${process.env.MEMBERS_API_ENDPOINT}/api/SyncMembers`)
      .then((memberGroups) => {
        console.log(`${memberGroups.length} member groups retrieved`)
      })
      .catch((error) => {
        console.error('Error during fetch:', error)
      })
  } else {
    // otherwise in dev grab members from our sample file(s)
    readFile('/members.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      memberGroups = JSON.parse(JSON.stringify(data))
    })
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
