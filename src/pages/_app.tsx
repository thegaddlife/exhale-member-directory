import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log(process.env.NODE_ENV)
  return <Component {...pageProps} />
}

export default MyApp
