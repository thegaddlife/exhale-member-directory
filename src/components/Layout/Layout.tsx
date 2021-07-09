import React, { useEffect, useState } from 'react'
import { Meta } from './meta'
import { Header } from '@/components/layout/header'
import { MemberSpaceMember } from '@/interfaces/Member'

export const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [user, setUser] = useState<MemberSpaceMember>({})

  useEffect(() => {
    setUser(window.member)
  }, [user])

  const handleSearch = (input: string): void => {
    console.log('search', input)
  }

  return (
    <>
      <Meta />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<meta http-equiv='refresh' content='0; url=https://www.memberspace.com/enable-javascript'`,
        }}
      ></noscript>
      <div id="__memberspace_modal_protected_page"></div>

      <Header onSearch={handleSearch} loggedInUser={user} />
      <main className="bg-gray-200 dark:bg-exhale-green-dark">{children}</main>
    </>
  )
}
