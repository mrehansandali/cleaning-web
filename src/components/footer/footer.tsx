import React from 'react'
import styles from "./footer.module.scss"
import logo from "../../../public/images/logo.jpeg"
import Image from 'next/image'
import { GiWorld, GiStarShuriken } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

type Props = {}

const footer = (props: Props) => {
  return (
    <>
        <footer className={`${styles.footer_container} footer pt-3`}>
            <div className={`${styles.container} pb-4`}>            
                <div className="row">
                    <div className={`${styles.col_1} col-md-7`}>
                        <Image
                        className={styles.logo}
                        alt="logo"
                        src={logo}
                        style={{
                        height: 90,
                        width: 90
                        }}
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
                            <li><div><GiStarShuriken className={`${styles.info_icons}`}/></div> <a href="">Commercial Cleaning</a></li>
                            <li><div><GiStarShuriken className={`${styles.info_icons}`}/></div> <a href="">Domestic Cleaning</a></li>
                            <li><div><GiStarShuriken className={`${styles.info_icons}`}/></div> <a href="">Office Cleaning</a></li>
                            <li><div><GiStarShuriken className={`${styles.info_icons}`}/></div> <a href="">Construction Cleaning</a></li>
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