import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/components/banner'
import CountSection from '@/components/countsection'
import Navbar from '@/components/Navbar'
import EquepmentsSection from '@/components/equepmentsSection'
import Experties from '@/components/experties'
import Footer from '@/components/footer'
import RecentWork from '@/components/recentWork'
import UpperFooter from '@/components/upperfooter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` ${inter.className}`}
    >
      <Navbar/>
    <Banner></Banner>
    <CountSection/>
    <EquepmentsSection/>
    <Experties></Experties>
    <RecentWork/>
    <UpperFooter/>
    <Footer/>
    </main>
  )
}
