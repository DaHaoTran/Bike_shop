import React from 'react'
import image from '../../../assets/images/sample.png'
import styles from './page.module.css'
import Image from 'next/image'
import { Table } from 'reactstrap'

export default function Details() {
    return (
        <>
            <hr className={styles.line} />
            <div className={styles.color_pickers}>
                <button className='px-4 py-1 mb-2'>Đỏ</button>
                <button className='px-4 py-1 mb-2'>Xanh</button>
            </div>
            <div className={styles.details_container}>
                <div className='mt-5 row'>
                    {/* Image section */}
                    <div className='col-lg-6 col-md-12'>
                        <div className={styles.image_container}>
                            <Image
                                className={styles.image}
                                src={image}
                                alt='Bike image' />
                        </div>
                    </div>
                    {/* End Image section */}
                    {/* Title section */}
                    <div className='col-lg-6 col-md-12'>
                        <div>
                            <h1 className={styles.title_bikename}>Yamaha PG-1 mới Phiên bản giới hạn</h1>
                            <h2 className={styles.title_bikeprice} style={{ color: 'grey' }}>Giá từ <strong>30.000.000 - 34.855.000 Vnđ</strong></h2>
                        </div>
                        <div className='mt-5'>
                            <button className={styles.title_orderbutton}><h2>Mua xe</h2></button>
                        </div>
                    </div>
                    {/* End Title section */}
                    {/* Review section */}
                    <div className='col-lg-6 col-md-12 mt-5'>
                        <h1 className={styles.title_headers}>Giới thiệu</h1>
                        <p>Sit consectetur est exercitation do in Lorem cillum aliquip laboris. Sunt nulla reprehenderit non adipisicing cillum fugiat sint aliquip laborum nisi nisi veniam aliquip. Ullamco eu tempor dolore eu aliqua occaecat laborum magna excepteur. Labore deserunt aliquip reprehenderit minim labore id excepteur aliquip velit anim Lorem. Id esse do qui enim. Officia id labore sit et do ex.

                            Eu do do nisi quis mollit eu nisi sunt qui aliquip. Minim id commodo deserunt id. Aute adipisicing id consectetur ex ea nisi dolore ex et id ad ea officia occaecat. Deserunt aute sint labore aliqua deserunt minim ad veniam aute ea voluptate nostrud et. Dolor et aliqua nulla nulla aliquip excepteur nisi commodo duis excepteur non reprehenderit. Nostrud adipisicing aliquip duis est ullamco dolore exercitation eiusmod anim eu. Amet ea exercitation elit ullamco velit laboris.

                            Cillum aute amet eu occaecat incididunt consectetur enim velit officia qui eiusmod ullamco. Labore proident cillum Lorem labore do ipsum. Ea consequat sint nostrud minim nisi labore consequat. Aliquip culpa sit id anim eiusmod eiusmod velit qui eiusmod nulla magna duis. Anim irure sit magna qui eu deserunt sint ipsum elit proident laboris. Veniam eiusmod nostrud Lorem veniam proident deserunt incididunt amet quis.

                            Adipisicing consequat adipisicing ullamco dolor. Ex ut aute velit voluptate. Officia proident voluptate mollit laboris sunt excepteur nostrud ad aliqua. Pariatur ea Lorem sunt dolore id. Aliqua tempor qui sunt cillum excepteur incididunt. Sit ullamco consectetur quis irure incididunt.

                            Nisi consequat enim nostrud nulla eiusmod aute exercitation laborum veniam culpa. Nostrud labore commodo aute deserunt excepteur sint ad nulla. Dolore ipsum aute aute officia amet eiusmod ipsum amet proident minim. Sit dolore do labore sunt est velit ipsum aute mollit nostrud. Voluptate in nisi sint officia ipsum cupidatat ipsum nulla excepteur mollit laboris ut. Eu ullamco tempor consectetur dolore ipsum excepteur fugiat esse esse qui quis. Commodo aliqua amet velit labore tempor sunt.</p>
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
                                <tr>
                                    <td>
                                        Technical Name
                                    </td>
                                    <td>
                                        Technical description
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    {/* End Technical section */}
                </div>
            </div>
        </>
    )
}
