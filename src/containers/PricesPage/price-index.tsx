"use client"
import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import styles from "./pricesPage.module.scss"
import { FaAngleDown, FaBroom, FaBuilding, FaHome } from "react-icons/fa";
import { PiSprayBottleFill } from 'react-icons/pi';
import { GiGloves, GiSofa, GiVacuumCleaner } from 'react-icons/gi';
import { IoIosBed, IoIosConstruct } from 'react-icons/io';
import { FaRug } from 'react-icons/fa6';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}> <div className={`${styles.container}`}> {children} </div></Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

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

const eolCleaningPrices = [
  { propertySize: '1 Bedroom, 1 Bathroom', price: '$342.00' },
  { propertySize: '2 Bedroom, 1 Bathrooms', price: '$419.00' },
  { propertySize: '3 Bedrooms, 2 Bathrooms', price: '$490.50' },
  { propertySize: '4 Bedrooms, 2 Bathrooms', price: '$567.50' },
  { propertySize: '5 Bedrooms, 2 Bathrooms', price: '$644.50' },
  { propertySize: '5 Bedrooms, 3 Bathrooms', price: '$677.50' },
  { propertySize: '6 Bedrooms, 3 Bathrooms', price: '$754.50' },
  { propertySize: '6 Bedrooms, 4 Bathrooms', price: '$787.50' },
  { propertySize: '7 Bedrooms, 4 Bathrooms', price: '$864.50' }
];

const carpetCleaningPrices = [
  { rooms: "1 Room", price: '$110' },
  { rooms: "2 Rooms", price: '$140' },
  { rooms: "3 Rooms", price: '$170' },
  { rooms: "4 Rooms", price: '$200' },
  { rooms: "5 Rooms", price: '$220' },
  { rooms: "6 Rooms", price: '$250' }
];


