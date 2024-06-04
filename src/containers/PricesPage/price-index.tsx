"use client"
import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import styles from "./pricesPage.module.scss"
import { FaAngleDown, FaBroom, FaBuilding, FaHome } from "react-icons/fa";
import { PiSprayBottleFill } from 'react-icons/pi';
import { GiGloves, GiSofa, GiVacuumCleaner } from 'react-icons/gi';
import { IoIosBed } from 'react-icons/io';
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#112A46',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#8080802b",
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const houseCleaningPrices = [
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

const deepCleaningPrices = [
  { propertySize: '1 Bedroom, 1 Bathroom', price: '$166.00' },
  { propertySize: '2 Bedroom, 1 Bathrooms', price: '$199.00' },
  { propertySize: '3 Bedrooms, 2 Bathrooms', price: '$265.00' },
  { propertySize: '4 Bedrooms, 2 Bathrooms', price: '$331.00' },
  { propertySize: '5 Bedrooms, 2 Bathrooms', price: '$364.00' },
  { propertySize: '5 Bedrooms, 3 Bathrooms', price: '$397.00' },
  { propertySize: '6 Bedrooms, 3 Bathrooms', price: '$430.00' },
  { propertySize: '6 Bedrooms, 4 Bathrooms', price: '$463.00' },
  { propertySize: '7 Bedrooms, 4 Bathrooms', price: '$496.00' }
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

const regularCleaningPrices = [
  { propertySize: '1 Bedroom, 1 Bathroom', weekly: '$104.40', fortnightly: '$111.55', everyThreeWeeks: '$118.70', monthly: '$125.85' },
  { propertySize: '2 Bedrooms, 1 Bathroom', weekly: '$104.40', fortnightly: '$111.55', everyThreeWeeks: '$118.70', monthly: '$125.85' },
  { propertySize: '3 Bedrooms, 2 Bathrooms', weekly: '$183.60', fortnightly: '$195.70', everyThreeWeeks: '$207.80', monthly: '$219.90' },
  { propertySize: '4 Bedrooms, 2 Bathrooms', weekly: '$210.00', fortnightly: '$223.75', everyThreeWeeks: '$237.50', monthly: '$251.25' },
  { propertySize: '4 Bedrooms, 3 Bathrooms', weekly: '$236.40', fortnightly: '$251.80', everyThreeWeeks: '$267.20', monthly: '$282.60' },
  { propertySize: '5 Bedrooms, 3 Bathrooms', weekly: '$262.80', fortnightly: '$279.85', everyThreeWeeks: '$296.90', monthly: '$313.95' },
  { propertySize: '6 Bedrooms, 3 Bathrooms', weekly: '$289.20', fortnightly: '$307.90', everyThreeWeeks: '$326.60', monthly: '$345.30' },
  { propertySize: '7 Bedrooms, 4 Bathrooms', weekly: '$342.00', fortnightly: '$364.00', everyThreeWeeks: '$386.00', monthly: '$408.00' }
];

const carpetCleaningPrices = [
  { rooms: "1 Room", price: '$110' },
  { rooms: "2 Rooms", price: '$140' },
  { rooms: "3 Rooms", price: '$170' },
  { rooms: "4 Rooms", price: '$200' },
  { rooms: "5 Rooms", price: '$220' },
  { rooms: "6 Rooms", price: '$250' }
];

const mattressCleaningPrices = [
  { type: 'Single Mattress', price: '$110' },
  { type: 'Double Mattress', price: '$140' },
  { type: 'Queen Size Mattress', price: '$170' },
  { type: 'King Mattress', price: '$200' }
];

const rugCleaningPrices = [
  { description: '1 Rug (4ft to 10ft)', price: '$90' },
  { description: '2 Rug (4ft to 10ft)', price: '$120' },
  { description: '3 Rug (4ft to 10ft)', price: '$140' },
  { description: '4 Rug (4ft to 10ft)', price: '$170' },
  { description: 'Small Rug (Under 4ft) (Minimum 4)', price: '$15 each' }
];

const upholsteryCleaningPrices = [
  { description: '1 Seater', price: '$90' },
  { description: '2 Seater', price: '$110' },
  { description: '3 Seater', price: '$140' },
  { description: '4 Seater', price: '$160' },
  { description: '5 Seater', price: '$200' },
  { description: 'Dining chair (Minimum 4)', price: '$20 each' },
  { description: 'Office chair (Minimum 4)', price: '$20 each' },
  { description: 'Armchair (Minimum 4)', price: '$20 each' }
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
            <Tab sx={{justifyContent: "flex-start"}} className='text-left' label="House Cleaning" icon={<FaHome style={{marginTop: "-5px", fontSize:"25px"}}/>} iconPosition="start" {...a11yProps(0)} />
            <Tab sx={{justifyContent: "flex-start"}} label="Deep Cleaning" icon={<FaBroom style={{marginTop: "-5px", fontSize:"25px"}}/>} iconPosition="start" {...a11yProps(1)} />
            <Tab sx={{justifyContent: "flex-start"}} label="End Of Lease Cleaning" icon={<PiSprayBottleFill style={{marginTop: "-5px", fontSize:"25px"}}/>} iconPosition="start" {...a11yProps(2)} />
            <Tab sx={{justifyContent: "flex-start"}} label="Regular Cleaning" icon={<GiGloves style={{marginTop: "-5px", fontSize:"25px"}}/>} iconPosition="start" {...a11yProps(3)} />
            <Tab sx={{justifyContent: "flex-start"}} label="Carpet Cleaning" icon={<GiVacuumCleaner style={{marginTop: "-5px", fontSize:"25px"}}/>} iconPosition="start" {...a11yProps(4)} />
            <Tab sx={{justifyContent: "flex-start"}} label="Mattress Cleaning" icon={<IoIosBed style={{marginTop: "-5px", fontSize:"25px"}}/>} iconPosition="start" {...a11yProps(5)} />
            <Tab sx={{justifyContent: "flex-start"}} label="Rug Cleaning" icon={<FaRug style={{marginTop: "-5px", fontSize:"25px"}}/>} iconPosition="start" {...a11yProps(6)} />
            <Tab sx={{justifyContent: "flex-start"}} label="Upholstery Cleaning" icon={<GiSofa style={{marginTop: "-5px", fontSize:"25px"}}/>} iconPosition="start" {...a11yProps(7)} />
            <Tab sx={{justifyContent: "flex-start"}} label="Construction Cleaning" icon={<FaBuilding style={{marginTop: "-5px", fontSize:"25px"}}/>} iconPosition="start" {...a11yProps(8)} />
          </Tabs>


          <TabPanel value={value} index={0}>
            <h2 className={`${styles.heading}`}>House Cleaning Service Prices</h2>
            <TableContainer className={`${styles.table_container}`}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Property Size</StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {houseCleaningPrices.map((row, index) => (
                    <StyledTableRow key={index+1}>
                    <StyledTableCell align="center">{row.propertySize}</StyledTableCell>
                    <StyledTableCell align="center">{row.price}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>




          <TabPanel value={value} index={1}>
            <h2 className={`${styles.heading}`}>Deep Cleaning Service Prices</h2>
            <TableContainer className={`${styles.table_container}`}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Property Size</StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {deepCleaningPrices.map((row, index) => (
                    <StyledTableRow key={index+1}>
                    <StyledTableCell align="center">{row.propertySize}</StyledTableCell>
                    <StyledTableCell align="center">{row.price}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>



          <TabPanel value={value} index={2}>
            <h2 className={`${styles.heading}`}>End Of Lease Cleaning Service Prices</h2>
            <TableContainer className={`${styles.table_container}`}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Property Size</StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {eolCleaningPrices.map((row, index) => (
                    <StyledTableRow key={index+1}>
                    <StyledTableCell align="center">{row.propertySize}</StyledTableCell>
                    <StyledTableCell align="center">{row.price}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>



          <TabPanel value={value} index={3}>
            <h2 className={`${styles.heading}`}>Regular Cleaning Service Prices</h2>
            <TableContainer className={`${styles.table_container}`}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Property Size</StyledTableCell>
                    <StyledTableCell align="center">Weekly 20% Off</StyledTableCell>
                    <StyledTableCell align="center">Fortnightly 15% Off</StyledTableCell>
                    <StyledTableCell align="center">Every Three Weeks 10% Off</StyledTableCell>
                    <StyledTableCell align="center">Monthly 5% Off</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {regularCleaningPrices.map((row, index) => (
                    <StyledTableRow key={index+1}>
                    <StyledTableCell align="center">{row.propertySize}</StyledTableCell>
                    <StyledTableCell align="center">{row.weekly}</StyledTableCell>
                    <StyledTableCell align="center">{row.fortnightly}</StyledTableCell>
                    <StyledTableCell align="center">{row.everyThreeWeeks}</StyledTableCell>
                    <StyledTableCell align="center">{row.monthly}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>



          <TabPanel value={value} index={4}>
            <h2 className={`${styles.heading}`}>Carpet Cleaning Service Prices</h2>
            <TableContainer className={`${styles.table_container}`}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Carpet Cleaning</StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {carpetCleaningPrices.map((row, index) => (
                    <StyledTableRow key={index+1}>
                    <StyledTableCell align="center">{row.rooms}</StyledTableCell>
                    <StyledTableCell align="center">{row.price}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>



          <TabPanel value={value} index={5}>
            <h2 className={`${styles.heading}`}>Mattress Cleaning Service Prices</h2>
            <TableContainer className={`${styles.table_container}`}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Services</StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {mattressCleaningPrices.map((row, index) => (
                    <StyledTableRow key={index+1}>
                    <StyledTableCell align="center">{row.type}</StyledTableCell>
                    <StyledTableCell align="center">{row.price}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>



          <TabPanel value={value} index={6}>
            <h2 className={`${styles.heading}`}>Rug Cleaning Service Prices</h2>
            <TableContainer className={`${styles.table_container}`}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Services</StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rugCleaningPrices.map((row, index) => (
                    <StyledTableRow key={index+1}>
                    <StyledTableCell align="center">{row.description}</StyledTableCell>
                    <StyledTableCell align="center">{row.price}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>



          <TabPanel value={value} index={7}>
            <h2 className={`${styles.heading}`}>Upholstery Cleaning Service Prices</h2>
            <TableContainer className={`${styles.table_container}`}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Services</StyledTableCell>
                    <StyledTableCell align="center">Price</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {upholsteryCleaningPrices.map((row, index) => (
                    <StyledTableRow key={index+1}>
                    <StyledTableCell align="center">{row.description}</StyledTableCell>
                    <StyledTableCell align="center">{row.price}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>



          <TabPanel value={value} index={8}>
            <h2 className={`${styles.heading}`}>Construction Cleaning Service Prices</h2>
            <TableContainer className={`${styles.table_container}`}>
              <p style={{maxWidth: "700px"}}>At our organization, we recognize the individuality of each property and the need for a customized approach to cleaning to achieve optimal outcomes. This is why we present personalized pricing tailored to meet your specific cleaning requirements.</p>
              <p style={{maxWidth: "700px"}}>To initiate the process, simply reach out to us at 0451550849 to arrange an appointment with our on-site manager. Our manager will then visit your property at a time convenient for you, evaluating the cleaning needs, considering factors such as property size, service type, and any particular requests you may have.</p>
              <p style={{maxWidth: "700px"}}>Upon assessment of your property, we will furnish you with a comprehensive quote detailing the services to be rendered along with their corresponding costs. Our pricing policy is transparent, ensuring no hidden charges or unexpected expenses.</p>
            </TableContainer>
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
              <h3 className={`${styles.accordion_heading}`}><FaHome className={`${styles.heading_icon} me-3`}/> House Cleaning</h3>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer className={`${styles.table_container}`}>
                <Table sx={{ minWidth: 300 }} aria-label="customized table">
                  <TableHead>
                  <TableRow>
                      <StyledTableCell align="center">Property Size</StyledTableCell>
                      <StyledTableCell align="center">Price</StyledTableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {houseCleaningPrices.map((row, index) => (
                      <StyledTableRow key={index+1}>
                      <StyledTableCell align="center">{row.propertySize}</StyledTableCell>
                      <StyledTableCell align="center">{row.price}</StyledTableCell>
                      </StyledTableRow>
                  ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>


          <Accordion>
            <AccordionSummary
              expandIcon={<FaAngleDown className={`${styles.accordion_icon}`} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3 className={`${styles.accordion_heading}`}><FaBroom className={`${styles.heading_icon} me-3`}/> Deep Cleaning</h3>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer className={`${styles.table_container}`}>
                <Table sx={{ minWidth: 300 }} aria-label="customized table">
                  <TableHead>
                  <TableRow>
                      <StyledTableCell align="center">Property Size</StyledTableCell>
                      <StyledTableCell align="center">Price</StyledTableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {deepCleaningPrices.map((row, index) => (
                      <StyledTableRow key={index+1}>
                      <StyledTableCell align="center">{row.propertySize}</StyledTableCell>
                      <StyledTableCell align="center">{row.price}</StyledTableCell>
                      </StyledTableRow>
                  ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
              <TableContainer className={`${styles.table_container}`}>
                <Table sx={{ minWidth: 300 }} aria-label="customized table">
                  <TableHead>
                  <TableRow>
                      <StyledTableCell align="center">Property Size</StyledTableCell>
                      <StyledTableCell align="center">Price</StyledTableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {eolCleaningPrices.map((row, index) => (
                      <StyledTableRow key={index+1}>
                      <StyledTableCell align="center">{row.propertySize}</StyledTableCell>
                      <StyledTableCell align="center">{row.price}</StyledTableCell>
                      </StyledTableRow>
                  ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>


          <Accordion>
            <AccordionSummary
              expandIcon={<FaAngleDown className={`${styles.accordion_icon}`} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3 className={`${styles.accordion_heading}`}><GiGloves className={`${styles.heading_icon} me-3`}/> Regular Cleaning</h3>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer className={`${styles.table_container}`}>
                <Table sx={{ minWidth: 300 }} aria-label="customized table">
                  <TableHead>
                  <TableRow>
                      <StyledTableCell align="center">Property Size</StyledTableCell>
                      <StyledTableCell align="center">Weekly 20% Off</StyledTableCell>
                      <StyledTableCell align="center">Fortnightly 15% Off</StyledTableCell>
                      <StyledTableCell align="center">Every Three Weeks 10% Off</StyledTableCell>
                      <StyledTableCell align="center">Monthly 5% Off</StyledTableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {regularCleaningPrices.map((row, index) => (
                      <StyledTableRow key={index+1}>
                      <StyledTableCell align="center">{row.propertySize}</StyledTableCell>
                      <StyledTableCell align="center">{row.weekly}</StyledTableCell>
                      <StyledTableCell align="center">{row.fortnightly}</StyledTableCell>
                      <StyledTableCell align="center">{row.everyThreeWeeks}</StyledTableCell>
                      <StyledTableCell align="center">{row.monthly}</StyledTableCell>
                      </StyledTableRow>
                  ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
              <TableContainer className={`${styles.table_container}`}>
                <Table sx={{ minWidth: 300 }} aria-label="customized table">
                  <TableHead>
                  <TableRow>
                      <StyledTableCell align="center">Carpet Cleaning</StyledTableCell>
                      <StyledTableCell align="center">Price</StyledTableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {carpetCleaningPrices.map((row, index) => (
                      <StyledTableRow key={index+1}>
                      <StyledTableCell align="center">{row.rooms}</StyledTableCell>
                      <StyledTableCell align="center">{row.price}</StyledTableCell>
                      </StyledTableRow>
                  ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>


          <Accordion>
            <AccordionSummary
              expandIcon={<FaAngleDown className={`${styles.accordion_icon}`} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3 className={`${styles.accordion_heading}`}><IoIosBed className={`${styles.heading_icon} me-3`}/> Mattress Cleaning</h3>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer className={`${styles.table_container}`}>
                <Table sx={{ minWidth: 300 }} aria-label="customized table">
                  <TableHead>
                  <TableRow>
                      <StyledTableCell align="center">Services</StyledTableCell>
                      <StyledTableCell align="center">Price</StyledTableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {mattressCleaningPrices.map((row, index) => (
                      <StyledTableRow key={index+1}>
                      <StyledTableCell align="center">{row.type}</StyledTableCell>
                      <StyledTableCell align="center">{row.price}</StyledTableCell>
                      </StyledTableRow>
                  ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>


          <Accordion>
            <AccordionSummary
              expandIcon={<FaAngleDown className={`${styles.accordion_icon}`} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3 className={`${styles.accordion_heading}`}><FaRug className={`${styles.heading_icon} me-3`}/> Rug Cleaning</h3>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer className={`${styles.table_container}`}>
                <Table sx={{ minWidth: 300 }} aria-label="customized table">
                  <TableHead>
                  <TableRow>
                      <StyledTableCell align="center">Services</StyledTableCell>
                      <StyledTableCell align="center">Price</StyledTableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {rugCleaningPrices.map((row, index) => (
                      <StyledTableRow key={index+1}>
                      <StyledTableCell align="center">{row.description}</StyledTableCell>
                      <StyledTableCell align="center">{row.price}</StyledTableCell>
                      </StyledTableRow>
                  ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>



          <Accordion>
            <AccordionSummary
              expandIcon={<FaAngleDown className={`${styles.accordion_icon}`} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3 className={`${styles.accordion_heading}`}><GiSofa className={`${styles.heading_icon} me-3`}/> Upholstery Cleaning</h3>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer className={`${styles.table_container}`}>
                <Table sx={{ minWidth: 300 }} aria-label="customized table">
                  <TableHead>
                  <TableRow>
                      <StyledTableCell align="center">Services</StyledTableCell>
                      <StyledTableCell align="center">Price</StyledTableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {upholsteryCleaningPrices.map((row, index) => (
                      <StyledTableRow key={index+1}>
                      <StyledTableCell align="center">{row.description}</StyledTableCell>
                      <StyledTableCell align="center">{row.price}</StyledTableCell>
                      </StyledTableRow>
                  ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>



          <Accordion>
            <AccordionSummary
              expandIcon={<FaAngleDown className={`${styles.accordion_icon}`} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3 className={`${styles.accordion_heading}`}><FaBuilding className={`${styles.heading_icon} me-3`}/> Construction Cleaning</h3>
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
