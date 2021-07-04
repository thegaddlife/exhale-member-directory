import { Member } from '@/interfaces/Member'
import { ProfileImage } from '@/components/members/profile/image'

type Props = {
  member: Member
}

export const MemberCard = ({ member }: Props): JSX.Element => {
  return (
    <>
      <ProfileImage member={member} />
      <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500">
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
