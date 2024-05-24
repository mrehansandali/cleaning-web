import React from 'react'
import styles from "./ourGurantee.module.scss"

type Props = {}

const OurGuarantee = (props: Props) => {
  return (
    <>
    
        <div className={`${styles.container} container mb-5 `}>
            <h2 className={`${styles.heading}`}>Our Satisfaction Guarantee</h2>
            <p className={`${styles.text}`}>100% Satisfaction Guaranteed For General, Deep, Regular and Carpet Cleaning Services</p>
            <div className={`${styles.about} mb-4`}>
                <img className={`${styles.img_1}`} src='/images/about_1.jpg'/>
                <div className={`${styles.content_1}`}>
                    <p>If you are dissatisfied with the job or if there was an oversight from our cleaning team, please contact us within 24 hours of the service and we will return to fix the problem at no additional charge. If you are still unsatisfied with the work, we will provide a partial reimbursement as part of our commitment to ensuring your complete 100% satisfaction.</p>
                </div>
            </div>
            <div className={`${styles.about} ${styles.about_2}`}>
                <div className={`${styles.content_2}`}>
                    <p>Our bond back guarantee means that you do not have to worry about being called back to the property after the final inspection for cleaning or being charged a cleaning fee out of your bond. <br /> If the real estate agent believes something has not been cleaned properly, they will contact us or you can send us their inspection report. We will come out within 72 hours to ensure the job is completed without any additional cost.</p>
                </div>
                <img className={`${styles.img_2}`} src='/images/about_2.jpg'/>
            </div>
        </div>
    
    </>
  )
}

export default OurGuarantee