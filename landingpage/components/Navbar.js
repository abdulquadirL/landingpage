import React from 'react'
import { useEffect, useState } from "react";
import styles from '@/styles/page.module.css'
import { Button } from './Button';

const Navbar = () => {

  
  return (
    <div className={styles.navStyle}>
     <ul>
      <a href='#'><li>DOCS</li></a>
      <a href='#'><li>Enterprise</li></a>
      <a href='#'><li>Developers</li></a>
      <a href='#'><li>Roadmap</li></a>
      <a href='#'><li>Pricing</li></a>
      <a href='#'><li>Company</li></a>
      <a href='#'><li>Login</li></a>
      <Button/>
     </ul>
    </div>
      )
}

export default Navbar

  
  