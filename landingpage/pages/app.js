
//import Image from 'next/image'
import React from 'react'
import Navbar from '@/components/Navbar'



export default function App({Component, pageProps}) {
  return (
    <React.Fragment>
      <Component{...pageProps} />
      <Navbar/>
    </React.Fragment>
  )
}
