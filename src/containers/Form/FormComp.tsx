import React, { useState } from 'react'
import styles from "./form.module.scss"
import { FaHeadset } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import ResOkPopup from "@/containers/OkResPopup/OkResPopup"

type Props = {}

const FormComp = (props: Props) => {
  const [popUpShow, setPopUpShow] = useState(false);
  const togglePopup = () => setPopUpShow(!popUpShow);
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const [postCode, setPostCode] = useState('')
  const [service, setService] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  const [bathrooms, setBathrooms] = useState('')

  const handleSubmit = (e:any) => { 
    e.preventDefault()

    const data = {
      username,
      email,
      phone,
      postCode,
      service,
      bedrooms,
      bathrooms,
    };

    if (username != "" && email != "" && phone != "" && service != "" && service != "ServiceRequired" && bedrooms != "" && bedrooms != "Bedrooms" && bathrooms != "" && bathrooms != "Bathrooms" && postCode != "" ) {
    fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        if (res.status === 200) {
          setUsername('')
          setEmail('')
          setPhone('')
          setBedrooms('')
          setBathrooms('')
          setService('')
          setPostCode('')
          setPopUpShow(true)
        } else{
          alert("Something Went Wrong")
        }
      })
    } else{
      alert("Fill All The Fields")
    }
  }

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
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  required
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
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className={`${styles.formsec}`}>
              <div className="mb-3">
                <select required value={service} onChange={(e) => setService(e.target.value)} className="form-select" id="timing">
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
                <select required value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="form-select" id="timing">
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
                <select required value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} className="form-select" id="timing">
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
              required
              placeholder="Post Code"
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
            />
          </div>
          <div className='text-center'>
            <button onClick={(e)=>{handleSubmit(e)}} className={`${styles.submitBtn}`} type="submit">Get A Quote</button>
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
        <div className='text-center mb-4'><a href='tel:0452 412683' className={`${styles.callBtn}`}>0452 412683</a></div>
        <div className={`${styles.callus}`}><FaHeadset className={`${styles.headphone}`}/> <span>CALL US NOW </span>: 08:00am - 09:00pm, Monday - Sunday for booking assistance</div>
      </div>
    </div>
    <ResOkPopup toggle={togglePopup} isOpenPopup={popUpShow}/>
    </>
  )
}

export default FormComp