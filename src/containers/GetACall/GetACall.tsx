import React from 'react'
import styles from "./getACall.module.scss"

type Props = {}

const GetACall = (props: Props) => {
  return (
    <>

        <div className="container text-center my-5">
            <button className={`${styles.callUs} mb-3`}>Get A Quote & Book Online</button>
            <p className={`${styles.text}`}>TAKES LESS THAN 60 SECONDS</p>
        </div>
      
    </>
  )
}

export default GetACall
