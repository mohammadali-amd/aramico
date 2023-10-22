import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomePage from '@/sections/HomePage'
import CTA from '@/components/CTA'
import Head from 'next/head';

export default function Home() {
  return (
    <main>
      <Head>
        <title>aramico</title>
      </Head>
      <Navbar />
      <HomePage />
      <CTA />
      <Footer />
    </main>
  );
}
