import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.Header}>
     <h3 className={styles.logo}>Anuj</h3>
     <button className={styles.btn}>login</button>
    </div>
  )
}

export default Header
