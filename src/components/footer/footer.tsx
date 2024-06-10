import React from 'react'
import styles from "./footer.module.scss"
import { GiWorld, GiStarShuriken } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Link from 'next/link';

type Props = {}

const footer = (props: Props) => {
  return (
    <>
        <footer className={`${styles.footer_container} footer pt-3`}>
            <div className={`${styles.container} pb-4`}>            
                <div className="row">
                    <div className={`${styles.col_1} col-md-7`}>
                        <img
                        className={styles.logo}
                        alt="logo"
                        src='https://res.cloudinary.com/divbpcro8/image/upload/v1716553941/logo_hou6e7.jpg'
                        />
                        <ul>
                            <li><div><IoLocationSharp className={`${styles.info_icons}`}/></div> Suite# 2/39 Marion St.Parramatta, NSW 2150</li>
                            <li><div><FaPhoneAlt className={`${styles.info_icons}`}/></div> 0452 412683</li>
                            <li><div><IoMdMail className={`${styles.info_icons}`}/></div> info@shahcleaningservices.com.au</li>
                            <li><div><GiWorld className={`${styles.info_icons}`}/></div> shahcleaningservices.com.au</li>
                        </ul>
                    </div>
                    <div className={`${styles.col_2} col-md-5 m-auto`}>
                        <h3 className={`${styles.heading}`}>Shah Cleaning Services</h3>
                        <ul>
                            <li><div><GiStarShuriken className={`${styles.info_icons}`}/></div><Link className="dropdown-item" href="/services">All Services</Link></li>
                            <li><div><GiStarShuriken className={`${styles.info_icons}`}/></div><Link className="dropdown-item" href="/services/domestic-cleaning">Domestic Cleaning</Link></li>
                            <li><div><GiStarShuriken className={`${styles.info_icons}`}/></div><Link className="dropdown-item" href="/services/carpet-cleaning">Carpet Cleaning</Link></li>
                            <li><div><GiStarShuriken className={`${styles.info_icons}`}/></div><Link className="dropdown-item" href="/services/end-of-lease-cleaning">End Of Lease Cleaning</Link></li>
                            <li><div><GiStarShuriken className={`${styles.info_icons}`}/></div><Link className="dropdown-item" href="/services/commercial-cleaning">Commercial Cleaning</Link></li>
                            <li><div><GiStarShuriken className={`${styles.info_icons}`}/></div><Link className="dropdown-item" href="/services/construction-cleaning">Construction Cleaning</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className={`${styles.footer_bottom_banner}`}>© 2024 Shah Cleaning Service. All rights reserved.</p>
        </footer>

    </>
  )
}

export default footer