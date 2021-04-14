import '@styles/globals.css';
import '@fontsource/poppins'
import '@fontsource/josefin-sans';
import Navbar from '@components/Navbar'
import { Router } from 'next/router';
import { useState } from 'react';
import Loader from '@components/Loader';



function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
})

Router.events.on('routeChangeComplete', () => setLoading(false))
Router.events.on('routeChangeError', () => setLoading(false))


  return <main className="relative overflow-x-hidden">
    <Loader show={loading}/>
    <Navbar/>
    <Component {...pageProps} />
  </main>
}

export default MyApp
