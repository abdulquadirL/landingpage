import React from 'react'
import { useState } from "react";
import styles from '@/styles/page.module.css'
import { Button } from './Button';
import Link from 'next/link';

const Navbar = () => {

  const [ show, setShow ] = useState(false)
  const handleToggle = () => {
    setShow(!show);
  }  
  return (
    <div className={styles.navStyle} onClick={handleToggle}>
      <Link href='#'>DOCS</Link>
      <Link href='#'>Enterprise</Link>
      <Link href='#'>Developers</Link>
      <Link href='#'>Roadmap</Link>
      <Link href='#'>Pricing</Link>
      <Link href='#'>Company</Link>
      <Link href='#'>Login</Link>
      <Button/>
      
    </div>
      )
}

export default Navbar

//const later = {show ? <favicon />  : <HamburgerIcon />}
  
  