export default function priceIndex() {
  const [value, setValue] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
    
    <h1 className={`${styles.page_heading}`}>Pricing</h1>
    {windowWidth >= 992 ? (
      <div className="container">
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: "center" }}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            textColor="inherit"
            aria-label="Vertical tabs example"
            sx={{bgcolor: "#000", color: "#fff"}}
          >
            <Tab sx={{justifyContent: "flex-start"}} label="Domestic Cleaning" icon={<FaHome style={{marginTop: "-5px", fontSize:"25px"}}/>} iconPosition="start" {...a11yProps(0)} />
            <Tab sx={{justifyContent: "flex-start"}} label="Carpet Cleaning" icon={<GiVacuumCleaner style={{marginTop: "-5px", fontSize:"25px"}}/>} iconPosition="start" {...a11yProps(1)} />
            <Tab sx={{justifyContent: "flex-start"}} label="End Of Lease Cleaning" icon={<PiSprayBottleFill style={{marginTop: "-5px", fontSize:"25px"}}/>} iconPosition="start" {...a11yProps(2)} />
            <Tab sx={{justifyContent: "flex-start"}} label="Commercial Cleaning" icon={<FaBuilding style={{marginTop: "-5px", fontSize:"25px"}}/>} iconPosition="start" {...a11yProps(3)} />
            <Tab sx={{justifyContent: "flex-start"}} label="Construction Cleaning" icon={<IoIosConstruct style={{marginTop: "-5px", fontSize:"25px"}}/>} iconPosition="start" {...a11yProps(4)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            <h2 className={`${styles.heading}`}>Domestic Cleaning Prices</h2>
            <table className={`${styles.table_container} table table-striped`}>
              <thead>
                <tr>
                  <th>Service</th>
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
            <h2 className={`${styles.heading}`}>Add-ons Service</h2>
            <table className={`${styles.table_container} table table-striped`}>
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
          </TabPanel>

          <TabPanel value={value} index={1}>
            <h2 className={`${styles.heading}`}>Carpet Cleaning Service Prices</h2>
            <table className={`${styles.table_container} table table-striped`}>
              <thead>
                <tr>
                  <th>Property Size</th>
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
          </TabPanel>

          <TabPanel value={value} index={2}>
            <h2 className={`${styles.heading}`}>End Of Lease Cleaning Service Prices</h2>
            <table className={`${styles.table_container} table table-striped`}>
            <thead>
              <tr>
                <th>Property Size</th>
                <th>Prices</th>
              </tr>
            </thead>
            <tbody>
              {eolCleaningPrices.map((row,index)=>{
                return (
                  <tr key={index+1}>
                    <td>{row.propertySize}</td>
                    <td>{row.price}</td>
                  </tr>
                )
              })}
              
            </tbody>
          </table>
          </TabPanel>


          <TabPanel value={value} index={3}>
            <h2 className={`${styles.heading}`}>Commercial Cleaning Service Prices</h2>
            <table className={`${styles.table_container} table table-striped`}>
              <thead>
                <tr>
                  <th>Property Size</th>
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
          </TabPanel>


          <TabPanel value={value} index={4}>
            <h2 className={`${styles.heading}`}>Construction Cleaning Service Prices</h2>
            <div>
              <p>At our organization, we recognize the individuality of each property and the need for a customized approach to cleaning to achieve optimal outcomes. This is why we present personalized pricing tailored to meet your specific cleaning requirements.</p>
              <p>To initiate the process, simply reach out to us at 0451550849 to arrange an appointment with our on-site manager. Our manager will then visit your property at a time convenient for you, evaluating the cleaning needs, considering factors such as property size, service type, and any particular requests you may have.</p>
              <p>Upon assessment of your property, we will furnish you with a comprehensive quote detailing the services to be rendered along with their corresponding costs. Our pricing policy is transparent, ensuring no hidden charges or unexpected expenses.</p>
            </div>
          </TabPanel>

        </Box>
      </div>
      ) : (
      <div className={`${styles.mbl_container}`}>
        <div className={`${styles.accordion_container} container-fluid`}>
          <Accordion>
            <AccordionSummary
              expandIcon={<FaAngleDown className={`${styles.accordion_icon}`} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3 className={`${styles.accordion_heading}`}><FaHome className={`${styles.heading_icon} me-3`}/> Domestic Cleaning</h3>
            </AccordionSummary>
            <AccordionDetails>
              <table className={`${styles.table_container} table table-striped`}>
                <thead>
                  <tr>
                    <th>Service</th>
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
            </AccordionDetails>
          </Accordion>


          <Accordion>
            <AccordionSummary
              expandIcon={<FaAngleDown className={`${styles.accordion_icon}`} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3 className={`${styles.accordion_heading}`}><GiVacuumCleaner className={`${styles.heading_icon} me-3`}/> Carpet Cleaning</h3>
            </AccordionSummary>
            <AccordionDetails>
              <table className={`${styles.table_container} table table-striped`}>
                <thead>
                  <tr>
                    <th>Property Size</th>
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
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<FaAngleDown className={`${styles.accordion_icon}`} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3 className={`${styles.accordion_heading}`}><PiSprayBottleFill className={`${styles.heading_icon} me-3`}/> End Of Lease Cleaning</h3>
            </AccordionSummary>
            <AccordionDetails>
              <table className={`${styles.table_container} table table-striped`}>
                <thead>
                  <tr>
                    <th>Property Size</th>
                    <th>Prices</th>
                  </tr>
                </thead>
                <tbody>
                  {eolCleaningPrices.map((row,index)=>{
                    return (
                      <tr key={index+1}>
                        <td>{row.propertySize}</td>
                        <td>{row.price}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<FaAngleDown className={`${styles.accordion_icon}`} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3 className={`${styles.accordion_heading}`}><PiSprayBottleFill className={`${styles.heading_icon} me-3`}/>Commercial Cleaning</h3>
            </AccordionSummary>
            <AccordionDetails>
              <table className={`${styles.table_container} table table-striped`}>
                <thead>
                  <tr>
                    <th>Property Size</th>
                    <th>Prices</th>
                  </tr>
                </thead>
                <tbody>
                  {eolCleaningPrices.map((row,index)=>{
                    return (
                      <tr key={index+1}>
                        <td>{row.propertySize}</td>
                        <td>{row.price}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<FaAngleDown className={`${styles.accordion_icon}`} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3 className={`${styles.accordion_heading}`}><IoIosConstruct className={`${styles.heading_icon} me-3`}/> Construction Cleaning</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>At our organization, we recognize the individuality of each property and the need for a customized approach to cleaning to achieve optimal outcomes. This is why we present personalized pricing tailored to meet your specific cleaning requirements.</p>
              <p>To initiate the process, simply reach out to us at 0451550849 to arrange an appointment with our on-site manager. Our manager will then visit your property at a time convenient for you, evaluating the cleaning needs, considering factors such as property size, service type, and any particular requests you may have.</p>
              <p>Upon assessment of your property, we will furnish you with a comprehensive quote detailing the services to be rendered along with their corresponding costs. Our pricing policy is transparent, ensuring no hidden charges or unexpected expenses.</p>
            </AccordionDetails>
          </Accordion>
          </div>
        </div>
      )}


    </>
  );
}
