import React from 'react'
import { MemberCard } from '@/components/members/card/member-card'
import { Member } from '@/interfaces/Member'

type Props = {
  members: Member[]
  onFilterClick: (badge: string) => void
}

export const MembersGrid = ({ members, onFilterClick }: Props): JSX.Element => {
  return (
    <>
      <div>
        <button onClick={() => onFilterClick('newbie')}>New Members</button>
        <button onClick={() => onFilterClick('team')}>Exhale Team</button>
        <button onClick={() => onFilterClick('founder')}>Founders</button>
      </div>
      <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-4 lg:gap-8">
        {members.map((member) => (
          <div
            key={member.uniqueId}
            className="px-6 py-10 text-center bg-white rounded-lg dark:bg-exhale-green xl:px-10 xl:text-left"
          >
            <MemberCard key={member.uniqueId} member={member} />
          </div>
        ))}
      </div>
    </>
  )
}
