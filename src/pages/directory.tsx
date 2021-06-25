import React from 'react'
import Head from 'next/head'
import MemberGrid from '@/components/MembersGrid/MembersGrid'
import { Member } from '@/interfaces/Member'
import Layout from '@/components/Layout/Layout'
import { GetStaticPropsResult } from 'next'
import { _private } from '@/lib/members'

const { __getAllMembers } = _private as any

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

  const allMembers: Member[] = await __getAllMembers()
    .map((group) => group.members)
    .flat()
    .sort(function (a, b) {
      const nameA = a.displayName.toUpperCase() // ignore upper and lowercase
      const nameB = b.displayName.toUpperCase() // ignore upper and lowercase
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }

      // names must be equal
      return 0
    })

  return { props: { allMembers } }
}
