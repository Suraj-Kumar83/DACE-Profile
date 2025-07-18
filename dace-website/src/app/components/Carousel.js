"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import styles from "../styles/carousel.module.css";


// custom arrow buttons
function NextArrow({ onClick }) {
  return (
    <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
      ❯
    </div>
  );
}
function PrevArrow({ onClick }) {
  return (
    <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
      ❮
    </div>
  );
}

export default function DACECarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      src: "/Picture2.jpg",
      heading: "डॉ. अम्बेडकर उत्कृष्टता केंद्र में",
      sub: "आपका स्वागत है",
    },
    {
      src: "/Picture3.png",
      heading: "उच्च स्तरीय कोचिंग",
      sub: "प्रतियोगी परीक्षाओं के लिए",
    },
    {
      src: "/Picture4.png",
      heading: "समग्र विकास के लिए",
      sub: "हमारा प्रयास",
    },
  ];

  return (
    <section className={styles.carouselContainer}>
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className={styles.slideItem}>
            <Image
              src={slide.src}
              alt={`Slide ${idx + 1}`}
              fill
              className={styles.imageDim}
              sizes="100vw"
              priority={idx === 0}
            />
            <div className={styles.overlay}>
              <h2>{slide.heading}</h2>
              <p>{slide.sub}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
