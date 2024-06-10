import React from 'react'
import styles from "./page.module.scss"
type Props = {}

const page = (props: Props) => {

const carpetCleaningPrices = [
  { rooms: "1 Room", price: '$110' },
  { rooms: "2 Rooms", price: '$140' },
  { rooms: "3 Rooms", price: '$170' },
  { rooms: "4 Rooms", price: '$200' },
  { rooms: "5 Rooms", price: '$220' },
  { rooms: "6 Rooms", price: '$250' }
];
  
const carpetCleaningService = [
  {place: "Living Room", price: "$20.00"},
  {place: "Staircase", price: "$20.00"},
  {place: "Heavy Duty Stain Removal", price: "$10.00"},
];


  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`container`}>
          <h2 className={`${styles.heading}`}>Price List</h2>
          <table className={`${styles.table_container} table table-striped`}>
            <thead>
              <tr>
                <th>Service</th>
                <th>Prices</th>
              </tr>
            </thead>
            <tbody>
              {carpetCleaningPrices.map((row,index)=>{
                return (
                  <tr key={index+1}>
                    <td>{row.rooms}</td>
                    <td>{row.price}</td>
                  </tr>
                )
              })}
              
            </tbody>
          </table>
        </div>
      </div>

      <div className={`${styles.container}`}>
        <div className={`container`}>
          <h2 className={`${styles.heading}`}>Service Adds-On</h2>
          <table className={`${styles.table_container} table table-striped`}>
            <thead>
              <tr>
                <th>Service</th>
                <th>Prices</th>
              </tr>
            </thead>
            <tbody>
              {carpetCleaningService.map((row,index)=>{
                return (
                  <tr key={index+1}>
                    <td>{row.place}</td>
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