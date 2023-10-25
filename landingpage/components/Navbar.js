import React from 'react'
//import { useState } from "react";
import Box from '@chakra-ui/next-js'
import { Button, Link } from '@chakra-ui/react'
//import Link from 'next/link';

const Navbar = () => {
 
  return (
    <Box  as="nav">
      <ul>
      <li >
          <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/docs'>DOCS</Link>
      </li>
      <li>
        <Link href='#enterprise'>Enterprise</Link>
      </li>
      <li>
        <Link href='#developers'>Developers</Link>
      </li>
      <li>
        <Link href='#roadmap'>Roadmap</Link>
      </li>
      <li>
        <Link href='#pricing'>Pricing</Link>
      </li>
      <li>
        <Link href='#company'>Company</Link>
      </li>
      <li>
        <Link href='/login'>Login</Link>
      </li>
      <Button/>
      </ul>
      
     
    </Box>
      )
}

export default Navbar

//const later = {show ? <favicon />  : <HamburgerIcon />}
  
  