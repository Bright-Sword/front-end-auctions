import React from 'react';
import styles from './page115116.module.scss';
import Link from 'next/link';

const Page115116 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="./magazine/1/115_116/image1.png" className={styles.image1} />
       <img src="./magazine/1/115_116/image2.png" className={styles.image2} />
       <img src="./magazine/1/115_116/image3.png" className={styles.image3} />
       <Link href="https://www.instagram.com/cryptsie/"><a className={styles.text1}>
       Cryptsie Art
        </a>
       </Link>
       <p className={styles.text2}>Space Adventures</p>
       <Link href="http://instagram.com/di.universe"><a className={styles.text3}>
        Di.universe 
        </a>
       </Link>
       <p className={styles.text4}>RELAX</p>
    </div>
  );
};

export default Page115116;
