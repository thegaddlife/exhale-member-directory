import React, { useEffect, useState } from 'react'
import { MemberCard } from '@/components/members/card/member-card'
import { Member } from '@/interfaces/Member'

type Props = {
  members: Member[]
  onFilterClick: (filter: string, activated: boolean) => void
  activeFilters: string[]
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const MembersGrid = ({ members, onFilterClick, activeFilters }: Props): JSX.Element => {
  const filters = ['team', 'newbie', 'founder']
  console.log(activeFilters)

  const [count, setCount] = useState(0)

  // create a small delay between fading in the visible cards on the page
  useEffect(() => {
    let counter = count
    const interval = setInterval(() => {
      if (counter >= members.length) {
        clearInterval(interval)
      } else {
        setCount((count) => count + 1)
        counter++ // local variable that this closure will see
      }
    }, 50)
    return () => clearInterval(interval)
  }, [members])

  const animateMembersList = members.slice(0, count).map((member, idx) => {
    return (
      <div
        key={member.uniqueId}
        hidden={idx > 12}
        className={classNames(
          idx <= 12 ? 'animate-fade-in-down' : 'hidden',
          'px-6 py-10 text-center bg-white rounded-lg dark:bg-exhale-green xl:px-10 xl:text-left'
        )}
      >
        <MemberCard key={member.uniqueId} member={member} />
      </div>
    )
  })

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
        {animateMembersList}
      </div>
    </>
  )
}
