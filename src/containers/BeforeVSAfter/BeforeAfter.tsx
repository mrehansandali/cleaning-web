"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination, Autoplay } from 'swiper/modules';
import styles from "./beforeafter.module.scss"

type Props = {}

const BeforeAfter = (props: Props) => {

    const beforeAfterImg = [
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1718055306/8_dhbnnh.jpg"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1718055304/3_lmq10t.jpg"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1718055304/7_lwh1kp.jpg"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1718055303/6_ykm79u.jpg"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1718055298/4_uc3urv.jpg"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1718055293/1_rb13zb.jpg"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1718055304/5_rmxubl.jpg"},
        {imageSrc: "https://res.cloudinary.com/divbpcro8/image/upload/v1718055302/2_qrwhj5.jpg"},
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
