import MemberCard from './MemberCard/MemberCard'
import { Member } from '../interfaces/Member'

type Props = {
  members: Member[]
}

const MembersGrid = ({ members }: Props) => {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {members.map((member) => (
          <li
            key={member.id}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <MemberCard key={member.id} member={member} />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default MembersGrid
