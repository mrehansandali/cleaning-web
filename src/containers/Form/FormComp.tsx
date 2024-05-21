"use client"
import React, { useState } from 'react'
import styles from "./form.module.scss"
import { FaHeadset } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

type Props = {}

const FormComp = (props: Props) => {

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')




  return (
    <>
    <div className={`${styles.container} container-fluid`}>
      <div className="container">
        <h1 className='mb-2 text-white text-center fs-2'>5 Star Rated Cleaning Company in Sydney</h1>
        <h4 className='mb-3 text-white text-center fs-5'>Use our booking form to create an instant quote for any cleaning services</h4>
        <form>
          <div className={`${styles.bottomform}`}>
            <div className={`${styles.formsec}`}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className={`${styles.formsec}`}>
              <div className="mb-3">
                <select className="form-select" id="timing">
                  <option value="ServiceRequired">Service Required</option>
                  <option value="GeneralHouseCleaning">General House Cleaning</option>
                  <option value="DeepCleaning">Deep Cleaning</option>
                  <option value="EndOfLeaseCleaning">End Of Lease Cleaning</option>
                  <option value="RegularCleaning">Regular Cleaning</option>
                  <option value="CarpetCleaning">Carpet Cleaning</option>
                  <option value="ConstructionCleaning">Construction Cleaning</option>
                  <option value="OtherCleaning">Other Cleaning</option>
                </select>
              </div>
              <div className="mb-3">
                <select className="form-select" id="timing">
                  <option value="Bedrooms">Bedrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
              </div>
              <div className="mb-3">
                <select className="form-select" id="timing">
                  <option value="Bathrooms">Bathrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Post Code"
            />
          </div>
          <div className='text-center'>
            <button className={`${styles.submitBtn}`} type="submit">Get A Quote</button>
          </div>
        </form>
      </div>
      <div className="container">
        <div className={`${styles.points} my-4`}>
          <li><TiTick className={`${styles.tick}`}/> Trusted Cleaners</li>
          <li><TiTick className={`${styles.tick}`}/> 5 Star Rated Service</li>
          <li><TiTick className={`${styles.tick}`}/> 100% Happiness Guarantee</li>
          <li><TiTick className={`${styles.tick}`}/> Fully Insured</li>
        </div>
        <div className='text-center mb-4'><button className={`${styles.callBtn}`}>+92 345 6789012</button></div>
        <div className={`${styles.callus}`}><FaHeadset className={`${styles.headphone}`}/> <span>CALL US NOW </span>: 08:00am - 09:00pm, Monday - Sunday for booking assistance</div>
      </div>
    </div>
    </>
  )
}

export default FormComp