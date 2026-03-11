"use client"
import Image from "next/image";
import styles from "./page.module.css";
import BikeType from "./components/bike_type";
import CarouselReview from "./components/carousel_review";
import rect from '../assets/images/rect.png'
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function getTypes() {
      try {
        const res = await fetch('api/types');
        if(!res.ok) {
          route.push(`/pages/errors/${res.status}`)
          return
        }
        const data = await res.json();
        setTypes(data);
      } catch (error) {
        route.push(`/pages/errors/${error.status}`);
      }
    }
    getTypes();
  }, []);

  return (
    <Suspense fallback={<h1 style={{marginTop: '400px'}}>Loading</h1>}>
      <div>
        {/* Carousel section */}
        <div className={styles.carousel_container}>
          <CarouselReview />
        </div>
        {/* End Carousel section */}
        {/* Types section */}
        <div className="mt-4" id="bike_types">
          <h1 className="my-4 text-center"><strong>Khám phá sản phẩm</strong></h1>
          <div className="row">
            {types.map((x) => (
              <div className="col-lg-3 col-md-6 d-flex justify-content-center" key={x.id}>
                <BikeType name={x.name} />
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
      </div>
    </Suspense>
  );
}
