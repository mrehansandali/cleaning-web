import React from 'react'
import styles from "./aboutIndex.module.scss"
import Reviews from '../Testimonial/Reviews'

type Props = {}

const AboutIndex = (props: Props) => {
  return (
    <>

        <h1 className={`${styles.page_heading}`}>About Us</h1>

        <div className={`${styles.container} container`}>

            <div className={`${styles.hero} mb-4`}>
                <div className={`${styles.content}`}>
                    <h3><span>Top-Rated cleaning service</span> <br /> in Sydney</h3>
                    <p>We aimed to make a positive impact in people's lives, which led us to create an innovative platform for reliable and trustworthy professional cleaners. At <span>Shah Cleaning Services</span>, we prioritize top-quality service, affordability, and the extensive industry experience of our cleaners. Our commitment to understanding our clients' needs makes us true partners in cleanliness. By assembling a team of the best professionals and a management team dedicated to client service excellence, we strive to uphold our core values. We welcome passionate and driven individuals who share our values to join our team, whether in head office, field cleaning teams, trainers, or support roles. Our mission is singular: to provide industry-leading customer service and exceptional cleaning quality. We value our cleaners' hard work and dedication, rewarding them with above-industry rates and numerous company perks. Our ultimate goal is to make high-quality cleaning services accessible to all by providing them at the most affordable prices possible.</p>
                </div>
                <img className={`${styles.img}`} src='https://res.cloudinary.com/divbpcro8/image/upload/v1717413897/aboutHero_dgazpl.jpg'/>
            </div>


            <div className={`${styles.about} mb-4`}>
                <img className={`${styles.img_1}`} src='https://res.cloudinary.com/divbpcro8/image/upload/v1717416461/whychoose_vxjfcu.jpg'/>
                <div className={`${styles.content_1}`}>
                    <h4>Why choose Shah Cleaning Services?</h4>
                    <p>While Dyson vacuums are excellent, they seldom rekindle your love for your home - but we can! Through our meticulous checklists and vetted cleaners, we guarantee to leave you and your home feeling happier, more relaxed, and better than ever before. Our objective is to reignite the spark in your living space. Our team is bonded, dependable, fully insured, and background-checked, ensuring your security and peace of mind. Because ultimately, we're not just cleaning - we're safeguarding your most valuable asset.</p>
                </div>
            </div>
            <div className={`${styles.about} ${styles.about_2}`}>
                <div className={`${styles.content_2}`}>
                    <h4>Our Mission</h4>
                    <p>Our mission is straightforward: After a long day at a 9-5 job, cleaning is probably the last thing you want to tackle when you return home. We understand completely and are here to help. Our goal is to remove those essential yet bothersome tasks from your to-do list, freeing up your valuable time for activities you truly enjoy.</p>
                </div>
                <img className={`${styles.img_2}`} src='https://res.cloudinary.com/divbpcro8/image/upload/v1717416633/ourMission_g0jwad.jpg'/>
            </div>
        </div>

        <div className={`${styles.guarantee_section} mt-4`}>
            <img className={`${styles.img}`} src='https://res.cloudinary.com/divbpcro8/image/upload/v1717417873/satisfactionGuranteed_nqbyjy.jpg'/>
            <div className={`${styles.content}`}>
                <p>If you're unhappy with our service or if there's been an oversight by our cleaning team, please reach out to us within 24 hours of the service. We'll promptly return to address the issue at no extra cost. If you're still not satisfied, we'll offer a partial reimbursement as part of our dedication to ensuring your total 100% satisfaction.</p>
            </div>
        </div>

        <Reviews/>

    
    </>
  )
}

export default AboutIndex