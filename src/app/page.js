import Image from "next/image";
import styles from "./page.module.css";
import BikeType from "./components/bike_type";
import CarouselReview from "./components/carousel_review";

export default function Home() {
  return (
    <div>
      {/* Carousel section */}
      <div className={styles.carousel_container}>
        <CarouselReview />
      </div>
      {/* End Carousel section */}
      {/* Types section */}
      <div className="my-4">
        <h1 className="my-4 text-center"><strong>Khám phá sản phẩm</strong></h1>
        <div className="row">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="col-lg-2 col-md-6 me-lg-4" key={index}>
              <BikeType />
            </div>
          ))}
        </div>
      </div>
      {/* End Types section */}
    </div>
  );
}
