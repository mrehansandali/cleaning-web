import React from 'react'
import styles from './stepper.module.scss';

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
        <h2 className={`${styles.heading}`}>Simply book in 4 steps</h2>
        <div className={`${styles.stepper_container}`}>
            <div className={`${styles.stepper_step} not_last`}>
            <div className={`${styles.stepper_circle}`}>1</div>
            <p className={`${styles.stepper_text}`}>Book your services <br /> online or over the phone</p>
            </div>
            <div className={`${styles.stepper_step} not_last`}>
            <div className={`${styles.stepper_circle}`}>2</div>
            <p className={`${styles.stepper_text}`}>Call the Cleaners matches <br /> you with your trusted professional</p>
            </div>
            <div className={`${styles.stepper_step} not_last`}>
            <div className={`${styles.stepper_circle}`}>3</div>
            <p className={`${styles.stepper_text}`}>Manage your bookings online through <br /> your own login portal</p>
            </div>
            <div className={`${styles.stepper_step} not_last`}>
            <div className={`${styles.stepper_circle}`}>4</div>
            <p className={`${styles.stepper_text}`}>Relax and enjoy your <br />clean space</p>
            </div>
        </div>  
    </div>
      
    </>
  )
}

export default Stepper
