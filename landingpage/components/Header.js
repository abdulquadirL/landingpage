import React from 'react'
import styles from '@/styles/page.module.css'
import { Button } from './Button'
import { Buttin } from './Buttin'
import Navbar from './Navbar'
const Header = () => {
  return (
   
    <div >
      <Navbar/>
      <div className={styles.container}>
      <h1 className={styles.main}>Generate Production-Ready Backend Services.</h1>
      <h3 className={styles.description}>Reliably . Securely . Consistently</h3>
      <p className={styles.description1}> Automatically generate backend services with the highest standards, consistency and scalability. Accelerate your development 20X. Never waste time on boilerplate and repetitive coding again. </p>
      <Button/>
      <Buttin/>
      </div>
    </div>
  )
}

export default Header