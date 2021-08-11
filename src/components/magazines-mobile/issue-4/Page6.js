import React from 'react'
import styles from './page6.module.scss'

const Page6 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/4/images/0708_background2-mobile.png' className={styles.image1}/>
      <div className={styles.rect1}>
      </div>
      <div className={styles.text1}>
        By the time you read this, you will have most likely heard about how the emergence of the blockchain—the fundamental underlying technology behind cryptocurrency—has the explosive potential to change the way we conduct business globally.
        <br /><br />
        The arrival of Bitcoin and Ethereum have brought us one step closer to realizing a once-distant decentralised future. One that will bring about disruption across contracts, law, business, and so much more—in potentially biblical proportions.
        <br /><br />
        It’s no surprise why blockchain evangelists are all hopped up on the hopium about it. Anybody who has had even just a passing interest in cryptocurrency will be familiar with the song-and-dance about blockchain having the potential to excise the eternal intermediary pervading in all aspects of industry: banks, brokers, lawyers, insurance agents, and everyone in between. That’s not to mention the bloated, inefficient, and monolithic systems that they operate in. Why suffer the displeasure of having to deal with another glorified cost-creating middleman?
        <br /><br />
        Nevertheless, the era of disintermediation is in full swing. At no other point in time in history has it become possible for any individual to fully participate in economic and financial activities without the usual middlemen skimming off the top.
      </div>
    </div>
  )
}

export default Page6
