import MemberCard from '@/components/MemberCard/MemberCard'
import { Member } from '@/interfaces/Member'

type Props = {
  members: Member[]
}

const MembersGrid = ({ members }: Props) => {
  return (
    <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {members.map((member) => (
          <li
            key={member.memberId}
            className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow"
          >
            <MemberCard key={member.memberId} member={member} />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default MembersGrid
