import React from 'react'
import Head from 'next/head'
import MemberGrid from '@/components/MembersGrid/MembersGrid'
import { Member } from '@/interfaces/Member'
import Layout from '@/components/Layout/Layout'
import { GetStaticPropsResult } from 'next'
import getAllMembers from '@/lib/members'

type DirectoryProps = {
  allMembers: Member[]
}

const Directory = ({ allMembers }: DirectoryProps): JSX.Element => {
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

export async function getStaticProps(): Promise<GetStaticPropsResult<DirectoryProps>> {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.

  const allMembers: Member[] = await getAllMembers()

  return { props: { allMembers } }
}
