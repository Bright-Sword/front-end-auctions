/* eslint-disable max-len */
import React from 'react';
import Document, { NextScript, Html, Main, Head } from 'next/document';

const scriptTxt = `
(function () {
  const { pathname } = window.location;
  const ipfsMatch = /.*\\/Qm\\w{44}\\//.exec(pathname); 
  const base = document.createElement('base') 
  base.href = ipfsMatch ? ipfsMatch[0] : '/';
  document.head.append(base); 
})();
`;

const gaScriptText = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y06VSWY6VY');
`;

class MyDocument extends Document {
  getPreloadFontsLinks() {
    const fontSizes = [400, 600, 700, 800, 900];
    return fontSizes.map((size) => (
      <link
        rel="preload"
        key={size}
        as="font"
        href={`/fonts/inter-${size}.woff2`}
        type="font/woff2"
        crossOrigin=""
      />
    ));
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script src="/arkane-network/web3-arkane-provider.js"></script>
          <script dangerouslySetInnerHTML={{ __html: scriptTxt }} />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y06VSWY6VY"></script>
          <script dangerouslySetInnerHTML={{ __html: gaScriptText }} />
          {/* {this.getPreloadFontsLinks()} */}
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Rosarivo"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Bungee Inline"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=News Cycle"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Bellota Text"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lexend Giga"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Abel"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Beth Ellen"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Jockey One"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Jacques Francois"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Chivo"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Chilanka"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Monoton"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Antic Didone"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Anton"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Antonio"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Homenaje"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Cinzel"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Carme"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Corben"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Sniglet"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poor+Story"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quando"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Purple+Purse"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Qwigley"></link>
           <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Flamenco"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poller+One"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Galada"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fjalla+One"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kavoon"></link>
           <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IM+Fell+French+Canon"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Electrolize"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Encode+Sans"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Mono"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Marck+Script"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Salsa"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Goblin+One"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Istok+Web"></link>
           <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Khand"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jaldi"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Forum"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Englebert"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Mono"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Reem+Kufi"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Erica+One"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jolly+Lodger"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Mansalva"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Arvo"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Krub"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=B612+Mono"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Averia+Libre"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bayon"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Ramabhadra"></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Bungee Inline"
          ></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=News Cycle"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bellota Text"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lexend Giga"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abel"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Beth Ellen"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baumans"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni+Moda"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Audiowide"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Modak"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Akronim"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mate"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Prompt:wght@600"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Do+Hyeon"></link>  
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lalezar"></link>  
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gentium+Basic:wght@700"></link>  
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Griffy"></link>  
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Just+Another+Hand"></link>  
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Indie+Flower"></link>  
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Londrina+Shadow"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Offside"></link>  
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Eczar"></link>  
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Song+Myung"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Milonga"></link>  
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Didact+Gothic"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Knewave"></link>  
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Patrick+Hand+SC"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pathway+Gothic+One"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@600"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800"></link>  
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Play:wght@700"></link>  
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Odibee+Sans"></link>  
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@700"></link>  
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mali:wght@700"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gravitas+One"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@700"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Suez+One"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Snippet"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@700"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Mono"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Faster+One"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ewert"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Expletus+Sans"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Delius+Unicase:wght@700"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Coda"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mukta+Malar:wght@400;700"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pangolin"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@700"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Imprima"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IM+Fell+French+Canon:ital@1"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plaster"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Peralta"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rye"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Shojumaru"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Smythe"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Domine:wght@700"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mouse+Memoirs"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Signika"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cantora+One"></link> 
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@700"></link> 
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Jacques Francois"
          ></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Chivo"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Chilanka"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Monoton"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Antic Didone"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Anton"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Antonio"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Homenaje"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Carme"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Corben"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sniglet"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Convergence"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Asap"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Chakra+Petch"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Miltonian"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Pacifico"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lacquer"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Expanded"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Expanded:wght@700"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barriecito"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baskervville"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Aubrey"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Atma"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@700"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Metrophobic"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Long+Cang"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Port+Lligat+Slab"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@900"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=din+condensed"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Esteban"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Faustina"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Arimo"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Italianno"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Croissant+One"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IM+Fell+French+Canon+SC"></link>
          <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inria+Sans:wght@700"></link>

          {/* ipfs next.js fix */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            
            @font-face {
              font-family: "Internal Rainbows";
              src: url("./fonts/Internal Rainbows.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Gilroy";
              src: url("./fonts/Gilroy-Light.otf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: "Gilroy";
              src: url("./fonts/Gilroy-ExtraBold.otf");
              font-weight: 700;
            }
            
            @font-face {
              font-family: "Gilroy";
              src: url("./fonts/Gilroy-ExtraBold.otf");
              font-weight: 900;
            }
            @font-face {
              font-family: "Armata-Regular";
              src: url("./fonts/Armata-Regular.ttf");
              font-weight: 400;
            }
            @font-face {
              font-family: "Animosa";
              src: url("./fonts/Animosa-Regular.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "A DAY WITHOUT SUN";
              src: url("./fonts/A DAY WITHOUT SUN.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Nella Sue Demo';
              src: url("./fonts/NellaSueDEMO.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Sweetly Broken';
              src: url("./fonts/Sweetly Broken.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Sweetly Broken';
              src: url("./fonts/Sweetly Broken SemiBold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'Sweetly Broken';
              src: url("./fonts/Sweetly Broken Bold.ttf");
              font-weight: 900;
            }

            @font-face {
              font-family: 'Artisual Deco DEMO';
              src: url("./fonts/ArtisualDeco-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Mad Galaxy Demo';
              src: url("./fonts/MadGalaxyDemoRegular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Archie Websters';
              src: url("./fonts/Archie Websters.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Rugrats';
              src: url("./fonts/RugratS.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Rugsnatcher DEMO';
              src: url("./fonts/rugsnatcher DEMO.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Beth Ellen';
              src: url("./fonts/Beth-Ellen-2.0.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Jacques Francois';
              src: url("./fonts/JacquesFrancois-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Lexend Tera';
              src: url("./fonts/LexendTera-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Lexend Zetta';
              src: url("./fonts/LexendZetta-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Medula One';
              src: url("./fonts/MedulaOne-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Aldrich';
              src: url("./fonts/Aldrich-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Cool Chaos';
              src: url("./fonts/Cool Chaos.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Heaven Wanders DEMO';
              src: url("./fonts/Heaven_Wanders_DEMO.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Comics Tricks';
              src: url("./fonts/Comics Tricks.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Habbo';
              src: url("./fonts/HabboFont.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Ayuthaya';
              src: url("./fonts/ayuthaya-webfont.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Arima Madurai';
              src: url("./fonts/ArimaMadurai-Bold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'Mada';
              src: url("./fonts/Mada-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Mervale Script';
              src: url("./fonts/MervaleScript-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Metal Lord';
              src: url("./fonts/Metal-Lord.ttf");
            }

            @font-face {
              font-family: 'PLAYPULL';
              src: url("./fonts/PLAYPULL_Demo.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Acme';
              src: url("./fonts/Acme-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Rochester';
              src: url("./fonts/Rochester-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Nunito Sans';
              src: url("./fonts/NunitoSans-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Blacker Display';
              font-weight: 400;
              src: url("./fonts/Blacker-Display-Regular-trial.ttf");
            }

            @font-face {
              font-family: 'Blacker Display';
              font-weight: 700;
              src: url("./fonts/Blacker-Display-Bold-trial.ttf");
            }
            
            @font-face {
              font-family: 'Blacker Display';
              font-weight: 900;
              src: url("./fonts/Blacker-Display-Heavy-trial.ttf");
            }
          
            @font-face {
              font-family: 'Arapey';
              src: url("./fonts/Arapey-Regular.ttf");
            }
          
            @font-face {
              font-family: 'EB Garamond';
              src: url("./fonts/EBGaramond-VariableFont_wght.ttf");
            }
          
            @font-face {
              font-family: 'Julietta Messie Demo';
              src: url("./fonts/FontsFree-Net-Julietta-Messie-Demo.ttf");
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'Asdonuts';
              src: url("./fonts/Asdonuts.ttf");
            }

            @font-face {
              font-family: 'Ode to Idle Gaming';
              src: url("./fonts/Ode to Idle Gaming.otf");
            }
          
            @font-face {
              font-family: 'Olivia & Kevin';
              src: url("./fonts/Olivia & Kevin.ttf");
            }
          
            @font-face {
              font-family: 'Knife Princess';
              src: url("./fonts/Knife Princess.ttf");
            }
          
            @font-face {
              font-family: 'Sen';
              src: url("./fonts/Sen-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Digital Dare';
              src: url("./fonts/Digital Dare.ttf");
            }
          
            @font-face {
              font-family: 'Didot';
              src: url("./fonts/GFSDidot-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Dhurjati';
              src: url("./fonts/Dhurjati-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Bahiana';
              src: url("./fonts/Bahiana-Regular.ttf");
            }
            
            @font-face {
              font-family: 'DM Mono';
              src: url("./fonts/DMMono-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Masterblast';
              src: url("./fonts/Masterblast.otf");
            }
            
            @font-face {
              font-family: 'Carter One';
              src: url("./fonts/CarterOne-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Baloo Tamma 2';
              src: url("./fonts/BalooTamma2-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Covered By Your Grace';
              src: url("./fonts/CoveredByYourGrace-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Boldfinger';
              src: url("./fonts/Boldfinger.ttf");
            }
          
            @font-face {
              font-family: 'Crafty Girls';
              src: url("./fonts/CraftyGirls-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Cinzel Decorative';
              font-weight: 400;
              src: url("./fonts/CinzelDecorative-Regular.ttf");
            }

            @font-face {
              font-family: 'Cinzel Decorative';
              font-weight: 900;
              src: url("./fonts/CinzelDecorative-Black.ttf");
            }
            
            @font-face {
              font-family: 'Trocchi';
              src: url("./fonts/Trocchi-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Fresca';
              src: url("./fonts/Fresca-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Empirez';
              src: url("./fonts/Empirez.ttf");
            }
          
            @font-face {
              font-family: 'Mouse Deco';
              src: url("./fonts/Mouse_Deco.ttf");
            }
          
            @font-face {
              font-family: 'Neucha';
              src: url("./fonts/Neucha-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Neon Nanoborg';
              src: url("./fonts/Neon Nanoborg.otf");
            }
            
            @font-face {
              font-family: 'Rose Cake-Personal Use';
              src: url("./fonts/Rose Cake - Personal Use.woff");
            }
            
            @font-face {
              font-family: 'Courier Prime';
              src: url("./fonts/CourierPrime-Regular.ttf");
            }

            @font-face {
              font-family: 'Minecrafter';
              src: url("./fonts/Minecrafter.Reg.ttf");
            }
            
            @font-face {
              font-family: 'ZCOOL KuaiLe';
              src: url("./fonts/ZCOOLKuaiLe-Regular.ttf");
            }
              
            @font-face {
              font-family: 'Finger Paint';
              src: url("./fonts/FingerPaint-Regular.ttf");
            }
               
            @font-face {
              font-family: 'Finger Paint';
              src: url("./fonts/FingerPaint-Regular.ttf");
            }
                
            @font-face {
              font-family: 'Biryani';
              src: url("./fonts/Biryani-Regular.ttf");
            }

            @font-face {
              font-family: 'Capriola';
              src: url("./fonts/Capriola-Regular.ttf");
            }

            @font-face {
              font-family: 'Barlow';
              font-weight: 400;
              src: url("./fonts/Barlow-Regular.ttf");
            }

            @font-face {
              font-family: 'Barlow';
              font-weight: 700;
              src: url("./fonts/Barlow-Bold.ttf");
            }
            
            @font-face {
              font-family: 'Barlow';
              font-weight: 900;
              src: url("./fonts/Barlow-Black.ttf");
            }

            @font-face {
              font-family: 'FresHot_DEMO';
              src: url("./fonts/FresHot_DEMO.ttf");
            }

            @font-face {
              font-family: 'Pilat Extended';
              src: url("./fonts/PilatExtended-Black.ttf");
            }

            @font-face {
              font-family: 'Armageda Wide';
              src: url("./fonts/Armageda Wide.ttf");
            }

            @font-face {
              font-family: 'Arial Black';
              src: url("./fonts/ariblk.ttf");
            }

            @font-face {
              font-family: 'Jura';
              src: url("./fonts/Jura-VariableFont_wght.ttf");
            }

            @font-face {
              font-family: 'Parabolic';
              src: url("./fonts/Parabolic.ttf");
            }

            @font-face {
              font-family: 'Days One';
              src: url("./fonts/DaysOne-Regular.ttf");
            }

            @font-face {
              font-family: 'Basic';
              src: url("./fonts/Basic-Regular.ttf");
            }

            @font-face {
              font-family: 'League Gothic';
              src: url("./fonts/LeagueGothic-Regular.otf");
            }

            @font-face {
              font-family: 'ThickDeco';
              src: url("./fonts/ThickDeco.ttf");
            }

            @font-face {
              font-family: 'NATS';
              src: url("./fonts/NATS-Regular.woff");
            }

            @font-face {
              font-family: 'Noto Sans Armenian';
              src: url("./fonts/NotoSans-Regular.ttf");
            }

            @font-face {
              font-family: 'QuickSales';
              src: url("./fonts/QuickSales.ttf");
            }

            @font-face {
              font-family: 'Kite One';
              src: url("./fonts/KiteOne-Regular.ttf");
            }

            @font-face {
              font-family: 'Karla';
              src: url("./fonts/Karla-VariableFont_wght.ttf");
            }

            @font-face {
              font-family: 'Fasthand';
              src: url("./fonts/Fasthand-Regular.ttf");
              font-family: 'Rockabye';
              src: url("./fonts/Rockabye-Regular.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Sanchez';
              src: url("./fonts/Sanchez-Regular.ttf");
              font-style: normal;
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'Sanchez';
              font-style: italic;
              src: url("./fonts/Sanchez-Italic.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Rosario';
              src: url("./fonts/Rosario-Regular.ttf");
              font-style: normal;
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'Rosario';
              font-style: italic;
              src: url("./fonts/Rosario-Italic.ttf");
              font-weight: 400;
            }
           
            @font-face {
              font-family: 'B612';
              src: url("./fonts/B612-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Miama';
              src: url("./fonts/Miama.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'THIS FONT IS EMPTY1';
              src: url("./fonts/THIS FONT IS EMPTY1.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'DigitalRiver';
              src: url("./fonts/DigitalRiver.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Damion';
              src: url("./fonts/Damion-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Single Day';
              src: url("./fonts/SingleDay-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Joti One';
              src: url("./fonts/JotiOne-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Cherry Bomb';
              src: url("./fonts/CherryBomb-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'THE AMAZING SPIDER-MAN';
              src: url("./fonts/The Amazing Spider-Man.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Aclonica';
              src: url("./fonts/Aclonica-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Bahianita';
              src: url("./fonts/Bahianita-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Artypa';
              src: url("./fonts/Artypa-Regular.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'The ART';
              src: url("./fonts/THE ART.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Arthure';
              src: url("./fonts/Arthure.ttf");
            }

            @font-face {
              font-family: 'Baloo Paaji 2';
              src: url("./fonts/BalooPaaji2-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Baloo Paaji 2';
              src: url("./fonts/BalooPaaji2-Bold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'Pixel Berry 08/84 Ltd.Edition';
              src: url("./fonts/Pixel_Berry_08_84_Ltd.Edition.TTF");
            }

            @font-face {
              font-family: 'TS Block';
              src: url("./fonts/TS Block Bold.ttf");
            }

            @font-face {
              font-family: 'Montserrat';
              src: url("./fonts/Montserrat-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Krungthep';
              src: url("./fonts/Krungthep.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Moonrising';
              src: url("./fonts/Moonrising.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url("./fonts/Montserrat-Bold.ttf");
              font-weight: 700;
            }
            
            @font-face {
              font-family: 'Haarlem Deco DEMO';
              src: url("./fonts/Haarlem Deco DEMO.ttf");
            }

            @font-face {
              font-family: 'Delius';
              src: url("./fonts/Delius-Regular.ttf");
            }

            @font-face {
              font-family: 'Maker Van';
              src: url("./fonts/MakerVan-Regular.ttf");
            }

            @font-face {
              font-family: 'Reenie Beanie';
              src: url("./fonts/ReenieBeanie-Regular.ttf");
            }
            
            @font-face {
              font-family: 'Atures 900 PERSONAL USE ONLY';
              src: url("./fonts/Atures-900_PERSONAL_USE.ttf");
            }

            @font-face {
              font-family: 'Burst My Bubble';
              src: url("./fonts/BurstMyBubbleBold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'PÕRTO';
              src: url("./fonts/PORTO.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'Burst My Bubble';
              src: url("./fonts/BurstMyBubble.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Corben';
              src: url("./fonts/Corben-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Corben';
              src: url("./fonts/Corben-Bold.ttf");
              font-weight: 700;
            }
            
            @font-face {
              font-family: 'Carme';
              src: url("./fonts/Carme-Regular.ttf");
            }

            @font-face {
              font-family: 'CropFontXtra';
              src: url("./fonts/CropFontXtra.ttf");
            }
            
            @font-face {
              font-family: 'Neon Lights';
              src: url("./fonts/neon2.ttf");
            }
            
            @font-face {
              font-family: 'Cinzel';
              src: url("./fonts/Cinzel-Black.ttf");
              font-weight: 900;
            }

            @font-face {
              font-family: 'Decovar Alpha';
              src: url("./fonts/DecovarAlpha-VF.ttf");
            }

            @font-face {
              font-family: 'Galaxy Monkey';
              src: url("./fonts/galaxymonkey.ttf");
            }

            @font-face {
              font-family: 'XXII-ARMY';
              src: url("./fonts/XXIISTRAIGHT-ARMY.ttf");
            }

            @font-face {
              font-family: 'Fatcat';
              src: url("./fonts/FatCat.otf");
            }
   
            @font-face {
              font-family: 'DIN Alternate';
              src: url("./fonts/DINAlternate-Bold.woff");
            }
             
            @font-face {
              font-family: 'Think Thick';
              src: url("./fonts/Think Thick.ttf");
            }

            @font-face {
              font-family: 'Counter-Strike';
              src: url("./fonts/cs_regular.ttf");
            }

            @font-face {
              font-family: 'Homenaje';
              src: url("./fonts/Homenaje-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Antonio';
              src: url("./fonts/Antonio-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Antonio';
              src: url("./fonts/Antonio-Light.ttf");
              font-weight: 300;
            }
          
            @font-face {
              font-family: 'Anton';
              src: url("./fonts/Anton-Regular.ttf");
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'Antic Didone';
              src: url("./fonts/AnticDidone-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Chivo';
              src: url("./fonts/Chivo-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Neon Vortex';
              src: url("./fonts/Neon Vortex.ttf");
            }

            @font-face {
              font-family: 'Lexend Giga';
              src: url("./fonts/LexendGiga-Regular.ttf");
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'Bellota Text';
              src: url("./fonts/BellotaText-Bold.ttf");
              font-weight: 700;
            }
          
            @font-face {
              font-family: 'News Cycle';
              src: url("./fonts/NewsCycle-Bold.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Ceviche One";
              src: url("./fonts/CevicheOne-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Evil Highway";
              src: url("./fonts/Evil Highway.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "SNOWBREAK";
              src: url("./fonts/SNOWBREAK.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Fragmentcore";
              src: url("./fonts/Fragmentcore.woff");
            }

            @font-face {
              font-family: "39Smooth";
              src: url("./fonts/39smooth.ttf");
            }

            @font-face {
              font-family: "VTKS Estilosa";
              src: url("./fonts/VTKS Estilosa.ttf");
            }

            @font-face {
              font-family: "fairy wings";
              src: url("./fonts/fairy wings.ttf");
            }

            @font-face {
              font-family: "Anime Inept";
              src: url("./fonts/Anime Inept.otf");
            }

            @font-face {
              font-family: "Marker Felt";
              src: url("./fonts/Marker Felt.ttf");
            }

            @font-face {
              font-family: "Ander Hedge";
              src: url("./fonts/Ander Hedge.ttf");
            }

            @font-face {
              font-family: "DJB Emilys Garden";
              src: url("./fonts/DJB Emilys Garden.ttf");
            }

            @font-face {
              font-family: "Digitalino";
              src: url("./fonts/Digitalino-rev11.otf");
            }

            @font-face {
              font-family: "Exodus Demo";
              src: url("./fonts/ExodusDemo.otf");
            }

            @font-face {
              font-family: "Nimbus-Sans-D-OT";
              src: url("./fonts/Nimbus-Sans-D-OT.ttf");
            }

            @font-face {
              font-family: "ExodusDemo-Regular";
              src: url("./fonts/ExodusDemo-Regular.otf");
            }

            @font-face {
              font-family: "Muna";
              src: url("./fonts/Muna-Bold.ttf");
            }

            @font-face {
              font-family: "CF Punk Fashion PERSONAL";
              src: url("./fonts/CF Punk Fashion PERSONAL.ttf");
            }

            @font-face {
              font-family: "Chinese Dragon";
              src: url("./fonts/ChineseDragon.ttf");
            }

            @font-face {
              font-family: "Ligconsolata";
              src: url("./fonts/Ligconsolata.ttf");
            }
              
            @font-face {
              font-family: "KoHo";
              src: url("./fonts/KoHo-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Brawler";
              src: url("./fonts/Brawler-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Bungee Shade";
              src: url("./fonts/BungeeShade-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Silom";
              src: url("./fonts/SilomBol.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Zilla Slab";
              src: url("./fonts/ZillaSlab-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Libre Barcode 39 Extended Text";
              src: url("./fonts/LibreBarcode39ExtendedText-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Mansalva";
              src: url("./fonts/Mansalva-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Arvo";
              src: url("./fonts/Arvo-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Pacifico";
              src: url("./fonts/Pacifico-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Big Shoulders Text";
              src: url("./fonts/BigShouldersText-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Walter Turncoat";
              src: url("./fonts/WalterTurncoat-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Trochut";
              src: url("./fonts/Trochut-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Africa";
              src: url("./fonts/Africa.woff");
              font-weight: 400;
            }

            @font-face {
              font-family: "Grenze";
              src: url("./fonts/Grenze-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Bayon";
              src: url("./fonts/Bayon-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Hanuman";
              src: url("./fonts/Hanuman-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "MixGiants";
              src: url("./fonts/MixGiants.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Dispence";
              src: url("./fonts/Dispence.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Jungle";
              src: url("./fonts/Jungle DF.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "PAC LIBERTAS";
              src: url("./fonts/PAC LIBERTAS font.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Saphira DEMO";
              src: url("./fonts/Saphira DEMO.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Public Secret DEMO";
              src: url("./fonts/Public Secret DEMO.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Hello Avocado";
              src: url("./fonts/Hello Avocado.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Thunder Trooper";
              src: url("./fonts/thundertrooper.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Doctor Glitch";
              src: url("./fonts/Doctor Glitch.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Poller One";
              src: url("./fonts/PollerOne-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Post No Bills Colombo SemiBold";
              src: url("./fonts/PostNoBillsColombo-Regular.woff");
              font-weight: 400;
            }

            @font-face {
              font-family: "Post No Bills Colombo ExtraBold";
              src: url("./fonts/PostNoBillsColombo-ExtraBold.ttf");
              font-weight: 800;
            }

            @font-face {
              font-family: "Roboto";
              src: url("./fonts/Roboto-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Krub";
              src: url("./fonts/Krub-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Porter Sans Block";
              src: url("./fonts/PorterSansBlock-Regular.woff");
              font-weight: 400;
            }

            @font-face {
              font-family: "Pavanam";
              src: url("./fonts/Pavanam-Regular.ttf");
            }

            @font-face {
              font-family: "Sora";
              src: url("./fonts/Sora-Regular.ttf");
            }

            @font-face {
              font-family: 'Thicker Trial';
              src: url('./fonts/Thicker-Black-trial.ttf');
              font-weight: 900;
            }
            
            @font-face {
              font-family: 'Super Thin';
              src: url('./fonts/Super Thin.ttf');
              font-weight: 400;
            }

            @font-face {
              font-family: 'Bodoni 72 Oldstyle';
              src: url('./fonts/Bodoni 72 OS.ttc');
            }

            @font-face {
              font-family: 'BM HANNA_TTF';
              src: url('./fonts/BM-HANNA.ttf');
            }

            @font-face {
              font-family: 'Digital Numbers';
              font-style: normal;
              font-weight: normal;
              src: url('./fonts/DigitalNumbers-Regular.woff') format('woff');
              }
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
