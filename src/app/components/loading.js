import React from 'react'
import gifImage from '../../../public/biker.gif'
import Image from 'next/image'
import styles from './loading.module.css'

export default function Loading() {
  return (
    <div className={styles.loading_container}>
      <Image className={styles.image_loading}
        src={gifImage}
        width={20}
        height={20}
        alt='biker image'
      />
    </div>
  )
}
