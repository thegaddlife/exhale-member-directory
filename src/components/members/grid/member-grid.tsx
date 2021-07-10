import React from 'react'
import { MemberCard } from '@/components/members/card/member-card'
import { Member } from '@/interfaces/Member'

type Props = {
  members: Member[]
  onFilterClick: (filter: string, activated: boolean) => void
  onQuery: (query: string) => void
  activeFilters: string[]
}

export const MembersGrid = ({
  members,
  onFilterClick,
  onQuery,
  activeFilters,
}: Props): JSX.Element => {
  const filters = ['team', 'newbie', 'founder']
  return (
    <>
      <div>
        <input
          type={'text'}
          placeholder={'type here to filter...'}
          onChange={(event) => onQuery(event.target.value)}
        />
      </div>
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
          <MemberCard key={member.uniqueId} member={member} />
        ))}
      </div>
    </>
  )
}
