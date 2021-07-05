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

      <div className="bg-gray-900">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <MembersGrid members={allMembers} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const getStaticProps = async (): Promise<GetStaticPropsResult<DirectoryProps>> => {
  // for initial page load, we'll already have the top X members statically generated;
  // on scroll, the additional members will be loaded X members at a time
  const allMembers: Member[] = await getSortedMembers()

  allMembers.map((x) => {
    x.rnd = Math.floor(Math.random() * (4 - 1 + 1) + 1)
  })

  return { props: { allMembers } }
}
