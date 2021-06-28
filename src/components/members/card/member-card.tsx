import { Member } from '@/interfaces/Member'

type Props = {
  member: Member
}

export const MemberCard = ({ member }: Props): JSX.Element => {
  return <>{member.displayName}</>
}
