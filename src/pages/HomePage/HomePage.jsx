import React from 'react'
import { Link } from 'react-router-dom';

import styles from './HomePage.module.css';
const HomePage = () => {
  return (
      
    <main className={styles.Container}>
        <section className={styles.PointScreen}>
        <p>Total Point: 100</p>
        <Link to={'/game'}className={styles.StartButton}>
        <div >Start</div>
        </Link>
        </section>
        
    </main>
   
    
  )
}

export default HomePage