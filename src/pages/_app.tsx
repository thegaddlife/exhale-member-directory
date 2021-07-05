import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
