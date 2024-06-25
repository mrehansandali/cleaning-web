import React from 'react'
import styles from "./page.module.scss"
type Props = {}

const page = (props: Props) => {

  return (
    <>
      <h1 className={`${styles.page_heading}`}>Construction Cleaning Service</h1>
      <div className={`${styles.container}`}>
        <div className={`container`}>
            <p>At our organization, we recognize the individuality of each property and the need for a customized approach to cleaning to achieve optimal outcomes. This is why we present personalized pricing tailored to meet your specific cleaning requirements.</p>
            <p>To initiate the process, simply reach out to us at 0451550849 to arrange an appointment with our on-site manager. Our manager will then visit your property at a time convenient for you, evaluating the cleaning needs, considering factors such as property size, service type, and any particular requests you may have.</p>
            <p>Upon assessment of your property, we will furnish you with a comprehensive quote detailing the services to be rendered along with their corresponding costs. Our pricing policy is transparent, ensuring no hidden charges or unexpected expenses.</p>
        </div>
      </div>
    </>
  )
}

export default page