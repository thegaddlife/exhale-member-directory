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
        className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-56"
      >
        {members.map((member) => (
          <li key={member.uniqueId}>
            <MemberCard key={member.uniqueId} member={member} />
          </li>
        ))}
      </ul>
    </>
  )
}
