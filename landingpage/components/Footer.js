import React from 'react'
import { Button } from './Button'
import styles from '@/styles/page.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3>Build faster, with no limits</h3>
      <div className={styles.flex}>
        <Button/>
        <button className={styles.btn2}>Contact us</button>
      </div>
      follow us on 
    </div>
  )
}

export default Footer