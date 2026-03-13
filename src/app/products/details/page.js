"use client"
import React, { useEffect, useState } from 'react'
import image from '../../../assets/images/meow.png'
import styles from './page.module.css'
import Image from 'next/image'
import { Spinner, Table } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

export default function Details() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { bike } = useSelector(x => x.bike); 
    const [detail, setDetail] = useState({});
    const [color, setColor] = useState('lightgray');
    const [animationState, setAnimationState] = useState('paused');
    const colors = {
        'đỏ': '#bf2424',
        'xanh': '#242cbf',
        'vàng': '#bf9b24',
        'tím': '#7424bf'
    }

    const onColorPicked = (value) => {
        setColor(value)

        setAnimationState('running');
        setTimeout(() => {
            setAnimationState('paused');
        }, 2200);
    }

    useEffect(() => {
        if(!bike || Object.keys(bike).length <= 0) return;

        try {
            async function getDetails() {
                const res = await fetch(`/api/bikes/details?id=${bike.id}`);
                if(!res.ok) {
                    router.push(`/pages/errors/${res.status}`);
                    return;
                }
                const data = await res.json();
                setDetail(data);
            }
            getDetails();
        } catch (error) {
            router.push(`/pages/errors/${error.status}`);
        }
    }, [bike])

    if(!detail || Object.keys(detail).length <= 0) return <div style={{marginTop: "100px", marginLeft: "30px", fontSize: "100px"}}><Spinner color='dark' /></div>
    return (
        <>
            <hr className={styles.line} />
            <div className={styles.color_pickers}>
                {Object.entries(colors).map(([key, value]) => (
                    <button className='px-4 py-1 mb-2' key={key} onClick={x => onColorPicked(value)}>{key}</button>
                ))}
            </div>
            <div className={styles.details_container}>
                <div className='mt-5 row'>
                    {/* Image section */}
                    <div className='col-lg-6 col-md-12'>
                        <div className={styles.image_container} style={{backgroundColor: color}}>
                            <Image
                                className={styles.image}
                                src={`data:image/png;base64,${bike.image}`}
                                width={500}
                                height={400}
                                alt='Bike image' />
                        </div>
                    </div>
                    {/* End Image section */}
                    {/* Title section */}
                    <div className='col-lg-6 col-md-12'>
                        <div>
                            <h1 className={styles.title_bikename}>{bike.name}</h1>
                            <h2 className={styles.title_bikeprice} style={{ color: 'grey' }}>Giá từ <strong>{bike.price} Vnđ</strong></h2>
                        </div>
                        <div className='mt-5'>
                            <button className={styles.title_orderbutton}><h2>Mua xe</h2></button>
                        </div>
                    </div>
                    {/* End Title section */}
                    {/* Review section */}
                    <div className='col-lg-6 col-md-12 mt-5'>
                        <h1 className={styles.title_headers}>Giới thiệu</h1>
                        <p>{detail.review}</p>
                    </div>
                    {/* End Review section */}
                    {/* Technical section */}
                    <div className='col-lg-6 col-md-12 mt-5'>
                        <h1 className={styles.title_headers}>Thông số kỹ thuật</h1>
                        <Table
                            bordered
                            striped
                            responsive
                        >
                            <tbody>
                                {Object.entries(detail.technical).map(([key, value]) => (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    {/* End Technical section */}
                </div>
            </div>
            <div className='w-100 d-flex justify-content-center'>
                <Image
                    className={styles.meow}
                    style={{animationPlayState: animationState}}
                    src={image}
                    width={400}
                    height={300}
                    alt='nothing'
                />
            </div>
        </>
    )
}
