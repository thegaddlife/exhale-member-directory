import React from 'react'
import { GetStaticPropsResult } from 'next'
import Head from 'next/head'
import { MembersGrid } from '@/components/members/grid/member-grid'
import { Member } from '@/interfaces/Member'
import { getSortedMembers } from '@/lib/members'
import { Layout } from '@/components/layout/layout'

type DirectoryProps = {
  allMembers: Member[]
}

const Index = ({ allMembers }: DirectoryProps): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Exhale Creativity - Member Directory</title>
      </Head>
      <MembersGrid members={allMembers} />
    </Layout>
  )
}

export default Index

export const getStaticProps = async (): Promise<GetStaticPropsResult<DirectoryProps>> => {
  // for initial page load, we'll already have the top X members statically generated;
  // on scroll, the additional members will be loaded X members at a time
  const allMembers: Member[] = await getSortedMembers()

  return { props: { allMembers } }
}
