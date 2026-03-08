"use client"
import React from 'react'
import styles from './page.module.css'
import Bike from '../components/bike'
import { useSearchParams } from 'next/navigation'

export default function Products() {
    const searchParams = useSearchParams();

    return (
        <div className={styles.products_container}>
            <h1 className='mx-4 mb-4 fw-bold'>Kết quả tìm kiếm: {searchParams.get("str")}</h1>
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
