import React from 'react'
import styles from './bike.module.css'
import image from '../../assets/images/sample.png'
import Image from 'next/image'
import { CiLocationArrow1 } from "react-icons/ci";

export default function Bike() {
  return (
    <div className={styles.bike_container}>
      <h3 className={styles.bike_title}><strong>Yamaha PG-1 mới phiên bản giới hạn</strong></h3>
      <h5 style={{color: 'grey'}}>Giá từ <strong>30.537.000 đồng</strong></h5>
      <Image
        className={styles.bike_image}
        src={image}
        alt='Bike image'
      />
      <div className='d-flex justify-content-end'>
        <button className='px-3 py-1'>Xem chi tiết →</button>
      </div>
    </div>
  )
}
