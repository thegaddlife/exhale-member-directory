import { Member } from '@/interfaces/Member'
import Image from 'next/image'
import defaultImg from '@/public/default-img.jpg'
type Props = {
  member: Member
}

export const MemberCard = ({ member }: Props): JSX.Element => {
  return (
    <>
      <div className="block w-full overflow-hidden bg-gray-100 rounded-lg ring-2 ring-offset-2 ring-green-100 group aspect-w-10 aspect-h-7">
        <Image
          src={defaultImg}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          alt={`View details for ${member.displayName}`}
          className="object-cover pointer-events-none"
        />
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for {member.displayName}</span>
        </button>
      </div>
      <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
        {member.displayName}
      </p>
      <p className="block text-sm font-medium text-gray-500 pointer-events-none">
        {member.submission?.title}
      </p>
    </>
  )
}
