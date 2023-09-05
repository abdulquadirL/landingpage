import Head from 'next/head'
import style from '@/styles/page.module.css'
import Header from '@/components/Header'
//import Navbar from '@/components/Navbar'
import Company from '@/components/Company'
import Testimonial from '@/components/Testimonials'
import Pitch from '@/components/Pitch'
import How from '@/components/How'
import { What } from '@/components/What'
import Future from '@/components/Future'
import Features from '@/components/Features'
import Footer from '@/components/Footer'


export default function Home() {
  return(
    
    <div className={style.home}>
      <Head>
        <title>Amplication</title>
        <meta name='keywords' content='web development, programming'/>
      </Head>
      <Header/>
      <Company/>
      <Testimonial/>
      <Pitch/>
      <How/>
      <What/>
      <Features/>
      <Future/>
      <Footer/>
      
    </div>
    
  )
}