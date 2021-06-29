import React from 'react'
import Profile from '@/components/members/profile/profile'
import { Header } from './header'
import { Meta } from './meta'
import { Sidebar } from './sidebar'

export const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <Meta />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<meta http-equiv='refresh' content='0; url=https://www.memberspace.com/enable-javascript'`,
        }}
      ></noscript>
      <div id="__memberspace_modal_protected_page"></div>

      <div className="flex h-screen overflow-hidden bg-gray-50">
        {/* <Sidebar /> */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* <Header /> */}
          <div className="flex items-stretch flex-1 overflow-hidden">
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
        </div>
      </div>
    </>
  )
}
