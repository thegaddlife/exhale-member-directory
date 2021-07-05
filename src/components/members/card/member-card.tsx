import { Member } from '@/interfaces/Member'
import { ProfileImage } from '@/components/members/profile/image'
import { SocialItem } from '@/components/members/profile/social'

type Props = {
  member: Member
}

export const MemberCard = ({ member }: Props): JSX.Element => {
  return (
    <>
      <div className="space-y-6 xl:space-y-10">
        <ProfileImage member={member} />
        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
          <div className="space-y-1 text-lg font-medium leading-6">
            <h3 className="text-white">{member.displayName}</h3>
            <p className="text-indigo-400">{member.title}</p>
          </div>
          <ul className="flex justify-center space-x-5">
            {member.links?.map((link) => (
              <SocialItem key={member.uniqueId + '-' + link.type} link={link} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
