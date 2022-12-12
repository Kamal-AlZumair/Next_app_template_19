import Head from 'next/head'
import Adoption from '../components/Adoption'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Pets from '../components/Pets'
import Services from '../components/Services'


export default function Home() {
  return (
    <div className=' max-w-[1440px] mx-auto overflow-hidden'>
      <Head>
        <title>Next App Pet-First</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Pets/>
      <Services/>
      <Adoption/>
      <Newsletter/>
      <Footer/>
    </div> 
  )
}
