import React from 'react'
import styles from "./getACall.module.scss"

type Props = {}

const GetACall = (props: Props) => {
  return (
    <>

        <div className="container text-center my-5">
            <a href='tel:0452 412683' className={`${styles.callUs}`}>Get A Quote & Book Online</a>
            <p className={`${styles.text} mt-4`}>TAKES LESS THAN 60 SECONDS</p>
        </div>
      
    </>
  )
}

export default GetACall
