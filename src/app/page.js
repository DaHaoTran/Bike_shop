"use client"
import Image from "next/image";
import styles from "./page.module.css";
import BikeType from "./components/bike_type";
import CarouselReview from "./components/carousel_review";
import rect from '../assets/images/rect.png'
import { Suspense, use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addTypeS } from "./features/type/type_slice";
import { getTypeList } from "./methods/list";
import { MdAddToHomeScreen, MdChecklist } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import IconInfor from "./components/icon_infor";
import { LuMousePointerClick } from "react-icons/lu";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { types } = useSelector(x => x.type);
  const { data, error, isLoading } = getTypeList(); 
  const icons = [
    {
      component: <LuMousePointerClick size='60' />,
      name: "Đăng ký mua xe"
    },
    {
      component: <FaMapLocationDot size='60' />,
      name: "Tìm đại lý"
    },
    {
      component: <MdChecklist size='60' />,
      name: "So sánh xe"
    },
  ]

  useEffect(() => {
    if(!data) return

    dispatch(addTypeS(data));
  }, [data]);

  useEffect(() => {
    if(!error) return
    
    router.push(`/pages/errors/${500}`)
  }, [error])

  return (
    <Suspense fallback={<h1 style={{marginTop: '400px'}}>Loading</h1>}>
      <div id="home_container">
        {/* Carousel section */}
        <div className={styles.carousel_container}>
          <CarouselReview />
        </div>
        {/* End Carousel section */}
        {/* Types section */}
        <div className="mt-4" id="bike_types">
          <h1 className="my-4 text-center"><strong>Khám phá sản phẩm</strong></h1>
          <div className="row">
            {!isLoading && types.map((x) => (
              <div className="col-lg-3 col-md-6 d-flex justify-content-center main_type_container" key={x.id}>
                <BikeType id={x.id} name={x.name} />
              </div>
            ))}
          </div>
        </div>
        {/* End Types section */}
        {/* News section */}
        <div className={styles.news_container}>
          <h1 className="my-3 text-center"><strong>Tin tức và khuyến mãi</strong></h1>
          <div className="row">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="col-lg-3 col-md-6 my-2 d-flex justify-content-center" key={index}>
                <Image
                  className={styles.news_image}
                  src={rect}
                  width={350}
                  height={150}
                  alt="News image"
                />
              </div>
            ))}
          </div>
        </div>
        {/* End News section */}
        {/* Other infor section */}
        <div className={styles.other_infor_container}>
          <h1 className="my-3 text-center"><strong>Tư vấn mua xe</strong></h1>
          <div className={styles.icon_container}>
            <div className="d-flex justify-content-center">
              {icons.map((x, index) => (
                <div className="w-100 mx-3 ms-5" key={index}><IconInfor iconComponent={x.component} name={x.name} /></div>
              ))}
            </div>
          </div>
        </div>
        {/* End Other infor section */}
      </div>
    </Suspense>
  );
}
