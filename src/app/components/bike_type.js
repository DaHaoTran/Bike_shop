"use client"
import React from 'react'
import image from '../../assets/images/sample.png'
import Image from 'next/image'
import styles from './bike_type.module.css'
import { useRouter } from 'next/navigation'

export default function BikeType({name}) {
  const router = useRouter();

  const onTypeClick = () => {
    router.push('/products')
  }

  return (
    <div className={styles.type_container} onClick={x => onTypeClick()}>
        <div className={styles.type_background}></div>
        <h4 className={styles.type_name}><strong>{name}</strong></h4>
        <Image
            className={`position-relative ${styles.type_image}`}
            src={image} 
            width={350}
            alt='bike image' />
    </div>
  )
}
