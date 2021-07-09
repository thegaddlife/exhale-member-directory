import React, { useEffect, useState } from 'react'
import { GetStaticPropsResult } from 'next'
import { MembersGrid } from '@/components/members/grid/member-grid'
import { Member } from '@/interfaces/Member'
import { getSortedMembers } from '@/lib/members'
import { Layout } from '@/components/layout/layout'

type DirectoryProps = {
  data: Member[]
}

const Index = ({ data }: DirectoryProps): JSX.Element => {
  const [members, setMembers] = useState<Member[]>([])
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  useEffect(() => {
    setMembers(data)
  }, [data])

  const filterFunc = ({ tags }: Member): boolean => {
    if (activeFilters.length === 0) {
      return true
    }

    // does this member have tags for all of the active filters?
    return activeFilters.every((f) => tags?.includes(f))
  }

  const handleFilterClick = (filter: string, activate: boolean): void => {
    console.log('filter', filter)
    console.log('activate', activate)
    if (activate) {
      setActiveFilters([...activeFilters, filter])
    } else {
      setActiveFilters(activeFilters.filter((f) => f !== filter))
    }
  }

  const filteredMembers: Member[] = members.filter(filterFunc)

  return (
    <Layout>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="min-h-screen space-y-12">
          <MembersGrid
            members={filteredMembers}
            activeFilters={activeFilters}
            onFilterClick={handleFilterClick}
          />
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
    x.rnd = Math.floor(Math.random() * (2 - 1 + 1) + 1)
  })

  //TODO: as part of getStaticProps, we could also download everybody's photo
  //and store it with their uniqueId; this way we don't rely on gravatar for uptime
  // and we can let nextjs keep a high res copy and deliver the best version

  return { props: { data } }
}
