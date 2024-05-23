"use client"
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from "./pricingPlan.module.scss"
import { TiTick } from "react-icons/ti";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [active, setActive] = useState(1)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //////////////////arrays//////////////////

  const planone_1 = [
    "Clean hallways & staircases",
    "Vacuum & mop all floors",
    "Dust & wipe down all surfaces",
    "Empty bins",
    "Make beds (upon request)",
    "Dust furniture",
    "Quick de-clutter of floors",
    "Wipe down electronics",
    "Wipe down outside wardrobes",
    "Dust & wipe down all surfaces",
    "Clean all light switches & doorknobs"
  ];
  const planone_2 = [
    "Clean floors",
    "Scrub toilets",
    "Clean outside of cabinets & drawers",
    "Clean bathtub & shower",
    "Clean sink & taps",
    "Clean mirrors",
    "Clean & wipe down all bench-top surfaces",
    "Clean & dry buff sink/tub & taps",
    "Remove all dust & lint",
    "Clean, vacuum, & mop floors",
    "Clean all light switches & doorknobs"
  ];
  const planone_3 = [
    "Stack & run the dishwasher (upon request)",
    "Wipe down the outside of appliances",
    "Wet-wipe outside of the fridge",
    "Wet-wipe the outside of the oven",
    "Clean the outside of cabinets & drawers",
    "Clean all surfaces",
    "Clean sink",
    "Clean stove",
    "Vacuum & mop floors"
  ];
  
  
  

  return (
    <div className={`${styles.container} container mb-5`}>
        <Box sx={{ width: '100%' }}>
        <Box>
            <Tabs className={`${styles.tabs}`} value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab onClick={()=>setActive(1)} className={`${styles.tab} ${active === 1 ? styles.active : ""}`} label="General Cleaning" {...a11yProps(0)} />
                <Tab onClick={()=>setActive(2)} className={`${styles.tab} ${active === 2 ? styles.active : ""}`} label="Deep Cleaning" {...a11yProps(1)} />
                <Tab onClick={()=>setActive(3)} className={`${styles.tab} ${active === 3 ? styles.active : ""}`} label="End Of Lease Cleaning" {...a11yProps(2)} />
            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            <div className={`${styles.pricing_details}`}>
                <p className={`${styles.tab_heading}`}>Saves time and energy by contacting Call the Cleaners to maintain a <br /> healthy and hygienic living environment.</p>
                <button className={`${styles.tab_btn}`}>Start From $150</button>
                <div className={`${styles.plan_details} mt-3`}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className={`${styles.plan}`}>
                        <p className={`${styles.plan_heading}`}>Bedroom</p>
                        <ul className={`${styles.ul}`}>
                        {planone_1.map((item,index) => {
                            return (
                                    <li key={index+1}>
                                        <TiTick className={`${styles.li_icon}`}/>
                                        <p className="m-0">{item}</p>
                                    </li>
                            )
                        })}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={`${styles.plan}`}>
                        <p className={`${styles.plan_heading}`}>Bathroom</p>
                        <ul className={`${styles.ul}`}>
                        {planone_2.map((item,index) => {
                            return (
                                    <li key={index+1}>
                                        <TiTick className={`${styles.li_icon}`}/>
                                        <p className="m-0">{item}</p>
                                    </li>
                            )
                        })}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={`${styles.plan}`}>
                        <p className={`${styles.plan_heading}`}>Kitchen</p>
                        <ul className={`${styles.ul}`}>
                        {planone_3.map((item,index) => {
                            return (
                                    <li key={index+1}>
                                        <TiTick className={`${styles.li_icon}`}/>
                                        <p className="m-0">{item}</p>
                                    </li>
                            )
                        })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            <div className={`${styles.pricing_details}`}>
              <p className={`${styles.tab_heading}`}>Get thorough cleaning of hard-to-reach areas and neglected spaces to revive and restore <br /> the original beauty of your home with Call the Cleaners.</p>
              <button className={`${styles.tab_btn}`}>Start From $200</button>
              <div className={`${styles.plan_details} mt-3`}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className={`${styles.plan}`}>
                        <p className={`${styles.plan_heading}`}>Bedroom</p>
                        <ul className={`${styles.ul}`}>
                        {planone_2.map((item,index) => {
                            return (
                                    <li key={index+1}>
                                        <TiTick className={`${styles.li_icon}`}/>
                                        <p className="m-0">{item}</p>
                                    </li>
                            )
                        })}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={`${styles.plan}`}>
                        <p className={`${styles.plan_heading}`}>Bathroom</p>
                        <ul className={`${styles.ul}`}>
                        {planone_3.map((item,index) => {
                            return (
                                    <li key={index+1}>
                                        <TiTick className={`${styles.li_icon}`}/>
                                        <p className="m-0">{item}</p>
                                    </li>
                            )
                        })}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={`${styles.plan}`}>
                        <p className={`${styles.plan_heading}`}>Kitchen</p>
                        <ul className={`${styles.ul}`}>
                        {planone_1.map((item,index) => {
                            return (
                                    <li key={index+1}>
                                        <TiTick className={`${styles.li_icon}`}/>
                                        <p className="m-0">{item}</p>
                                    </li>
                            )
                        })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
            <div className={`${styles.pricing_details}`}>
              <p className={`${styles.tab_heading}`}>Call the Cleaners helps retrieve the security deposit in full and presents <br />the property in the best possible condition for new tenants.</p>
              <button className={`${styles.tab_btn}`}>Start From $350</button>
              <div className={`${styles.plan_details} mt-3`}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className={`${styles.plan}`}>
                        <p className={`${styles.plan_heading}`}>Bedroom</p>
                        <ul className={`${styles.ul}`}>
                        {planone_3.map((item,index) => {
                            return (
                                    <li key={index+1}>
                                        <TiTick className={`${styles.li_icon}`}/>
                                        <p className="m-0">{item}</p>
                                    </li>
                            )
                        })}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={`${styles.plan}`}>
                        <p className={`${styles.plan_heading}`}>Bathroom</p>
                        <ul className={`${styles.ul}`}>
                        {planone_1.map((item,index) => {
                            return (
                                    <li key={index+1}>
                                        <TiTick className={`${styles.li_icon}`}/>
                                        <p className="m-0">{item}</p>
                                    </li>
                            )
                        })}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={`${styles.plan}`}>
                        <p className={`${styles.plan_heading}`}>Kitchen</p>
                        <ul className={`${styles.ul}`}>
                        {planone_2.map((item,index) => {
                            return (
                                    <li key={index+1}>
                                        <TiTick className={`${styles.li_icon}`}/>
                                        <p className="m-0">{item}</p>
                                    </li>
                            )
                        })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </CustomTabPanel>
        </Box>
    </div>
  );
}
