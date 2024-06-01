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
        }, 8000);
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
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul className={`${styles.dropdown} dropdown-menu`}>
                                <li><a className="dropdown-item" href="#">House Cleaning</a></li>
                                <li><a className="dropdown-item" href="#">Deep Cleaning</a></li>
                                <li><a className="dropdown-item" href="#">End Of Lease Cleaning</a></li>
                                <li><a className="dropdown-item" href="#">Regular Cleaning</a></li>
                                <li><a className="dropdown-item" href="#">Carpet Cleaning</a></li>
                                <li><a className="dropdown-item" href="#">Construction Cleaning</a></li>
                                <li><a className="dropdown-item" href="#">Other Cleaning</a></li>
                            </ul>
                            </li>
                            <li className="nav-item p-1"><Link className="nav-link active" aria-current="page" href="/prices">Prices</Link></li>
                            <li className="nav-item p-1"><a className="nav-link active" aria-current="page" href="#">Reviews</a></li>
                            <li className="nav-item p-1"><a className="nav-link active" aria-current="page" href="#">About Us</a></li>
                            <li className="nav-item p-1"><a className="nav-link active" aria-current="page" href="#">Contact Us</a></li>
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