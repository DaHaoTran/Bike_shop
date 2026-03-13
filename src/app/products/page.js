"use client"
import React, { Suspense, useEffect, useState } from 'react'
import styles from './page.module.css'
import Bike from '../components/bike'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Spinner } from 'reactstrap'

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchStr = searchParams.get("str");
  const id = searchParams.get("id");
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    if (!id) return

    async function getBikesById() {
      try {
        const res = await fetch(`/api/bikes/by_types?id=${id}`);
        const res2 = await fetch(`/api/bikes/by_firms?id=${id}`);
        if (!res.ok || !res2.ok) {
          router.push(`/pages/errors/${res.status}`);
          return
        }
        const data = await res.json();
        const data2 = await res2.json();
        setBikes([...data, ...data2, ...bikes]);
      } catch (error) {
        router.push(`/pages/errors/${error.status}`);
      }
    }
    getBikesById();
  }, [id])

  useEffect(() => {
    if(!searchStr) return
    if(!searchStr.includes('from')) return;
    async function getBikesByStr() {
      try {
        const res = await fetch(`/api/filters?str=${searchStr}`);
        if(!res.ok) {
          router.push(`/pages/errors/${res.status}`);
          return
        }
        setBikes([data, ...bikes]);
      } catch (error) {
        router.push(`/pages/errors/${error.status}`);
      }
    }
    getBikesByStr();
  }, [searchStr])

  if(bikes.length <= 0) return <div style={{marginTop: "100px", marginLeft: "30px", fontSize: "100px"}}><Spinner color='dark' /></div>
  return (
    <div className={styles.products_container}>
      <h1 className='mx-4 mb-4 fw-bold'>
        Kết quả tìm kiếm: {searchStr && searchStr.includes('from') ? 'theo giá lọc' : searchStr}
      </h1>
      <div className='row'>
        {bikes.map((x, index) => (
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
