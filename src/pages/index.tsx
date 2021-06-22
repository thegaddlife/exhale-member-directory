import Head from 'next/head'
import MemberGrid from '../components/MembersGrid'
// import { GetStaticProps } from 'next'
import { Member } from '../interfaces/Member'
import getAllMembers from '../lib/members'

type Props = {
  allMembers: Member[]
}

const Home = ({ allMembers }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Exhale Creativity - Member Directory</title>
        <link rel="alternate icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <MemberGrid members={allMembers} />
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const allMembers: Member[] = await getAllMembers()

  return { props: { allMembers } }
}
