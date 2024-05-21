import React from 'react'
import styles from "./service.module.scss"
import { FaAnglesRight } from "react-icons/fa6";
import Link from 'next/link';

const Services = () => {
  return (
    <>
      
      <div className="container mt-5">
        <h2 className={`${styles.heading}`}>Our Cleaning Services</h2>
        <p className={`${styles.text}`}>Call The Cleaners is a straightforward and transparent solution for all of your professional house cleaning needs. <br /> Try our professional cleaners today and experience a clean home. <br /> There are no hidden fees or contracts to sign, and you can cancel at any time.</p>
        <div className={`${styles.container} row`}>
            <div className={`col-md-4 my-3 ${styles.productCard}`}>
                <div className={`${styles.card}`}>
                    <div className={`${styles.setWidth}`}>
                        <img alt="img" src="https://callthecleaners.com.au/wp-content/uploads/2024/03/sr1-1.webp" />
                    </div>
                    <div className={`${styles.mrcol}`}>
                        <h5 className="card-title">Home Cleaning </h5>
                        <a href="#"><FaAnglesRight/></a>
                    </div>
                </div>
            </div>
            <div className={`col-md-4 my-3 ${styles.productCard}`}>
                <div className={`${styles.card}`}>
                <div className={`${styles.setWidth}`}>
                    <img alt="img" src="https://callthecleaners.com.au/wp-content/uploads/2024/03/sr6.webp" />
                </div>
                <div className={`${styles.mrcol}`}>
                    <h5 className="card-title">Deep Cleaning</h5>
                    <a href="#"><FaAnglesRight/></a>
                </div>
            </div>
            </div>
            <div className={`col-md-4 my-3 ${styles.productCard}`}>
                <div className={`${styles.card}`}>
                <div className={`${styles.setWidth}`}>
                    <img alt="img" src="https://callthecleaners.com.au/wp-content/uploads/2024/03/sr3.webp" />
                </div>
                <div className={`${styles.mrcol}`}>
                    <h5 className="card-title">End of Lease Cleaning</h5>
                    <a href="#"><FaAnglesRight/></a>
                </div>
            </div>
            </div>
            <div className={`col-md-4 my-3 ${styles.productCard}`}>
                <div className={`${styles.card}`}>
                <div className={`${styles.setWidth}`}>
                    <img alt="img" src="https://callthecleaners.com.au/wp-content/uploads/2024/03/8.jpg" />
                </div>
                <div className={`${styles.mrcol}`}>
                    <h5 className="card-title">Regular Cleaning</h5>
                    <a href="#"><FaAnglesRight/></a>
                </div>
            </div>
            </div>
            <div className={`col-md-4 my-3 ${styles.productCard}`}>
                <div className={`${styles.card}`}>
                <div className={`${styles.setWidth}`}>
                    <img alt="img" src="https://callthecleaners.com.au/wp-content/uploads/2024/03/sr4.webp" />
                </div>
                <div className={`${styles.mrcol}`}>
                    <h5 className="card-title">Carpet Cleaning</h5>
                    <a href="#"><FaAnglesRight/></a>
                </div>
            </div>
            </div>
            <div className={`col-md-4 my-3 ${styles.productCard}`}>
                <div className={`${styles.card}`}>
                <div className={`${styles.setWidth}`}>
                    <img alt="img" src="https://callthecleaners.com.au/wp-content/uploads/2024/03/sr5.webp" />
                </div>
                <div className={`${styles.mrcol}`}>
                    <h5 className="card-title">Construction Cleaning</h5>
                    <a href="#"><FaAnglesRight/></a>
                </div>
            </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default Services
