"use client"
import React, { Suspense } from 'react'
import styles from './page.module.css'
import Bike from '../components/bike'
import { useSearchParams } from 'next/navigation'

function ProductsContent() {
  const searchParams = useSearchParams();
  const searchStr = searchParams.get("str") || "";

  return (
    <div className={styles.products_container}>
      <h1 className='mx-4 mb-4 fw-bold'>
        Kết quả tìm kiếm: {searchStr.includes('from') ? 'theo giá lọc' : searchStr}
      </h1>
      <div className='row'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div className='col-lg-4 col-md-6' key={index}>
            <div className='d-flex justify-content-center'><Bike /></div>
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
