import React from 'react'
import styles from './Header.module.css'
import { useSelector } from 'react-redux'
import { pointSelector } from '../../features/gameSlice'
const Header = () => {
    const score = useSelector(pointSelector)
  return (
    <main className={styles.container}>
        <article className={styles.PointContainer}>
            <p>Point:{score}</p>
        </article>
    </main>
  )
}

export default Header