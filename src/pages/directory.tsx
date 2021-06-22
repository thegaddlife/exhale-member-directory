import React from 'react'
import Head from 'next/head'
import MemberGrid from '../components/MembersGrid/MembersGrid'
import { Member } from '../interfaces/Member'
import getAllMembers from '../lib/members'
import Layout from '../components/Layout/Layout'

type Props = {
  allMembers: Member[]
}

const Directory = ({ allMembers }: Props) => {
  return (
    <Layout>
      <Head>
        <title>Exhale Creativity - Member Directory</title>
      </Head>

      <MemberGrid members={allMembers} />
    </Layout>
  )
}

export default Directory

export const getStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const allMembers: Member[] = await getAllMembers()

  return { props: { allMembers } }
}
