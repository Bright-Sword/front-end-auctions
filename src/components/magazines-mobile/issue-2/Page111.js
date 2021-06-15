import React from 'react'
import styles from './page111.module.scss'
import Link from 'next/link';

const Page111 = () => {
  return (
    <div className={styles.wrapper}>
      <video className={styles.image2} loop muted autoPlay>
        <source src="./magazine/2/images/119_120/video1.mp4" type="video/mp4" />
       </video>
    </div>
  )
}

export default Page111