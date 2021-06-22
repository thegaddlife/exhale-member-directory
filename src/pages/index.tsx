import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Exhale Creativity - Member Directory</title>
        <link rel="alternate icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Link href="/directory">Directory</Link>
    </div>
  )
}

export default Home
