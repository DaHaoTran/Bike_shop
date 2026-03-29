"use client"
import React, { useEffect, useState } from 'react'
import image from '../../assets/images/sample.png'
import Image from 'next/image'
import styles from './bike_type.module.css'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { getBikeList } from '../methods/list'
import { animate, onScroll, utils } from "animejs";

export default function BikeType({ id, name }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { bikes } = useSelector(x => x.bike);
  const [bike, setBike] = useState({});
  const [ container ] = utils.$('#bike_type');
  const [isScrollTrigger, setIsScrollTrigger] = useState(false);

  const onTypeClick = () => {
    router.push(`/products?id=${id}&str=${name}`)
  }

  useEffect(() => {
    if (!bikes) return;
    if (!id) return;

    try {
      setBike(bikes.find(x => x.typeId === parseInt(id)));
    } catch {
      router.push('/pages/errors/500')
    }
  }, [id, bikes])

  // scroll animations
  window.onscroll = () => {
    if(isScrollTrigger) return

    if(window.pageYOffset <= 100) return

    setIsScrollTrigger(true);

    animate('#bike_type', {
        opacity: { from: 0, to: 1 },
        y: { from: '20px', to: '0px' },
        delay: 200,
        duration: 2000,
    });
  }

  if (!bike || Object.keys(bike).length <= 0) return null;
  return (
    <div className={styles.type_container} onClick={x => onTypeClick()} id='bike_type'>
      <div className={styles.type_background}></div>
      <h4 className={styles.type_name}><strong>{name}</strong></h4>
      <Image
        className={`position-relative ${styles.type_image}`}
        src={`data:image/png;base64,${bike.image}`}
        width={350}
        height={280}
        alt='bike image' />
    </div>
  )
}
