import React from 'react'
import styles from './page.module.css'
import sampleImg from '../../../assets/images/sample.png'
import signImg from '../../../assets/images/sign.png'
import Image from 'next/image'

const json = {
    'Lập trình bởi': 'DaHaoTran.',
    'Tạo ngày': '3/3/2026.',
    'Nội dung': 'đây là một trang web cá nhân. Không dùng cho mục đích kinh doanh.',
    'Canvas': 'https://www.figma.com/design/cNjfcJyJQnHLLyECPDplqa/BikeShop?node-id=0-1&t=PELe1jpCogHglqNW-1',
    'Github': 'https://github.com/DaHaoTran/Bike_shop'
}

export default function Reviews() {
    return (
        <div className={styles.reviews_container}>
            <div className={styles.reviews_image_container}>
                <Image
                    className={styles.reviews_bike_image}
                    src={sampleImg}
                    alt='Bike image'
                />
            </div>
            <h1 className={styles.reviews_title}>Giới thiệu</h1>
            <div className={styles.reviews_content}>
                {Object.entries(json).map(([key, value]) => (
                    <h5 style={{ color: 'grey' }} key={key}>• {key}: <strong>{value}</strong></h5>
                ))}
                <div className='d-flex justify-content-end'>
                    <Image
                        className={styles.reviews_sign_image}
                        src={signImg}
                        alt='Sign image'
                    />
                </div>
            </div>
        </div>
    )
}
