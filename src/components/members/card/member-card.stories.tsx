import React from 'react'
import { Member } from '@/interfaces/Member'
import { MemberCard } from './member-card'

export default {
  title: 'Components/MembersGrid/MemberCard',
  component: MemberCard,
}

const Template = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="flex flex-col items-start justify-center flex-1 w-full text-center">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <li
            key={sampleMember.uniqueId}
            className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow"
          >
            <MemberCard key={sampleMember.uniqueId} member={sampleMember} />
          </li>
        </ul>
      </main>
    </div>
  )
}
export const Default = Template.bind({})

const sampleMember: Member = {
  uniqueId: 'YXNobGVlLmdhZGRAZ21haWwuY29t',
  objectID: 'YXNobGVlLmdhZGRAZ21haWwuY29t',
  rnd: 1,
  displayName: 'Ashlee Gadd',
  joined: '2018-03-01T00:00:00',
  joinedString: 'Mar, 18',
  lat: 38.5815719,
  lng: -121.4943996,
  isTeamMember: true,
  isOriginalMember: true,
  anniversaryCount: 3,
  gravatarConfirmed: true,
}
