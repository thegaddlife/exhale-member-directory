import { __prod__ } from '@/lib/constants'
import Head from 'next/head'

export const Meta = (): JSX.Element => {
  return (
    <Head>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" type="image/png" href="/favicon.png" />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      {__prod__ && (
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
  )
}
