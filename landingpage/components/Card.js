import React from 'react'
import styles from '@/styles/page.module.css'

const card = [
    {
        image: "next.svg",
        name: "Abdul Quadir",
        company: "Easentia",
        rating: 5,
        comment: "Amplication has not only saved us time but scarce resources "
    }, 
    {
        image: "vercel.svg",
        name: "Yasir",
        company: "Quanut",
        rating: 4,
        comment: "Get things done 10X faster with Amplication"
    }
]




export const Card = () => {
  return (
    <div className={styles.card}>
        <img src={card[0].image}/>
        <h3 className={styles.description}>{card[0].name}</h3>
        <h3 >{card[0].company}</h3>
        <h3 className={styles.description}>{card[0].rating}</h3>
        <h4 >{card[0].comment}</h4>
    </div>
  )
}
