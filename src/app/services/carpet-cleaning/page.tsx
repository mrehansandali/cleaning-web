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
      <h1 className={`${styles.page_heading}`}>Carpet Cleaning Service</h1>

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

      {/* <div className="container">
        <h2 className='text-center'>Our Cleaning Process for End Of Lease</h2>
        <div className={`${styles.cleaning_process}`}>
            <div className={`${styles.step}`}>
            <div className={`${styles.circle}`}>
                <div className={`${styles.round}`}>1</div>
            </div>
            <div className={`${styles.content}`}>
                <h3>Top to Bottom Approach</h3>
                <p>We always start our cleaning from the top of the room and work our way down. This ensures maximum efficiency and optimal results.</p>
            </div>
            </div>
            <div className={`${styles.step}`}>
            <div className={`${styles.circle}`}>
                <div className={`${styles.round}`}>2</div>
            </div>
            <div className={`${styles.content}`}>
                <h3>Cobweb Removal</h3>
                <p>Removing cobwebs from ceilings and high areas is essential for a thorough cleaning of the property.</p>
            </div>
            </div>
            <div className={`${styles.step}`}>
            <div className={`${styles.circle}`}>
                <div className={`${styles.round}`}>3</div>
            </div>
            <div className={`${styles.content}`}>
                <h3>Cleaning Fans and Vents</h3>
                <p>To ensure a fresh and well-ventilated room, we thoroughly clean ceiling fans and vents.</p>
            </div>
            </div>
            <div className={`${styles.step}`}>
            <div className={`${styles.circle}`}>
                <div className={`${styles.round}`}>4</div>
            </div>
            <div className={`${styles.content}`}>
                <h3>Inspecting Pretreated Areas</h3>
                <p>We revisit pretreated areas to confirm they meet our cleaning standards and desired results.</p>
            </div>
            </div>
            <div className={`${styles.step}`}>
            <div className={`${styles.circle}`}>
                <div className={`${styles.round}`}>5</div>
            </div>
            <div className={`${styles.content}`}>
                <h3>Kitchen Cleaning</h3>
                <p>In the kitchen, we clean from the top cabinets down to the lower ones, ensuring countertops and walls are free from grime and splashes.</p>
            </div>
            </div>
            <div className={`${styles.step}`}>
            <div className={`${styles.circle}`}>
                <div className={`${styles.round}`}>6</div>
            </div>
            <div className={`${styles.content}`}>
                <h3>Window Cleaning</h3>
                <p>We take special care to clean windows thoroughly, allowing natural light to highlight any missed spots during cleaning.</p>
            </div>
            </div>
            <div className={`${styles.step}`}>
            <div className={`${styles.circle}`}>
                <div className={`${styles.round}`}>7</div>
            </div>
            <div className={`${styles.content}`}>
                <h3>Washing Walls and Wiping Surfaces</h3>
                <p>We wipe down all walls and appliances as needed, ensuring a fresh and rejuvenated appearance for the property.</p>
            </div>
            </div>
            <div className={`${styles.step}`}>
            <div className={`${styles.circle}`}>
                <div className={`${styles.round}`}>8</div>
            </div>
            <div className={`${styles.content}`}>
                <h3>Cleaning Doors and Frames</h3>
                <p>All doors and frames are cleaned to remove accumulated dirt and grime.</p>
            </div>
            </div>
            <div className={`${styles.step}`}>
            <div className={`${styles.circle}`}>
                <div className={`${styles.round}`}>9</div>
            </div>
            <div className={`${styles.content}`}>
                <h3>Wardrobe and Mirror Cleaning</h3>
                <p>We clean wardrobes and mirrors to ensure the space is ready for new tenants.</p>
            </div>
            </div>
            <div className={`${styles.step}`}>
            <div className={`${styles.circle}`}>
                <div className={`${styles.round}`}>10</div>
            </div>
            <div className={`${styles.content}`}>
                <h3>Cleaning Laundry Area</h3>
                <p>We thoroughly clean and disinfect all built-in appliances in the laundry room, making them ready for the next tenants.</p>
            </div>
            </div>
            <div className={`${styles.step}`}>
            <div className={`${styles.circle}`}>
                <div className={`${styles.round}`}>11</div>
            </div>
            <div className={`${styles.content}`}>
                <h3>Bathroom Cleaning</h3>
                <p>We thoroughly clean the bathroom, including floors, grout, mirrors, and walls, to restore its shine.</p>
            </div>
            </div>
            <div className={`${styles.step}`}>
            <div className={`${styles.circle}`}>
                <div className={`${styles.round}`}>12</div>
            </div>
            <div className={`${styles.content}`}>
                <h3>Skirting Board and Track Cleaning</h3>
                <p>All skirting boards in the house are cleaned to remove marks and build-up from regular use.</p>
            </div>
            </div>
            <div className={`${styles.step}`}>
            <div className={`${styles.circle} ${styles.last_circle}`}>
                <div className={`${styles.round}`}>13</div>
            </div>
            <div className={`${styles.content}`}>
                <h3>Floor Cleaning</h3>
                <p>Floors are thoroughly scrubbed and vacuumed to eliminate any remaining dirt and grime, ensuring a clean surface.</p>
            </div>
            </div>
        </div>
      </div> */}
    </>
  )
}

export default page