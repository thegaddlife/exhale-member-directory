import Image from 'next/image'
import defaultImg from '@/public/default-img.jpg'
import { Member } from '@/interfaces/Member'

type Props = {
  member: Member
}

export const ProfileImage = ({ member }: Props): JSX.Element => {
  if (member.gravatarConfirmed) {
    const memberSrc = `https://secure.gravatar.com/${member.uniqueId}?s=200`
    return (
      <Image
        src={memberSrc}
        layout="fill"
        objectFit="cover"
        alt={`View details for ${member.displayName}`}
        className="object-cover pointer-events-none group-hover:opacity-75"
      />
    )
  }
  // Otherwise return default image
  return (
    <Image
      src={defaultImg}
      placeholder="blur"
      layout="fill"
      objectFit="cover"
      alt={`View details for ${member.displayName}`}
      className="object-cover pointer-events-none group-hover:opacity-75"
    />
  )
}
