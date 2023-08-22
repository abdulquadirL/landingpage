import Head from 'next/head'
import style from '@/styles/page.module.css'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'


export default function Home() {
  return(
    <>
    <Navbar/>
    <div className={style.home}>
      <Head>
        <title>Amplication</title>
        <meta name='keywords' content='web development, programming'/>
      </Head>
      <Header/>
      
      
    </div>
    </>
  )
}