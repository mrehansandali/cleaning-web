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
import styles from "./pricesPage.module.scss"
import { FaBroom, FaBuilding, FaHome } from "react-icons/fa";
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
    backgroundColor: "rgb(132 165 223 / 34%)",
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const houseCleaningPrices = [
  { propertySize: '1 Bedroom, 1 Bathroom', price: '$143.00' },
  { propertySize: '2 Bedroom, 1 Bathroom', price: '$143.00' },
  { propertySize: '3 Bedrooms, 2 Bathrooms', price: '$242.00' },
  { propertySize: '4 Bedrooms, 2 Bathrooms', price: '$275.00' },
  { propertySize: '5 Bedrooms, 2 Bathrooms', price: '$308.00' },
  { propertySize: '5 Bedrooms, 3 Bathrooms', price: '$341.00' },
  { propertySize: '6 Bedrooms, 3 Bathrooms', price: '$374.00' },
  { propertySize: '6 Bedrooms, 4 Bathrooms', price: '$407.00' },
  { propertySize: '7 Bedrooms, 4 Bathrooms', price: '$440.00' }
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
    
    {windowWidth >= 992 ? (
        <div className="container">
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: "center" }}>
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              textColor="inherit"
              aria-label="Vertical tabs example"
              sx={{bgcolor: "#112A46", color: "#fff"}}
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



            <TabPanel value={value} index={3}>
              <h2 className={`${styles.heading}`}>Regular Cleaning Service Prices</h2>
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



            <TabPanel value={value} index={4}>
              <h2 className={`${styles.heading}`}>Carpet Cleaning Service Prices</h2>
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



            <TabPanel value={value} index={5}>
              <h2 className={`${styles.heading}`}>Mattress Cleaning Service Prices</h2>
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



            <TabPanel value={value} index={6}>
              <h2 className={`${styles.heading}`}>Rug Cleaning Service Prices</h2>
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



            <TabPanel value={value} index={7}>
              <h2 className={`${styles.heading}`}>Upholstery Cleaning Service Prices</h2>
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



            <TabPanel value={value} index={8}>
              <h2 className={`${styles.heading}`}>Construction Cleaning Service Prices</h2>
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



          </Box>
        </div>
      ) : (
      <div className='container-fluid'>
          <p className='text-center pt-3'>Maintenance...</p>
        </div>
      )}


    </>
  );
}
