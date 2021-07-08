import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

/*
Backlog
-----
Header
  -Help
  -Profile image
  -Welcome message?
Filters
Search
Member Profile modal
Polish/animations/dark mode
Performance/infinite scroll/lazy load



*/
