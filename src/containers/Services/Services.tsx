import React from 'react'
import styles from "./service.module.scss"
import { FaAnglesRight } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

const Services = () => {
  return (
    <>
      
      <div className="container mt-5">
        <h2 className={`${styles.heading}`}>Our Cleaning Services</h2>
        <p className={`${styles.text}`}>Shah Cleaning Services is a straightforward and transparent solution for all of your professional house cleaning needs. <br /> Try our professional cleaners today and experience a clean home. <br /> There are no hidden fees or contracts to sign, and you can cancel at any time.</p>
        <div className={`${styles.container} row`}>
            <div className={`col-md-4 my-3 ${styles.productCard}`}>
                <div className={`${styles.card}`}>
                <div className={`${styles.setWidth}`}>
                    <img alt="img" src="https://res.cloudinary.com/divbpcro8/image/upload/v1719262226/domestic_cleaning_et9dn4.jpg"/>
                </div>
                <div className={`${styles.mrcol}`}>
                    <h5 className="card-title">Domestic Cleaning</h5>
                    <Link href="/services/domestic-cleaning"><FaAnglesRight/></Link>
                </div>
            </div>
            </div>
            <div className={`col-md-4 my-3 ${styles.productCard}`}>
                <div className={`${styles.card}`}>
                <div className={`${styles.setWidth}`}>
                    <img alt="img" src="https://res.cloudinary.com/divbpcro8/image/upload/v1719262223/carpet_cleaning_qbjzkm.jpg"/>
                </div>
                <div className={`${styles.mrcol}`}>
                    <h5 className="card-title">Carpet Cleaning</h5>
                    <Link href="/services/carpet-cleaning"><FaAnglesRight/></Link>
                </div>
            </div>
            </div>
            <div className={`col-md-4 my-3 ${styles.productCard}`}>
                <div className={`${styles.card}`}>
                <div className={`${styles.setWidth}`}>
                    <img alt="img" src="https://res.cloudinary.com/divbpcro8/image/upload/v1719262270/end_of_lease_cleaning_rmv9f4.jpg"/>
                </div>
                <div className={`${styles.mrcol}`}>
                    <h5 className="card-title">End Of Lease Cleaning</h5>
                    <Link href="/services/end-of-lease-cleaning"><FaAnglesRight/></Link>
                </div>
            </div>
            </div>
            <div className={`col-md-6 my-3 ${styles.productCard}`}>
                <div className={`${styles.card}`}>
                <div className={`${styles.setWidth}`}>
                    <img alt="img" src="https://res.cloudinary.com/divbpcro8/image/upload/v1719262268/commercial_cleaning_tojtd5.jpg"/>
                </div>
                <div className={`${styles.mrcol}`}>
                    <h5 className="card-title">Commercial Cleaning</h5>
                    <Link href="/services/commercial-cleaning"><FaAnglesRight/></Link>
                </div>
            </div>
            </div>
            <div className={`col-md-6 my-3 ${styles.productCard}`}>
                <div className={`${styles.card}`}>
                <div className={`${styles.setWidth}`}>
                    <img alt="img" src="https://res.cloudinary.com/divbpcro8/image/upload/v1719262186/construction_cleaning_pjvjeg.webp"/>
                </div>
                <div className={`${styles.mrcol}`}>
                    <h5 className="card-title">Construction Cleaning</h5>
                    <Link href="/services/construction-cleaning"><FaAnglesRight/></Link>
                </div>
            </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default Services
