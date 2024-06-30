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
import GetACall from '@/containers/GetACall/GetACall';
import Stepper from '@/containers/Stepper/Stepper';
import Services from '@/containers/Services/Services';
import WhatMakeUsDifferent from '@/containers/WhatMakeUsDifferent/whatMakeUsDifferent';
import PricingPlan from '@/containers/PricingPlan/PricingPlan';
import PriceList from '@/containers/PriceList/PriceList';
import ReasonToCallUs from '@/containers/ReasonToCallUs/ReasonToCallUs';
import OurGuarantee from '@/containers/OurGuarantee/OurGuarantee';

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <FormComp/>
      <Testimonail/>
      <BeforeAfter/>
      <GetACall/>
      <Services/>
      <WhatMakeUsDifferent/>
      <Stepper/>
      <PricingPlan/>
      <GetACall/>
      <PriceList/>
      <OurGuarantee/>
      <ReasonToCallUs/>
    </>
  )
}

const port = process.env.port || 8080;

export default page
