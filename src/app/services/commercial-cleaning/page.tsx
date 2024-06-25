import React from 'react'
import styles from "./page.module.scss"
type Props = {}

const page = (props: Props) => {

  return (
    <>
      <h1 className={`${styles.page_heading}`}>Commercial Cleaning Service</h1>
      <div className={`${styles.container}`}>
        <div className={`container`}>
          <p className='text-center'>Schedule A Call To Know The Details.</p>
        </div>
      </div>
    </>
  )
}

export default page