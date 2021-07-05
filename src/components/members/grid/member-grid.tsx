import React from 'react'
import { MemberCard } from '@/components/members/card/member-card'
import { Member } from '@/interfaces/Member'

type Props = {
  members: Member[]
}

export const MembersGrid = ({ members }: Props): JSX.Element => {
  return (
    <>
      <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-4 lg:gap-8">
        {members.map((member) => (
          <li
            key={member.uniqueId}
            className="px-6 py-10 text-center bg-gray-800 rounded-lg xl:px-10 xl:text-left"
          >
            <MemberCard key={member.uniqueId} member={member} />
          </li>
        ))}
      </ul>
    </>
  )
}
