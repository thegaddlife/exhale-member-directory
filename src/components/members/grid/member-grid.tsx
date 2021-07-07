import React from 'react'
import { MemberCard } from '@/components/members/card/member-card'
import { Member } from '@/interfaces/Member'

type Props = {
  members: Member[]
  onActiveFilterClick: (filter: string) => void
  onInactiveFilterClick: (filter: string) => void
  activeFilters: string[]
}

export const MembersGrid = ({
  members,
  onActiveFilterClick,
  onInactiveFilterClick,
  activeFilters,
}: Props): JSX.Element => {
  const filters = ['team', 'newbie', 'founder']
  const inActiveFilters = filters.filter((e) => !activeFilters.includes(e))

  return (
    <>
      <div>
        <h3>Inactive Filters ({inActiveFilters.length})</h3>
        {inActiveFilters.map((x) => (
          <button key={x} onClick={() => onInactiveFilterClick(x)}>
            {x}
          </button>
        ))}
      </div>
      <div>
        <h3>Active Filters ({activeFilters.length})</h3>
        {activeFilters.map((x) => (
          <button key={x} onClick={() => onActiveFilterClick(x)}>
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
