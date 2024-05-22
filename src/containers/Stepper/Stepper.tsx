import React from 'react'
import styles from './stepper.module.scss';
import { IoCall } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa6";
import { TbHomeStar } from "react-icons/tb";

const Stepper = () => {

    const steps = [
        'Book your services online or over the phone',
        'Call the Cleaners matches you with your trusted professional',
        'Manage your bookings online through your own login portal',
        'Relax and enjoy your clean space',
      ];

  return (
    <>

    <div className="container">
        <h2 className={`${styles.heading}`}>Simply book in 3 steps</h2>
        <div className={`${styles.stepper_container}`}>
            <div className={`${styles.stepper_step} not_last`}>
            <div className={`${styles.stepper_circle}`}><IoCall className={`${styles.steps_icon}`}/></div>
            <p className={`${styles.stepper_text}`}>Book your services <br /> online or over the phone</p>
            </div>
            <div className={`${styles.stepper_step} not_last`}>
            <div className={`${styles.stepper_circle}`}><FaHandshake className={`${styles.steps_icon}`}/></div>
            <p className={`${styles.stepper_text}`}>Call the Cleaners matches <br /> you with your trusted professional</p>
            </div>
            {/* <div className={`${styles.stepper_step} not_last`}>
            <div className={`${styles.stepper_circle}`}><IoCall className={`${styles.steps_icon}`}/></div>
            <p className={`${styles.stepper_text}`}>Manage your bookings online through <br /> your own login portal</p>
            </div> */}
            <div className={`${styles.stepper_step} not_last`}>
            <div className={`${styles.stepper_circle}`}><TbHomeStar className={`${styles.steps_icon}`}/></div>
            <p className={`${styles.stepper_text}`}>Relax and enjoy your <br />clean space</p>
            </div>
        </div>  
    </div>
      
    </>
  )
}

export default Stepper
