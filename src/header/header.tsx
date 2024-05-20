import React from 'react'
import styles from "./header.module.scss"
import logo from "../../public/images/logo.jpeg"
import Image from 'next/image';

type Props = {}

const header = (props: Props) => {

    return (
    <>
        <header>
            <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Image
                        className={styles.logo}
                        alt="logo"
                        src={logo}
                        style={{
                        height: 60,
                        width: 60
                        }}
                        />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">House Cleaning</a></li>
                                <li><a className="dropdown-item" href="#">Deep Cleaning</a></li>
                                <li><a className="dropdown-item" href="#">End Of Lease Cleaning</a></li>
                                <li><a className="dropdown-item" href="#">Regular Cleaning</a></li>
                                <li><a className="dropdown-item" href="#">Carpet Cleaning</a></li>
                                <li><a className="dropdown-item" href="#">Construction Cleaning</a></li>
                                <li><a className="dropdown-item" href="#">Other Cleaning</a></li>
                            </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">About Us</a></li>
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Prices</a></li>
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Reviews</a></li>
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Contact Us</a></li>
                        </ul>
                        <div>
                            <button className={styles.btn}>Log In</button>
                            <button className={`${styles.btn} ms-2`}>Book Now</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </> 
  )
}

export default header