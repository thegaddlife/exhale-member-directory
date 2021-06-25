import { __prod__ } from 'src/constants'
import { getAllLocalMembers } from './membersLocal'
import { getAllMembersRemote } from './membersRemote'

export const _private = __prod__
  ? { __getAllMembers: getAllMembersRemote }
  : { __getAllMembers: getAllLocalMembers }
