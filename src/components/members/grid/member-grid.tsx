import React from 'react'
import { MemberCard } from '@/components/members/card/member-card'
import { Member } from '@/interfaces/Member'

type Props = {
  members: Member[]
  onFilterClick: (filter: string, activated: boolean) => void
  activeFilters: string[]
}

export const MembersGrid = ({ members, onFilterClick, activeFilters }: Props): JSX.Element => {
  const filters = ['team', 'newbie', 'founder']
  console.log(activeFilters)

  return (
    <>
      <div>
        {filters.map((x) => (
          <button
            key={x}
            onClick={() => onFilterClick(x, activeFilters.includes(x) === false)}
            className={`${activeFilters.includes(x) ? 'button-filter-on' : 'button-filter-off'}`}
          >
            {x}
          </button>
        ))}
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
