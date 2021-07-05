import { __prod__ } from '@/lib/constants'
import Head from 'next/head'

export const Meta = (): JSX.Element => {
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />

      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

      <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
      <link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196" />
      <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128" />

      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon-180x180.png" />

      <meta name="application-name" content="Exhale Members" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png" />
      <meta name="msapplication-square70x70logo" content="/favicon/mstile-70x70.png" />
      <meta name="msapplication-square150x150logo" content="/favicon/mstile-150x150.png" />
      <meta name="msapplication-wide310x150logo" content="/favicon/mstile-310x150.png" />
      <meta name="msapplication-square310x310logo" content="/favicon/mstile-310x310.png" />

      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="none" />

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
