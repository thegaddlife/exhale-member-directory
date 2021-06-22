import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const isProd = process.env.NODE_ENV === `production`

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <link rel="alternate icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="robots" content="noindex, nofollow" />
        {isProd && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
          var MemberSpace = window.MemberSpace || {subdomain: 'exhalecreativity', domain: 'members.exhalecreativity.com'};
          (function(d){
          var s = d.createElement('script');
          s.src = 'https://cdn.memberspace.com/scripts/widgets.js';
          var e = d.getElementsByTagName('script')[0];
          e.parentNode.insertBefore(s,e);
          }(document));  
                `,
              }}
            ></script>

            <style
              dangerouslySetInnerHTML={{
                __html: `#__memberspace_modal_protected_page {position:fixed; top:0; left:0; width:100%; height:100%; background:#000; z-index:2147483646;}`,
              }}
            ></style>
            <script
              dangerouslySetInnerHTML={{
                __html: `if(window.top.location.href.search('.squarespace.com/config') > 0) {document.getElementById("__memberspace_modal_protected_page").style.display = "none";}`,
              }}
            ></script>
          </>
        )}
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<meta http-equiv='refresh' content='0; url=https://www.memberspace.com/enable-javascript'`,
        }}
      ></noscript>
      <div id="__memberspace_modal_protected_page"></div>
      <header>
        <h1>Exhale Members</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
