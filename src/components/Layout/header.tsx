import { MemberSpaceMember } from '@/interfaces/Member'

type Props = {
  loggedInUser: MemberSpaceMember
  onSearch: (input: string) => void
}

export const Header = ({ loggedInUser }: Props): JSX.Element => {
  return (
    <>
      <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
        {/* <ThemeChanger /> */}
        <h1>{loggedInUser?.firstName}</h1>
      </header>
    </>
  )
}
