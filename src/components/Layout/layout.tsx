import React, { useEffect, useState } from 'react'
import { Meta } from './meta'
import { Nav } from '@/components/layout/nav'
import { MemberSpaceMember } from '@/interfaces/Member'

export const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [user, setUser] = useState<MemberSpaceMember>({})

  useEffect(() => {
    setUser(window.member)
  }, [user])

  return (
    <>
      <Meta />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<meta http-equiv='refresh' content='0; url=https://www.memberspace.com/enable-javascript'`,
        }}
      ></noscript>
      <div id="__memberspace_modal_protected_page"></div>

      <div className="min-h-screen bg-white">
        <div className="py-10">
          <header>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">Exhale Members</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}
