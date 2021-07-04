import Image from 'next/image'
import defaultImg from '@/public/default-img.jpg'
import { Member } from '@/interfaces/Member'

type Props = {
  member: Member
}

export const ProfileImage = ({ member }: Props): JSX.Element => {
  if (member.gravatarConfirmed) {
    const memberSrc = `https://www.gravatar.com/avatar/${member.uniqueId}?s=200`
    return (
      <img
        src={memberSrc}
        alt={`View details for ${member.displayName}`}
        className="object-cover pointer-events-none group-hover:opacity-75"
      />
    )
  }
  // Otherwise return default image
  return (
    <img
      // src={defaultImg}
      src="/default-img.jpg"
      alt={`View details for ${member.displayName}`}
      className="object-cover pointer-events-none group-hover:opacity-75"
    />
  )
}
