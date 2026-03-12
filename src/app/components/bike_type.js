"use client"
import React, { useEffect, useState } from 'react'
import image from '../../assets/images/sample.png'
import Image from 'next/image'
import styles from './bike_type.module.css'
import { useRouter } from 'next/navigation'
import Error from '../pages/errors/[number]/page'

export default function BikeType({id, name}) {
  const router = useRouter();
  const [bikes, setBikes] = useState([]);

  const onTypeClick = () => {
    router.push(`/products?id=${id}&str=${name}`)
  }

  useEffect(() => {
    if(!id) return;
    try {
      async function getBikesById() {
        const res = await fetch(`/api/bikes/by_types?id=${id}`);
        if (!res.ok) {
          route.push(`/pages/errors/${res.status}`)
          return
        }
        const data = await res.json();
        setBikes(data);
      }
      getBikesById();
    } catch (error) {
      route.push(`/pages/errors/${error.status}`)
    }
  }, [id]);

  if(bikes.length <= 0) return null;
  return (
    <div className={styles.type_container} onClick={x => onTypeClick()}>
        <div className={styles.type_background}></div>
        <h4 className={styles.type_name}><strong>{name}</strong></h4>
        <Image
            className={`position-relative ${styles.type_image}`}
            src={`data:image/png;base64,${bikes[0].image}`} 
            width={350}
            height={280}
            alt='bike image' />
    </div>
  )
}
