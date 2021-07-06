import { Member } from '@/interfaces/Member'
import { ProfileImage } from '@/components/members/profile/image'
import { ExhaleIcon } from '@/components/members/profile/socialIcon'

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
          <ul className="flex space-x-2 justify-right">
            {member.links?.map((link) => (
              <li key={member.uniqueId + '-' + link.type}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{link.type}</span>
                  <ExhaleIcon name={link.type} className="w-6 h-6" viewBox="0 0 24 24" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
