import { Member } from '@/interfaces/Member'
import { ProfileImage } from '@/components/members/profile/image'
import { useInView } from 'react-intersection-observer'

type Props = {
  member: Member
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export const MemberCard = ({ member }: Props): JSX.Element => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  })

  return (
    <>
      <div
        ref={ref}
        className={classNames(
          inView ? 'animate-fade-in-down' : 'opacity-0',
          'px-6 py-10 text-center bg-white rounded-lg dark:bg-exhale-green xl:px-10 xl:text-left'
        )}
      >
        <div className="space-y-6 xl:space-y-10">
          <ProfileImage member={member} />
          <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
            <div className="space-y-1 font-medium leading-6">
              <h3 className="text-exhale-green-dark dark:text-white text-md">
                {member.displayName}
              </h3>
              <p className="text-sm text-exhale-orange dark:text-exhale-brown">{member.title}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
