import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import styles from './HomePage.module.css';
const HomePage = () => {
    const[point,setPoint] = useState(0);
  useEffect(() => {
      setPoint(localStorage.getItem('point'))
  }, [])




  return (
      
    <main className={styles.Container}>
        <section className={styles.PointScreen}>
        <p>Total Point: {point ? point : 0}</p>
        <Link to={'/game'}className={styles.StartButton}>
        <div >Start</div>
        </Link>
        </section>
        
    </main>
   
    
  )
}

export default HomePage