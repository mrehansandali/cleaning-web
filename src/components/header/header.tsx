"use client"
import React, { useEffect, useState } from 'react'
import styles from "./header.module.scss"
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
import DiscountPopUp from '@/containers/DiscountPopUp/DiscountPopUp';

type Props = {}

const header = (props: Props) => {
    const [popUpShow, setPopUpShow] = useState(false);
    const togglePopup = () => setPopUpShow(!popUpShow);
    
    useEffect(() => {
        setTimeout(() => {
            setPopUpShow(true)
        }, 15000);
    }, [])

    return (
    <>
        <header>
            <nav className={`${styles.navbar} p-1 navbar navbar-expand-lg`}>
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <img
                        className={styles.logo}
                        alt="logo"
                        src='https://res.cloudinary.com/divbpcro8/image/upload/v1716553941/logo_hou6e7.jpg'
                        />
                    </Link>
                    <RxHamburgerMenu className={styles.menu_icon} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className={`${styles.mbl_menu} collapse navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item p-1"><a className="nav-link active" aria-current="page" href="#">Home</a></li> */}
                            <li className="nav-item p-1 dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul className={`${styles.dropdown} dropdown-menu`}>
                                <li><Link className="dropdown-item" href="/services">All Services</Link></li>
                                <li><Link className="dropdown-item" href="/services/domestic-cleaning">Domestic Cleaning</Link></li>
                                <li><Link className="dropdown-item" href="/services/carpet-cleaning">Carpet Cleaning</Link></li>
                                <li><Link className="dropdown-item" href="/services/end-of-lease-cleaning">End Of Lease Cleaning</Link></li>
                                <li><Link className="dropdown-item" href="/services/commercial-cleaning">Commercial Cleaning</Link></li>
                                <li><Link className="dropdown-item" href="/services/construction-cleaning">Construction Cleaning</Link></li>
                            </ul>
                            </li>
                            <li className="nav-item p-1"><Link className="nav-link active" aria-current="page" href="/prices">Prices</Link></li>
                            <li className="nav-item p-1"><Link className="nav-link active" aria-current="page" href="/about">About Us</Link></li>
                            <li className="nav-item p-1"><Link className="nav-link active" aria-current="page" href="/contact">Contact Us</Link></li>
                        </ul>
                        <div>
                            <button onClick={() => setPopUpShow(!popUpShow)} className={styles.btn}>Get 20% OFF</button>
                            <button className={`${styles.btn} ms-2`}>Book Now</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        
        <DiscountPopUp toggle={togglePopup} isOpenPopup={popUpShow}/>  
    </> 
  )
}

export default header