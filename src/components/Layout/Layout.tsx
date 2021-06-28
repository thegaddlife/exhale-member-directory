import React from 'react'
import Link from 'next/link'

export const Layout = ({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}): JSX.Element => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<meta http-equiv='refresh' content='0; url=https://www.memberspace.com/enable-javascript'`,
          }}
        ></noscript>
        <div id="__memberspace_modal_protected_page"></div>

        <main>{children}</main>
        {!home && (
          <div>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
