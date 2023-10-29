import Head from 'next/head';
import Navbar from '@/components/Navbar';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>aramico</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/icon.png" /> */}
        {/* <link rel="preconnect" href="https://stijndv.com" /> */}
      </Head>
      <header>
        <Navbar />
        <CTA />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
  </main>
  )
}
