import React from 'react'
import { Color } from '@/interfaces/Color'
import { Icon } from '@/interfaces/Icon'
import { Member } from '@/interfaces/Member'
import { MemberCard } from './member-card'

export default {
  title: 'Components/MembersGrid/MemberCard',
  component: MemberCard,
}

const Template = () => {
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
  displayName: 'Ashlee Gadd',
  joined: '2018-03-01T00:00:00',
  joinedString: 'Mar, 18',
  submission: {
    timestamp: '2019-12-30T12:57:41-08:00',
    email: 'ashlee.gadd@gmail.com',
    beListed: true,
    displayName: 'Ashlee Gadd',
    title: 'Writer + Photographer',
    blurb: 'Wife, mother, founder of Coffee + Crumbs. ',
    insta: 'https://www.instagram.com/ashleegadd/',
    website: 'https://www.ashleegadd.com/',
    city: 'Sacramento',
    stateProvince: 'California',
    country: 'United States',
    voxerName: '',
  },
  lat: 38.5815719,
  lng: -121.4943996,
  latLng: '38.5815719,-121.4943996',
  isTeamMember: true,
  isOriginalMember: true,
  anniversaryCount: 3,
  badges: [
    {
      color: Color.pink,
      icon: Icon.user,
      text: 'C+C Team Member',
    },
  ],
  gravatarConfirmed: true,
  locationCompareString: 'Sacramento,California,United States',
}
