import React from 'react'
import { MemberCard } from '@/components/members/card/member-card'
import { Member } from '@/interfaces/Member'

type Props = {
  members: Member[]
}

export const MembersGrid = ({ members }: Props): JSX.Element => {
  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8"
      >
        {members.map((member) => (
          <li key={member.memberId} className="relative">
            <MemberCard key={member.memberId} member={member} />
          </li>
        ))}
      </ul>
    </>
  )
}
