import React from 'react'
import { Meta } from './meta'
import { ThemeChanger } from './themeChanger'

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

      <ThemeChanger />
      <main className="bg-exhale-grey dark:bg-exhale-green-dark">{children}</main>
    </>
  )
}
