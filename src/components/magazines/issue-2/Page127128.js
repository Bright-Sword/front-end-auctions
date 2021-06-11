import React from 'react';
import styles from './page127128.module.scss';
import Link from 'next/link';

const Page127128 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="./magazine/1/127_128/image1.png" className={styles.image1} />
       <img src="./magazine/1/127_128/image2.png" className={styles.image2} />
       <img src="./magazine/1/127_128/image3.png" className={styles.image3} />
       <img src="./magazine/1/127_128/image4.png" className={styles.image3} />
       <img src="./magazine/1/127_128/image5.png" className={styles.image3} />
       <img src="./magazine/1/127_128/image6.png" className={styles.image4} />
       <Link href="https://www.instagram.com/sasa3dimensions/"><a className={styles.text1}>
       SASA3DIMENSIONS
        </a>
       </Link>
       <p className={styles.text2}>SUBSTANCE</p>
       <p className={styles.text3}>An organic sculpture that represents a change of form: all the particles break down and reassemble to form a new element— a change occuring constantly on our own planet.</p>
       <p className={styles.text4}>Take Charge Boot</p>
       <Link href="https://www.instagram.com/vicke_jones/"><a className={styles.text5}>
       Vicky Gonzalez Boerr
        </a>
       </Link>
    </div>
  );
};

export default Page127128;
