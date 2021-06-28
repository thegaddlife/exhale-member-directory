import React from 'react'
import { MemberCard } from '@/components/members/card/member-card'
import { Member } from '@/interfaces/Member'

type Props = {
  members: Member[]
}

export const MembersGrid = ({ members }: Props): JSX.Element => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {members.map((member) => (
        <li
          key={member.memberId}
          className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow"
        >
          <MemberCard key={member.memberId} member={member} />
        </li>
      ))}
    </ul>
  )
}
