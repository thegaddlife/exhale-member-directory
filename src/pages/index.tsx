import Head from 'next/head'
import MemberGrid from '../components/MembersGrid'
import { GetStaticProps } from 'next'
import { Member } from '../interfaces/Member'
import { sampleMemberData } from '../utils/sample-data'

type Props = {
  members: Member[]
}

const Home = ({ members }: Props) => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title>Exhale Creativity - Member Directory</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MemberGrid members={members} />
  </div>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const members: Member[] = sampleMemberData

  console.log('members', members)

  return { props: { members } }
}

export default Home
