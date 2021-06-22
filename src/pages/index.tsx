import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

export const config = {
  unstable_runtimeJS: false,
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Exhale Creativity - Member Directory</title>
      </Head>
      <Link href="/directory">Directory</Link>
    </Layout>
  )
}
