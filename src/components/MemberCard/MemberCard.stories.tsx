import React from 'react'
import { sampleMemberData } from '../../utils/sample-data'
import MemberCard from './MemberCard'

export default {
  title: 'Components/MemberCard',
  component: MemberCard,
}

const Template = () => {
  const member = sampleMemberData[0]
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="flex flex-col items-start justify-center flex-1 w-full text-center">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <li
            key={member.id}
            className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow"
          >
            <MemberCard key={member.id} member={member} />
          </li>
        </ul>
      </main>
    </div>
  )
}
export const Default = Template.bind({})
