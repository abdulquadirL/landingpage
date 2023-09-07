import Head from 'next/head'
//import '@/styles/globals.css'
import Header from '@/components/Header'
import styles from '@/styles/page.module.css'
import Company from '@/components/Company'
import Testimonial from '@/components/Testimonials'
import Pitch from '@/components/Pitch'
import How from '@/components/How'
import { What } from '@/components/What'
import Future from '@/components/Future'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import { Security } from '@/components/Security'


export default function Home() {
  return(
    
    <div className={styles.home}>
      <Head>
        <title>Amplication</title>
        <meta name='keywords' content='web development, programming'/>
      </Head>
      <Header/>
      <Company/>
      <How/>
      <Testimonial/>
      <Pitch/>
      <Security/>
      <What/>
      <Features/>
      <Future/>
      <Footer/>
      
    </div>
    
  )
}