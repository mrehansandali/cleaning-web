import React from 'react'
import styles from "./contactIndex.module.scss"
import { IoLocationSharp } from "react-icons/io5";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

type Props = {}

const ContactIndex = (props: Props) => {
  return (
    <>
        <h1 className={`${styles.page_heading}`}>Contact Us</h1>

        <div className={`${styles.container} container`}>
            <div className={`${styles.office}`}>
                <h2 className={`${styles.heading}`}>General Office</h2>
                <div className={`${styles.details} mt-4`}>
                    <div className={`${styles.icon}`}><IoLocationSharp/></div>
                    <div className={`${styles.detail}`}>
                        <h3 className='m-0'>Head Office</h3>
                        <p className='m-0'>Suite# 2/39 Marion St.Parramatta, NSW 2150</p>
                    </div>
                </div>
                <div className={`${styles.details}`}>
                    <div className={`${styles.icon}`}><FaPhoneAlt/></div>
                    <div className={`${styles.detail}`}>
                        <h3 className='m-0'>Phone 24/7</h3>
                        <p className='m-0'>0452 412683</p>
                    </div>
                </div>
                <div className={`${styles.details}`}>
                    <div className={`${styles.icon}`}><IoMdMail/></div>
                    <div className={`${styles.detail}`}>
                        <h3 className='m-0'>Email</h3>
                        <p className='m-0'>info@shahcleaningservices.com.au</p>
                    </div>
                </div>
                <div className={`${styles.details}`}>
                    <div className={`${styles.icon}`}><FaClock/></div>
                    <div className={`${styles.detail}`}>
                        <h3 className='m-0'>Opening Hours</h3>
                        <p className='m-0'>08:00am - 09:00pm, Monday-Sunday</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.getInTouch}`}>
                <h2 className={`${styles.heading}`}>Get In Touch</h2>
                <div className={`${styles.form_container}`}>
                    <form>
                        <div className={`${styles.bottomform}`}>
                            <div className={`${styles.formsec}`}>
                            <div className="mb-3">
                                <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Full Name"
                                // value={username}
                                // onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                type="text"
                                className="form-control"
                                id="phone"
                                placeholder="Phone Number"
                                // value={phone}
                                // onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            </div>
                            <div className={`${styles.formsec}`}>
                            <div className="mb-3">
                                <select className="form-select" id="timing">
                                <option value="ServiceRequired">Service Required</option>
                                <option value="GeneralHouseCleaning">General House Cleaning</option>
                                <option value="DeepCleaning">Deep Cleaning</option>
                                <option value="EndOfLeaseCleaning">End Of Lease Cleaning</option>
                                <option value="RegularCleaning">Regular Cleaning</option>
                                <option value="CarpetCleaning">Carpet Cleaning</option>
                                <option value="ConstructionCleaning">Construction Cleaning</option>
                                <option value="OtherCleaning">Other Cleaning</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Post Code"
                            />
                        </div>
                        <div className='text-center'>
                            <button className={`${styles.submitBtn}`} type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default ContactIndex