import React from 'react'
import styles from "./page.module.scss"
type Props = {}

const page = (props: Props) => {

const domesticCleaningPrices = [
  { propertySize: '1 Bedroom, 1 Bathroom', price: '$133.00' },
  { propertySize: '2 Bedroom, 1 Bathroom', price: '$133.00' },
  { propertySize: '3 Bedrooms, 2 Bathrooms', price: '$232.00' },
  { propertySize: '4 Bedrooms, 2 Bathrooms', price: '$265.00' },
  { propertySize: '5 Bedrooms, 2 Bathrooms', price: '$298.00' },
  { propertySize: '5 Bedrooms, 3 Bathrooms', price: '$331.00' },
  { propertySize: '6 Bedrooms, 3 Bathrooms', price: '$364.00' },
  { propertySize: '6 Bedrooms, 4 Bathrooms', price: '$397.00' },
  { propertySize: '7 Bedrooms, 4 Bathrooms', price: '$430.00' }
];
  
const domesticCleaningService = [
  { service: 'Wet Wipe Blinds (per blind)', price: '$5.00' },
  { service: 'Inside Oven', price: '$50.00' },
  { service: 'Carpet Steam Clean (per room or area)', price: '$25.00' },
  { service: 'Sliding Door & Interior Windows (1-3 Bedroom)', price: '$50.00' },
  { service: 'Inside Cupboards (must be empty) (1-3 Bedroom)', price: '$50.00' },
  { service: 'Inside Cupboards (must be empty) (4-6 Bedroom)', price: '$110.00' },
  { service: 'Garage Sweep & Tidy', price: '$20.00' },
  { service: 'Patio', price: '$20.00' },
  { service: 'Deck', price: '$20.00' },
  { service: 'Large Balcony', price: '$50.00' },
  { service: 'Small Balcony', price: '$20.00' },
  { service: 'Inside Fridge', price: '$50.00' },
  { service: 'Spot Clean Walls (30 Minutes) (1-3 Bedroom)', price: '$20.00' },
  { service: 'Spot Clean Walls (1 Hour) (1-3 Bedroom)', price: '$50.00' },
  { service: 'Change Bed Sheets', price: '$5.00' }
];



  return (
    <>
      <h1 className={`${styles.page_heading}`}>Domestic Cleaning Service</h1>
      <div className={`${styles.container}`}>
        <div className={`container`}>
          <h2 className={`${styles.heading}`}>Price List</h2>
          <table className={`${styles.table_container} table table-striped`}>
            <thead>
              <tr>
                <th>Property Size</th>
                <th>Prices</th>
              </tr>
            </thead>
            <tbody>
              {domesticCleaningPrices.map((row,index)=>{
                return (
                  <tr key={index+1}>
                    <td>{row.propertySize}</td>
                    <td>{row.price}</td>
                  </tr>
                )
              })}
              
            </tbody>
          </table>
        </div>
      </div>

      <div className={`${styles.container}`}>
        <div className={`container pb-3`}>
          <h2 className={`${styles.heading}`}>Service Adds-On</h2>
          <table className={`${styles.table_container} m-0 table table-striped`}>
            <thead>
              <tr>
                <th>Service</th>
                <th>Prices</th>
              </tr>
            </thead>
            <tbody>
              {domesticCleaningService.map((row,index)=>{
                return (
                  <tr key={index+1}>
                    <td>{row.service}</td>
                    <td>{row.price}</td>
                  </tr>
                )
              })}
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default page