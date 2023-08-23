import React from 'react'
import styles from '@/styles/page.module.css'
import { Card } from './Card'

const Testimonial = () => {
  return (
    <div >
        <div className={styles.company}>
            <h2>What Users are saying about Amplication</h2>
        </div                  >
        <div className={styles.grid}>
            <div><Card/></div>
            <div><Card/></div>
        </div>
        <div className={styles.button}><button className={styles.btn2}>Show all testimonials</button></div>
    </div>
    
  )
}

export default Testimonial