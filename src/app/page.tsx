"use client"
import React from 'react'
import "@/styles/_main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FormComp from '@/containers/Form/FormComp';
import Testimonail from '@/containers/Testimonial/Reviews';
import BeforeAfter from "@/containers/BeforeVSAfter/BeforeAfter"
import GetACall from '@/containers/Get A Call/GetACall';
import Stepper from '@/containers/Stepper/Stepper';
import Services from '@/containers/Services/Services';
import WhatMakeUsDifferent from '@/containers/WhatMakeUsDifferent/whatMakeUsDifferent';
import PricingPlan from '@/containers/PricingPlan/PricingPlan';

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <main className="main">
        <FormComp/>
        <Testimonail/>
        <BeforeAfter/>
        <GetACall/>
        <Services/>
        <GetACall/>
        <WhatMakeUsDifferent/>
        <Stepper/>
        <GetACall/>
        <PricingPlan/>
      </main>
    </>
  )
}

export default page