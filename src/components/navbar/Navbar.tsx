import React from "react";
import IconBtn from "../elements/iconBtn/IconBtn";
import Image from "next/image";
import bluePhoneImg from "../../../public/assets/icons/social/phone.png";
import whatsappImg from "../../../public/assets/icons/social/whatsapp.png";
import mailImg from "../../../public/assets/icons/social/mail.png";
import groupImg from "../../../public/assets/icons/group.png";
import logoImg from "../../../public/assets/logo-principal.png";
import downImg from "../../../public/assets/icons/down.png";
import styles from "./Navbar.module.css";

const handleClick = (text: string) => () => alert(text);

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftContainer}>
        <IconBtn imgSrc={groupImg} onClick={handleClick("group")}></IconBtn>
        <Image src={logoImg} alt="CliCasa logo"></Image>
      </div>
      <ul className={styles.centeredContainer}>
        <li>Vender</li>
        <li>Comprar</li>
        <li>#YOELIJOCLICPISO</li>
        <li>
          ¿POR QUÉ CLICPISO?
          <Image src={downImg} alt="Blue arrow down" />
        </li>
      </ul>
      <div className={styles.rightContainer}>
        <IconBtn
          imgSrc={bluePhoneImg}
          onClick={handleClick("blue phone")}
        ></IconBtn>
        <p>910 123 456</p>
        <IconBtn
          imgSrc={whatsappImg}
          onClick={handleClick("whatsapp")}
        ></IconBtn>
        <IconBtn imgSrc={mailImg} onClick={handleClick("mail")}></IconBtn>
      </div>
    </nav>
  );
};

export default Navbar;
