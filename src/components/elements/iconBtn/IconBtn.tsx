import React from 'react'
import Image, { StaticImageData } from 'next/image';
import styles from './IconBtn.module.css';

interface IconBtnProps {
    imgSrc: string | StaticImageData,
    onClick?: () => void;
}

const IconBtn = ({imgSrc, onClick}: IconBtnProps) => {
  return (
    <button onClick={onClick} className={styles.btn}>
        <Image src={imgSrc} alt={'Icon'}/>
    </button>
  )
}

export default IconBtn