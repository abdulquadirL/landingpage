import Head from 'next/head'
import style from '@/styles/page.module.css'
import Header from '@/components/Header'
//import Navbar from '@/components/Navbar'
import Company from '@/components/Company'
import Testimonial from '@/components/Testimonial'


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
    </div>
    
  )
}