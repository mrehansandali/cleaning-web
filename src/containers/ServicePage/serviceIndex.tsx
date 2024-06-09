import React from 'react'
import styles from "./service-index.module.scss"
import Services from '../Services/Services'
import PricingPlan from '../PricingPlan/PricingPlan'
import OurGuarantee from '../OurGuarantee/OurGuarantee'

type Props = {}

const serviceIndex = (props: Props) => {
  return (
    <>
        <h1 className={`${styles.page_heading}`}>What We Offering You</h1>
        <Services/>
        <OurGuarantee/>
        <PricingPlan/>
    </>
  )
}

export default serviceIndex