import React from 'react'
import Image from 'next/image'
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import { Member } from '@/interfaces/Member'

type Props = {
  member: Member
}

const MemberCard = ({ member }: Props): JSX.Element => {
  return (
    <>
      <div className="flex flex-col flex-1 p-8">
        <div className="relative flex-shrink-0 w-20 h-20 mx-auto">
          <Image
            src={member.photoUrl}
            className="bg-black rounded-full"
            layout="fill"
            objectFit="cover"
            alt={member.displayName}
          />
        </div>
        <h3 className="mt-6 text-sm font-medium text-gray-900">{member.displayName}</h3>
        <dl className="flex flex-col justify-between flex-grow mt-1">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm text-gray-500">{member.submission?.title}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
              test
            </span>
          </dd>
        </dl>
      </div>
      <div className="flex -mt-px divide-x divide-gray-200">
        <div className="flex flex-1 w-0">
          <a
            href={`mailto:${member.emailAddress}`}
            className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500"
          >
            <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            <span className="ml-3">Email</span>
          </a>
        </div>
        <div className="flex flex-1 w-0 -ml-px">
          <a className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500">
            <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            <span className="ml-3">Call</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default MemberCard
