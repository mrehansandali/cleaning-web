"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import styles from "./testimonial.module.scss"

type Props = {}

const Reviews = (props: Props) => {
  const testimonial = [
    {
      fullName: "John Doe",
      position: "Software Engineer",
      review: "This product is truly amazing! Very easy to use and performs excellently. I haven't seen anything better. My team is also very pleased with it.",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYNWyKBbun6mL-S4HTSJ2JyH9HdHRI5PITkJ-lXlBbQ&s"
    },
    {
      fullName: "Sara David",
      position: "Graphic Designer",
      review: "This is one of the best purchases I've ever made. The design is outstanding and the features are top-notch. I recommend this product to everyone.",
      imageSrc: "https://people.com/thmb/CmROfB5Fw4H3oJmGwr7qJTGDCGg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(509x0:511x2)/people-headshot-lindsay-kimble-9855440283c440159d1684a4befaa97d.jpg"
    },
    {
      fullName: "Michael Smith",
      position: "Project Manager",
      review: "I am very impressed with this product. It has completely changed the way I work. It really saves both time and money.",
      imageSrc: "https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
    },
    {
      fullName: "Emily Johnson",
      position: "Content Writer",
      review: "This product is extremely useful. It has made my work so much easier. I would recommend it to everyone. Its features are very impressive.",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY9Ifm7fnLZvXqFYBGT5eivqPMoqgPDaAPU-Tox0OHmrd3DHdORlPm3HZRvPlPsm6gbwE&usqp=CAU"
    },
    {
      fullName: "David Brown",
      position: "Data Analyst",
      review: "This product has exceeded my expectations. I am truly very happy. Every feature is excellent and it's very easy to use.",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGJZPvGKvjfN0bdxOsKEvvxyqGTM-c0XCSCya4Ojdmw&s"
    }
  ];
  
  return (
    <>
      <div className="container mt-5">
        <h2 className={`${styles.heading}`}>What our clients have to say</h2>
        <div className={styles.swiper_container}>
          <Swiper
              modules={[Navigation, FreeMode, Pagination]}
              navigation={true}
              pagination={true}
              className={`${styles.swiper} mySwiper`}
              loop={false}
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
                      slidesPerView: 3,
                      initialSlide: 0,
                      spaceBetween: 12,
                  },
              }}
              simulateTouch={true}
          >
              {testimonial.length > 0 &&
                  testimonial.map((item, index: number) => {
                      return (
                              <SwiperSlide className={`${styles.slide}`} key={index+1}>
                                  <div className={`${styles.review_body}`}>
                                    <img loading="lazy" className={styles.image} src={item.imageSrc} />
                                    <p className={styles.review}>{item.review}</p>
                                    <h2 className={styles.fullName}>{item.fullName}</h2>
                                    <h4 className={styles.position}>{item.position}</h4>
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

export default Reviews