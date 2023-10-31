

import { Box } from '@chakra-ui/react'
import Company from '@/components/Company'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Future from '@/components/Future'
import Header from '@/components/Header'
import How from '@/components/How'
import Pitch from '@/components/Pitch'
import { Security } from '@/components/Security'
import Testimonial from '@/components/Testimonials'
import { What } from '@/components/What'
import Navbar from '@/components/Navbar'
//import Navbar from '@/components/Navbar'




export default function Home( ) {
  return (
    <Box>
        <Navbar/>
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
    </Box>
       
      
  )
}