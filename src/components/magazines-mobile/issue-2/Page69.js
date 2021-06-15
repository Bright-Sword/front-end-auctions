import React from 'react'
import styles from './page69.module.scss'
import Link from 'next/link';

const Page69 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/73_74/image3.png" className={styles.image3} />
      <img src="./magazine/2/images/73_74/image2.png" className={styles.image2} />
      <img src="./magazine/2/images/73_74/image4.png" className={styles.image4} />
      <Link href="https://www.instagram.com/rozahviy/"><a>
      <p className={styles.text3}>Rozahviy</p>
      </a>
      </Link>
      <p className={styles.text4}>Rozahviy is a digital fashion brand, created by a Persian 3D fashion designer Melika Farshad. The collections are inspired by Avangard, Gothic, and Sport styles in a Casual way that can be used in daily life. The main idea behind this brand is the well-being and protection of our nature. Digital fashion doesn't have any limits, and with it, you can make your own boldest sparkling fashion choices.</p>
    </div>
  )
}

export default Page69