import React from 'react';
import HeroBar from '@components/hero-bar';
import ImageCard from '@components/image-card';
import styles from './styles.module.scss';
import InfoCard from '@components/info-card';
import NewButton from '@components/buttons/newbutton';
import Container from '@components/container';

const Product = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.mainSection}>
        <video autoPlay loop muted className={styles.video}>
          <source src="./images/metaverse/all_skins.mp4" type="video/mp4" />
        </video>
        <Container>
          <div className={styles.body}>
            <div className={styles.mainBody}>
              <ImageCard />
              <div className={styles.infoWrapper}>
                <InfoCard libon="./images/metaverse/Gamepad 1.png">
                  <div className={styles.infoCard}>
                    <div className={styles.skinName}>Skin Name: </div>
                    <div className={styles.designer}>
                      <div className={styles.label}>Designer: </div>
                      <div className={styles.info}>
                        <img src="./images/alex photo.jpeg" />
                        <div className={styles.name}> Name </div>
                      </div>
                    </div>
                    <div className={styles.developer}>
                      <div className={styles.label}> Developer/Modder: </div>
                      <div className={styles.info}>
                        <img src="./images/alex photo.jpeg" />
                        <div className={styles.name}> Name </div>
                      </div>
                    </div>
                  </div>
                </InfoCard>
                <div className={styles.actions}>
                  <img className={styles.gamePad} src="./images/metaverse/gpad.png" />
                  <div className={styles.buttonWrapper}>
                    <NewButton text="wear in game" />
                    <a href="/"> play in espa esports </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <HeroBar />
      <section className={styles.designerSection}>
        <video autoPlay loop muted className={styles.video}>
          <source src="./images/metaverse/designer-bg.mp4" type="video/mp4" />
        </video>
        <Container>
          <div className={styles.designerBody}>
            <div className={styles.title}> designer </div>
            <div className={styles.data}>
              <ImageCard />
              <div className={styles.infoWrapper}>
                <InfoCard libon="./images/metaverse/party_glasses.png">
                  <div className={styles.name}> designer name </div>
                  <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue ac
                    elit id sodales. Suspendisse convallis pretium arcu, vel porta ipsum facilisis
                    vitae. In eu ex erat. Nam convallis dolor sed tortor condimentum, sit amet
                    finibus nunc lacinia.
                  </div>
                </InfoCard>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <HeroBar />

      <section className={styles.developerSection}>
        <video autoPlay loop muted className={styles.video}>
          <source src="./images/metaverse/developer-bg.mp4" type="video/mp4" />
        </video>
        <Container>
          <div className={styles.developerBody}>
            <div className={styles.title}> developer </div>
            <div className={styles.data}>
              <ImageCard />
              <div className={styles.infoWrapper}>
                <InfoCard libon="./images/metaverse/party_glasses.png">
                  <div className={styles.name}> developer name </div>
                  <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue ac
                    elit id sodales. Suspendisse convallis pretium arcu, vel porta ipsum facilisis
                    vitae. In eu ex erat. Nam convallis dolor sed tortor condimentum, sit amet
                    finibus nunc lacinia.
                  </div>
                </InfoCard>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <HeroBar />
    </div>
  );
};

export default Product;
