import { Member } from '@/interfaces/Member'
import { ProfileImage } from '@/components/members/profile/image'

type Props = {
  member: Member
}

export const MemberCard = ({ member }: Props): JSX.Element => {
  return (
    <>
      <div className="space-y-6 xl:space-y-10">
        <ProfileImage member={member} />
        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
          <div className="space-y-1 font-medium leading-6">
            <h3 className="text-exhale-green-dark dark:text-white text-md">{member.displayName}</h3>
            <p className="text-sm text-exhale-orange dark:text-exhale-brown">{member.title}</p>
          </div>
        </div>
      </div>
    </>
  )
}
