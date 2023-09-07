import React from 'react'
import styles from '@/styles/page.module.css'

export const What = () => {
  return (
    <div className={styles.mainwhat}>
        <h4>What do you get from Amplication ?</h4>
        <div className={styles.what}>
            <div className={styles.headingsm}>
                <img src='https://amplication.com/_next/static/media/feature-icon-1.1e82ce1b.svg' alt=''/>
                <h5>Production Ready APIs</h5>
                <p >Full featured GraphQL and REST APIs</p>
            </div>
            <div className={styles.headingsm}>
                
                <img src='https://amplication.com/_next/static/media/feature-icon-2.b06adf33.svg' alt=''/>
                <h5>Data Model</h5>
                <p >Simple definition of entities & database schema</p>
            </div>
            <div className={styles.headingsm}>
                <img src='https://amplication.com/_next/static/media/feature-icon-3.299d8e9a.svg' alt=''/>
                <h5>Role-based Acces Control</h5>
                <p >Automatically generated identity & permision models</p>
            </div>
            <div className={styles.headingsm}>
                <img src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <h5>Microservices Support</h5>
                <p >Any architecture, synchronous or asynchronous communication</p>
            </div>
            <div className={styles.headingsm}>
                <img src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <h5>Continous Git Async</h5>
                <p >Automated sync with private or public GitHub repos</p>
            </div>
            <div className={styles.headingsm}>
                <img src='https://amplication.com/_next/static/media/feature-icon-1.1e82ce1b.svg' alt=''/>
                <h5>Typescript Node.js source code</h5>
                <p >Automatically generated human-readable and human-editable Node.js code</p>
            </div>
            <div className={styles.headingsm}>
                <img src='https://amplication.com/_next/static/media/feature-icon-2.b06adf33.svg' alt=''/>
                <h5>Plugin system</h5>
                <p>Use community-built plugins or create your own</p>
            </div>
            <div className={styles.headingsm}>
                <img src='https://amplication.com/_next/static/media/feature-icon-3.299d8e9a.svg' alt=''/>
                <h5>Monorepo or polyrepo</h5>
                <p>use Amplication with a monorepo, polyrepo, or both</p>   
            </div>
            <div className={styles.headingsm}>
                <img src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <h5 >Custom code</h5>
                <p>Easy customization & modification of generated code</p>
            </div>    
            <div className={styles.headingsm}>
                <img src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <h5 >Ready to deploy app</h5>
                <p>Generate Docker container or use plugins to connect to CI/CD tools & cloud providers</p>
            </div>   
            <div className={styles.headingsm}>
                <img src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <h5 >Admin UI</h5>
                <p>Automatically generated React Admin UI to create & edit your data models</p>
            
            </div>  
            <div className={styles.headingsm}>
                <img src='https://amplication.com/_next/static/media/feature-icon-4.6e77bda4.svg' alt=''/>
                <h5 >Amplication console & CLI</h5>
                <p>Fast app generation using Amplication console or Command Line Interface (CLI)</p>
            </div>   
        </div>
    </div>
  )
}
