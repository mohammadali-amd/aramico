import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomePage from '@/sections/HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <div className="flex min-h-screen flex-col items-center justify-between mt-80">
        <HomePage />
      </div> */}
      <HomePage />
      <Footer />
    </main>
  )
}
