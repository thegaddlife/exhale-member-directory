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
            key={sampleMember.memberId}
            className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow"
          >
            <MemberCard key={sampleMember.memberId} member={sampleMember} />
          </li>
        </ul>
      </main>
    </div>
  )
}
export const Default = Template.bind({})

const sampleMember: Member = {
  emailAddress: 'ashlee.gadd@gmail.com',
  memberId: 'YXNobGVlLmdhZGRAZ21haWwuY29t',
  photoUrl:
    'https://secure.gravatar.com/avatar/28b365fd1275318ceb8b7e73581dc8b0?d=https://i.ibb.co/4wLFJvF/exhale-logo.jpg',
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
    photoUrl: null,
    city: 'Sacramento',
    stateProvince: 'California',
    country: 'United States',
    voxerName: '',
    useGravatar: true,
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
  locationCompareString: 'Sacramento,California,United States',
}
