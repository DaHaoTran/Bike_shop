"use client"
import React, { Suspense, useEffect, useState } from 'react'
import styles from './page.module.css'
import Bike from '../components/bike'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Spinner } from 'reactstrap'
import { useSelector } from 'react-redux'

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchStr = searchParams.get("str");
  const id = searchParams.get("id");
  const { bikes } = useSelector(x => x.bike);
  const [bikesFilled, setBikesFilled] = useState([]);

  useEffect(() => {
    if (!id) return
    if (!bikes) return;

    try {
      const data = bikes.filter(x => x.typeId == id || x.firmId == id);
      setBikesFilled([...data]);
    } catch {
      router.push(`/pages/errors/500`);
    }
  }, [id, bikes])

  useEffect(() => {
    if (!searchStr) return
    if (!searchStr.includes('from')) return;

    try {
      const [min, max] = searchStr.match(/\d+/g).map(Number);
      const data = bikes.filter(x => {
        const [left, right] = x.price
          .split(" - ")                // split into two parts
          .map(p => parseInt(p));      // parseInt stops at the first dot

        return left >= min && right <= max;
      });
      setBikesFilled([...data]);
    } catch {
      router.push(`/pages/errors/500`);
    }
  }, [searchStr])

  if (bikesFilled.length <= 0) return <div style={{ marginTop: "100px", marginLeft: "30px", fontSize: "100px" }}><Spinner color='dark' /></div>
  return (
    <div className={styles.products_container}>
      <h1 className='mx-4 mb-4 fw-bold'>
        Kết quả tìm kiếm: {searchStr && searchStr.includes('from') ? 'theo giá lọc' : searchStr}
      </h1>
      <div className='row'>
        {bikesFilled.map((x, index) => (
          <div className='col-lg-4 col-md-6' key={index}>
            <div className='d-flex justify-content-center'><Bike bike={x} /></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ProductsContent />
    </Suspense>
  )
}
