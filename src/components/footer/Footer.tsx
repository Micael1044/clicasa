import React from "react";
import IconBtn from "../elements/iconBtn/IconBtn";
import Image from "next/image";
import facebookImg from "../../../public/assets/icons/social/facebook.png";
import youtubeImg from "../../../public/assets/icons/social/youtube.png";
import linkedinImg from "../../../public/assets/icons/social/linkedin.png";
import twitterImg from "../../../public/assets/icons/social/twitter.png";
import phoneImg from "../../../public/assets/icons/social/phone.png";
import mailImg from "../../../public/assets/icons/social/mail.png";

import logoImg from "../../../public/assets/logo-principal.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* LAYOUT SMALL DEVICES */}
      <div className={styles.tinyLayout}>
        <div className={styles.logoContainer}>
          <Image src={logoImg} alt="CliCasa logo" width={150} />
          <ul className={styles.centeredContainer}>
            <li>Mapa web</li>
            <li>Contacto</li>
            <li>Aviso legal</li>
          </ul>
        </div>
        <hr></hr>
        <div className={styles.centeredContainer}>
          <div>
            <IconBtn imgSrc={phoneImg} />
            <p>911 123 456</p>
          </div>
          <div>
            <IconBtn imgSrc={mailImg} />
            <p>info@clicasa.com</p>
          </div>
        </div>
        <hr></hr>
        <div>
          <p className={styles.copyright}>
            © 2017 CLICPISO. TODOS LOS DERECHOS RESERVADOS
          </p>
        </div>
        <hr></hr>
        <div className={styles.socialContainer}>
          <IconBtn imgSrc={facebookImg} />
          <IconBtn imgSrc={twitterImg} />
          <IconBtn imgSrc={linkedinImg} />
          <IconBtn imgSrc={youtubeImg} />
        </div>
      </div>
      {/* LAYOUT BIG DEVICES */}
      <div className={styles.bigLayout}>
        <div className={styles.logoContainer}>
          <Image src={logoImg} alt="CliCasa logo" width={150} />
          <div className={styles.centeredContainer}>
            <div>
              <IconBtn imgSrc={phoneImg} />
              <p>911 123 456</p>
            </div>
            <div>
              <IconBtn imgSrc={mailImg} />
              <p>info@clicasa.com</p>
            </div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <p className={styles.copyright}>
            © 2017 CLICPISO. TODOS LOS DERECHOS RESERVADOS
          </p>
          <ul className={styles.centeredContainer}>
            <li>Mapa web</li>
            <li>Contacto</li>
            <li>Aviso legal</li>
          </ul>
          <div className={styles.socialContainer}>
            <IconBtn imgSrc={facebookImg} />
            <IconBtn imgSrc={twitterImg} />
            <IconBtn imgSrc={linkedinImg} />
            <IconBtn imgSrc={youtubeImg} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
