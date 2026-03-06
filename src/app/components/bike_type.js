import React from 'react'
import image from '../../assets/images/sample.png'
import Image from 'next/image'
import styles from './bike_type.module.css'

export default function BikeType() {
  return (
    <div className={styles.type_container}>
        <div className={styles.type_background}></div>
        <h4 className={styles.type_name}><strong>Type name</strong></h4>
        <Image
            className={`position-relative ${styles.type_image}`}
            src={image} 
            width={350}
            alt='bike image' />
    </div>
  )
}
