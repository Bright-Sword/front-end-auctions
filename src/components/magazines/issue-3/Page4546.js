import React, { useRef, useState } from 'react';
import styles from './page4546.module.scss';
import Link from 'next/link';

const Page4546 = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)
  const [isPlaying3, setIsPlaying3] = useState(false)
  const playVideo1 = () => {
    if(isPlaying1) {
      ref1.current.muted = true;
      setIsPlaying1(false)
    } else {
      ref1.current.muted = false;
      setIsPlaying1(true)
    }
  }
  const playVideo2 = () => {
    if(isPlaying2) {
      ref2.current.muted = true;
      setIsPlaying2(false)
    } else {
      ref2.current.muted = false;
      setIsPlaying2(true)
    }
  }
  const playVideo3 = () => {
    if(isPlaying3) {
      ref3.current.muted = true;
      setIsPlaying3(false)
    } else {
      ref3.current.muted = false;
      setIsPlaying3(true)
    }
  }
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/45_46/image2.png" className={styles.image1}/>
      <img src="/magazine/3/images/45_46/image1.png" className={styles.image2}/>
      <p className={styles.text1}>INTERNATIONAL PLAYERS</p>
      <p className={styles.text2}>UKRAINE</p>
      <img src="/magazine/3/images/45_46/image6.png" className={styles.image6}/>
      <img src="/magazine/3/images/45_46/image3.png" className={styles.image3}/>
      <p className={styles.text3}>Anya Chilli</p>
      <img src="/magazine/3/images/45_46/image4.png" className={styles.image4}/>
      <p className={styles.text4}>Art in Virtual Reality</p>
      <p className={styles.text5}>Anna Chili is a visual artist/entrepreneur/art shaman/ muralist/3d VR digital artist who lives in the San Francisco Bay Area.  She is originally from Odessa, Ukraine. </p>
      <p className={styles.text6}>Anya is a VR Artist from Ukraine, that is now based out of San Francisco, US. </p>
      <p className={styles.text7}>As the Virtual Reality Industry grows so does the art world within it.</p>
      <div className={styles.image12}>
        <div className={styles.image13}>
          <video ref={ref2} className={styles.image14} muted autoPlay loop>
            <source src="./magazine/3/images/45_46/video2.mp4" type="video/mp4" />
          </video>
        </div>
        <button onClick={()=>{playVideo2()}}><img src={`./magazine/3/images/45_46/${isPlaying2 ? 'pause' : 'play'}.png`} className={styles.playbutton2}/></button>
      </div>
      <img src="/magazine/3/images/45_46/image5.png" className={styles.image5}/>
      <div className={styles.image7}>
        <div className={styles.image15}>
          <video ref={ref2} className={styles.image16} muted autoPlay loop>
            <source src="./magazine/3/images/45_46/video3.mp4" type="video/mp4" />
          </video>
        </div>
        <button onClick={()=>{playVideo2()}}><img src={`./magazine/3/images/45_46/${isPlaying2 ? 'pause' : 'play'}.png`} className={styles.playbutton2}/></button>
      </div>
      <img src="/magazine/3/images/45_46/image8.png" className={styles.image8}/>
      <div className={styles.image9}>
        <video className={styles.image10} muted loop autoPlay ref={ref1}>
          <source src="./magazine/3/images/45_46/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.image9}>
        <div className={styles.image10}>
          <video ref={ref1} className={styles.image11} muted autoPlay loop>
            <source src="./magazine/3/images/45_46/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <button onClick={()=>{playVideo1()}}><img src={`./magazine/3/images/45_46/${isPlaying1 ? 'pause' : 'play'}.png`} className={styles.playbutton1}/></button>
      </div>
      
    </div>
  );
};

export default Page4546;
