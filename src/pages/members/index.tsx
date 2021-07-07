import React, { useEffect, useState } from 'react'
import { GetStaticPropsResult } from 'next'
import Head from 'next/head'
import { MembersGrid } from '@/components/members/grid/member-grid'
import { Member } from '@/interfaces/Member'
import { getSortedMembers } from '@/lib/members'
import { Layout } from '@/components/layout/layout'

type DirectoryProps = {
  data: Member[]
}

const Index = ({ data }: DirectoryProps): JSX.Element => {
  const [members, setMembers] = useState<Member[]>([])
  const [filters, setFilters] = useState([])
  useEffect(() => setMembers(data), [])

  const filterFunc = ({ badges }) => {
    if (filters.length === 0) {
      return true
    }

    // start with badges
    const tags = [...badges]

    // eventually add region and anniversary
    console.log('badges', badges)
    console.log('filters', filters)
    return tags.some((tag) => filters.includes(tag))
  }

  const handleBadgeClick = (badge) => {
    setFilters([...filters, badge])
  }

  const filteredMembers: Member[] = members.filter(filterFunc)

  return (
    <Layout>
      <Head>
        <title>Exhale Creativity - Member Directory</title>
      </Head>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          {members.length === 0 ? (
            <p>Fetching members ...</p>
          ) : (
            <MembersGrid members={filteredMembers} onBadgeClick={handleBadgeClick} />
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const getStaticProps = async (): Promise<GetStaticPropsResult<DirectoryProps>> => {
  // for initial page load, we'll already have the top X members statically generated;
  // on scroll, the additional members will be loaded X members at a time
  const data: Member[] = await getSortedMembers()

  data.map((x) => {
    x.rnd = Math.floor(Math.random() * (4 - 1 + 1) + 1)
  })

  //TODO: as part of getStaticProps, we could also download everybody's photo
  //and store it with their uniqueId; this way we don't rely on gravatar for uptime
  // and we can let nextjs keep a high res copy and deliver the best version

  return { props: { data } }
}
