import React from 'react'
import styles from "./footer.module.scss"
import logo from "../../public/images/logo.jpeg"
import Image from 'next/image'

type Props = {}

const footer = (props: Props) => {
  return (
    <>
        <footer className={`${styles.footer_container} footer pt-3`}>
            <div className={`container`}>            
                <div className="row">
                <div className="col-md-4">
                    <h3>About Company</h3>
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
                    <li>Email: example@gmail.com</li>
                    <li>+1 2345 6789</li>
                    <li>123 Main Street Sydney, NSW 2000 Australia</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>QuickLinks</h3>
                    <ul>
                    <li><a href="services.html">Our Services</a></li>
                    <li><a href="Contactus.html">Contact Us</a></li>
                    <li><a href="aboutus.html">About Us</a></li>
                    <li><a href="./PrivacyPolicy.html">Privacy Policy</a></li>
                    <li><a href="./ShippingPolicy.html">Shipping Policy</a></li>
                    <li><a href="./ReturnPolicy.html">Return Policy</a></li>
                    <li><a href="./Terms&Conditions.html">Terms &amp; Conditions</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Contact Us</h3>
                    <ul>
                    <li>info@example.com</li>
                    <li>+92 312 8345678</li>
                    <p className={styles.links_heading}>Opening Hours</p>
                    <li>8:00AM - 6:00PM Monday to Friday</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className={`${styles.footer_bottom_banner}`}>
                <p className='text-center'>© 2023 Shah Cleaning Service. All rights reserved.</p>
            </div>
        </footer>

    </>
  )
}

export default footer