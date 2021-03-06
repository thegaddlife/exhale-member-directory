import { Member } from '@/interfaces/Member'
import Image from 'next/image'

type Props = {
  member: Member
}

export const ProfileImage = ({ member }: Props): JSX.Element => {
  const memberSrc = member.gravatarConfirmed
    ? `https://www.gravatar.com/avatar/${member.uniqueId}?s=320`
    : `/images/default-img-${member.rnd}.jpg`
  return (
    <Image
      src={memberSrc}
      width={320}
      height={320}
      unoptimized={member.gravatarConfirmed === false}
      alt={`View details for ${member.displayName}`}
      className="mx-auto rounded-full"
    />
  )
}
