"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination, Autoplay } from 'swiper/modules';
import styles from "./beforeafter.module.scss"

type Props = {}

const BeforeAfter = (props: Props) => {

    const beforeAfterImg = [
        {
          imageSrc: "https://www.boredpanda.com/blog/wp-content/uploads/2022/10/before-after-cleaning-transformations-cover_800.jpg"
        },
        {
          imageSrc: "https://i.pinimg.com/originals/51/4b/71/514b71436c54de206123f59a217ec519.jpg"
        },
        {
          imageSrc: "https://img.buzzfeed.com/buzzfeed-static/static/2019-02/13/14/asset/buzzfeed-prod-web-01/sub-buzz-9888-1550086033-1.jpg?crop=1493:1092;52,55"
        },
        {
          imageSrc: "https://www.boredpanda.com/blog/wp-content/uploads/2022/10/before-after-cleaning-transformations-cover_800.jpg"
        },
        {
          imageSrc: "https://i.pinimg.com/originals/51/4b/71/514b71436c54de206123f59a217ec519.jpg"
        },
        {
          imageSrc: "https://www.boredpanda.com/blog/wp-content/uploads/2022/10/before-after-cleaning-transformations-cover_800.jpg"
        },
        {
          imageSrc: "https://i.pinimg.com/originals/51/4b/71/514b71436c54de206123f59a217ec519.jpg"
        },
        {
          imageSrc: "https://img.buzzfeed.com/buzzfeed-static/static/2019-02/13/14/asset/buzzfeed-prod-web-01/sub-buzz-9888-1550086033-1.jpg?crop=1493:1092;52,55"
        },
        {
          imageSrc: "https://www.boredpanda.com/blog/wp-content/uploads/2022/10/before-after-cleaning-transformations-cover_800.jpg"
        },
        {
          imageSrc: "https://i.pinimg.com/originals/51/4b/71/514b71436c54de206123f59a217ec519.jpg"
        },
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1717871349/10_dcxi4v.png"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1717871348/9_uhr1cx.png"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1717871347/7_bye0ee.png"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1717871346/6_dgxpxa.png"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1717871342/2_jau2rc.png"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1717871347/8_belsyw.png"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1717871345/5_hyyz1t.png"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1717871344/4_e8okbb.png"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1717871344/3_qeryct.png"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1717871341/1_ezkixy.png"}
      ];
      

  return (
    <>
    <div className="container my-5">
      <h2 className={`${styles.heading}`}>No Matter How Dirty Your Home Is</h2>
      <p className={`${styles.text}`}>We Will Get It Cleaned</p>
      <div className={styles.swiper_container}>
        <Swiper
            modules={[Navigation, FreeMode, Pagination, Autoplay]}
            navigation={true}
            pagination={true}
            className={`${styles.swiper} mySwiper`}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            breakpoints={{
                1: {
                    slidesPerView: 1,
                    initialSlide: 0,
                    freeMode: {
                        enabled: true,
                        sticky: false
                    }
                },
                992: {
                    slidesPerView: 4,
                    initialSlide: 0,
                    spaceBetween: 12,
                },
            }}
            simulateTouch={true}
        >
            {beforeAfterImg.length > 0 &&
                beforeAfterImg.map((item, index: number) => {
                    return (
                            <SwiperSlide className={`${styles.slide}`} key={index+1}>
                                <div className={`${styles.beforeafter_body}`}>
                                  <img loading="lazy" className={styles.image} src={item.imageSrc} />
                                </div>
                            </SwiperSlide>
                        );
                })}
        </Swiper>
      </div>
    </div>
  </>
  )
}

export default BeforeAfter
