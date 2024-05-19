import React from 'react'
import "./_main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

import FormComp from '@/containers/Form/FormComp';
import Testimonail from '@/containers/Testimonial/Reviews';

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <main className="main">
        <FormComp/>
        <Testimonail/>
      </main>
    </>
  )
}

export default page