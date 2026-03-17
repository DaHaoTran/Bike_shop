"use client"
import React, { useCallback, useEffect, useState } from 'react'
import image from '../../../assets/images/meow.png'
import styles from './page.module.css'
import Image from 'next/image'
import { Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Spinner, Table } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

export default function Details() {
    let timerInterval;
    let isBuyingSubmited;

    const dispatch = useDispatch();
    const router = useRouter();
    const { bike } = useSelector(x => x.bike); 
    const { details } = useSelector(x => x.details);
    const [detail, setDetail] = useState({});
    const [color, setColor] = useState('lightgray');
    const [animationState, setAnimationState] = useState('paused');
    const colors = {
        'đỏ': '#bf2424',
        'xanh': '#242cbf',
        'vàng': '#bf9b24',
        'tím': '#7424bf'
    }
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const onColorPicked = (value) => {
        setColor(value)

        setAnimationState('running');
        setTimeout(() => {
            setAnimationState('paused');
        }, 2200);
    }

    const onBuyingSubmit = (e) => {
        e.preventDefault();

        insertToSheets(e);

        Swal.fire({
            title: "Đang xác nhận",
            html: "Vui lòng chờ trong <b></b> milli giây.",
            timer: 3000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (isBuyingSubmited) {
                Swal.fire({
                    title: "Cảm ơn bạn đã đặt hàng",
                    text: "Bên cửa hàng sẽ liên hệ để xác nhận và trao đổi thông tin với quý khách !",
                    icon: "success"
                });
                router.push('/');
            } else {
                Swal.fire({
                    title: "Xin lỗi vì sự bất tiện này",
                    text: "Có vấn đề phát sinh, vui lòng thử lại !",
                    icon: "error"
                });
            }
        });
    }

    const insertToSheets = async (e) => {
        try {
            const rawValue = e.target.date.value;
            const dateObj = new Date(rawValue);

            // Convert to ISO string
            const isoString = dateObj.toISOString(); 

            const res = await fetch('/api/sheets', {
                method: "POST",
                body: (`Bike=${bike.name}&Name=${e.target.name.value}&Phone=${e.target.phone.value}&Address=${e.target.address.value}&Date=${isoString}`)
            });

            // if(!res.ok) {
            //     isBuyingSubmited = false
            //     return
            // }
            isBuyingSubmited = true
        } catch (error) {
            router.push(`/pages/errors/${error.status}`);
        }
    }

    useEffect(() => {
        if(!details) return;
        if(!bike || Object.keys(bike).length <= 0) return;

        try {
            const data = details.find(x => x.bikeId == bike.id);
            if(!data) {
                router.push(`/pages/errors/500`);
                return
            }
            setDetail(data);
        } catch {
            router.push(`/pages/errors/500`);
        }
    }, [bike, details])

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
                            <button className={styles.title_orderbutton} onClick={toggle}><h2>Mua xe</h2></button>
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
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Thông tin liên hệ</ModalHeader>
                <ModalBody>
                    <Form onSubmit={e => onBuyingSubmit(e)}>
                        <FormGroup>
                            <Label>Họ và tên</Label>
                            <Input 
                                name='name'
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Số điện thoại</Label>
                            <Input 
                                type='text'
                                name='phone'
                                required
                            />
                        </FormGroup>
                         <FormGroup>
                            <Label>Địa chỉ</Label>
                            <Input 
                                type='text'
                                name='address'
                                required
                            />
                        </FormGroup>
                         <FormGroup>
                            <Label>Ngày hẹn</Label>
                            <Input 
                                type='date'
                                name='date'
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className='btn btn-dark'
                                type='submit'
                                value={'Xác nhận'}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}
