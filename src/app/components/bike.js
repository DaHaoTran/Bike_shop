"use client"
import React from 'react'
import styles from './bike.module.css'
import image from '../../assets/images/sample.png'
import Image from 'next/image'
import { CiLocationArrow1 } from "react-icons/ci";
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { addBike } from '../features/bike/bike_slice'

export default function Bike({ bike }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const onBikeDetailsClick = () => {
    dispatch(addBike(bike));
    router.push('/products/details');
  }

  if(!bike) return null;
  return (
    <div className={styles.bike_container}>
      <h3 className={styles.bike_title}><strong>{bike.name}</strong></h3>
      <h5 style={{color: 'grey'}}>Giá từ <strong>{bike.price.slice(0, bike.price.indexOf('-'))} đồng</strong></h5>
      <Image
        className={styles.bike_image}
        src={`data:image/png;base64,${bike.image}`}
        width={300}
        height={260}
        alt='Bike image'
      />
      <div className='d-flex justify-content-end'>
        <button className='px-3 py-1' onClick={x => onBikeDetailsClick()}>Xem chi tiết →</button>
      </div>
    </div>
  )
}
