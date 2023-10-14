import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomePage from '@/sections/HomePage'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <CTA />
      <Footer />
    </main>
  );
}
