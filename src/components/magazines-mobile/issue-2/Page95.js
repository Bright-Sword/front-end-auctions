import React from 'react'
import styles from './page95.module.scss'
import Link from 'next/link';

const Page95 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="./magazine/2/images/103_104/image1.png" className={styles.image1} />
       <Link href="www.instagram.com/pr.esc/"><a className={styles.text1}>
        Jessica Schott
        </a>
       </Link>
    </div>
  )
}

export default Page95