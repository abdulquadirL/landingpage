import React from 'react'
import styles from '@/styles/page.module.css'

const Company = () => {
  return (
    <div className={styles.company}>
        <h2 >Empowering Developers from leading companies</h2>
        <div className={styles.grid}>
            <div><img src='https://' alt='Hublot'/></div>
            <div><img src='https://' alt='Puma'/></div>
            <div><img src='https://' alt='Yahoo'/></div>
            <div><img src='https://' alt='Huawei'/></div>
            <div><img src='https://' alt='Barclays'/></div>
            <div><img src='https://' alt='Nike'/></div>
        </div>
    </div>
  )
}

export default Company