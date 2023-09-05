import React from 'react'
import styles from '@/styles/page.module.css'

const Company = () => {
  return (
    <div className={styles.company}>
        <h2 >Empowering Developers from leading companies</h2>
        <div className={styles.grid}>
            <div><img src='https://amplication.com/_next/static/media/logo-2.a9ec4556.svg' alt='inl'/></div>
            <div><img src='https://amplication.com/_next/static/media/logo-1.4ab30fc7.svg' alt='Yahoo'/></div>
            <div><img src='https://amplication.com/_next/static/media/logo-3.5437261c.svg' alt='Huawei'/></div>
            <div><img src='https://amplication.com/_next/static/media/logo-4.52ae660a.svg' alt='Barclays'/></div>
            <div><img src='https://amplication.com/_next/static/media/logo-5.aeb7e633.svg' alt='Nike'/></div>
            <div><img src="https://amplication.com/_next/static/media/logo-6.bd5a0967.svg" alt=''/></div>
        </div>
    </div>
  )
}

export default Company