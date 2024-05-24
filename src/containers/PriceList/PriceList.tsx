import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "./priceList.module.scss"

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

const pricing = [
  {propertySize: "1 Bedroom, 1 Bathroom", houseCleaning: "$143.00", deepCleaning: "$176.00", EOLcleaning: "$352.00"},
  {propertySize: "2 Bedroom, 1 Bathrooms", houseCleaning: "$143.00", deepCleaning: "$209.00", EOLcleaning: "$429.00"},
  {propertySize: "3 Bedrooms, 2 Bathrooms", houseCleaning: "$242.00", deepCleaning: "$275.00", EOLcleaning: "$500.50"},
  {propertySize: "4 Bedrooms, 2 Bathrooms", houseCleaning: "$275.00", deepCleaning: "$341.00", EOLcleaning: "$577.50"},
  {propertySize: "5 Bedrooms, 2 Bathrooms", houseCleaning: "$308.00", deepCleaning: "$374.00", EOLcleaning: "$654.50"},
  {propertySize: "5 Bedrooms, 3 Bathrooms", houseCleaning: "$341.00", deepCleaning: "$407.00", EOLcleaning: "$687.50"},
  {propertySize: "6 Bedrooms, 3 Bathrooms", houseCleaning: "$374.00", deepCleaning: "$440.00", EOLcleaning: "$764.50"},
  {propertySize: "6 Bedrooms, 4 Bathrooms", houseCleaning: "$407.00", deepCleaning: "$473.00", EOLcleaning: "$797.50"},
  {propertySize: "7 Bedrooms, 4 Bathrooms", houseCleaning: "$440.00", deepCleaning: "$506.00", EOLcleaning: "$874.50"},
];

const services = [
  {service: "Wet Wipe Blinds (per blind)", houseCleaning: "$10.00", deepCleaning: "$10.00", EOLcleaning: "$10.00"},
  {service: "Inside Oven", houseCleaning: "$60.00", deepCleaning: "$60.00", EOLcleaning: "Included"},
  {service: "Carpet Steam Clean (per room or area)", houseCleaning: "$35.00", deepCleaning: "$35.00", EOLcleaning: "$35.00"},
  {service: "Sliding Door & Interior Windows (1-3 Bedroom)", houseCleaning: "$60.00", deepCleaning: "$60.00", EOLcleaning: "Included"},
  {service: "Sliding Door & Interior Windows (4-6 Bedroom)", houseCleaning: "$120.00", deepCleaning: "$120.00", EOLcleaning: "Included"},
  {service: "Inside Cupboards (must be empty) (1-3 Bedroom)", houseCleaning: "$60.00", deepCleaning: "$60.00", EOLcleaning: "Included"},
  {service: "Inside Cupboards (must be empty) (4-6 Bedroom)", houseCleaning: "$120.00", deepCleaning: "$120.00", EOLcleaning: "Included"},
  {service: "Garage Sweep & Tidy", houseCleaning: "$30.00", deepCleaning: "$30.00", EOLcleaning: "$30.00"},
  {service: "Patio", houseCleaning: "$30.00", deepCleaning: "$30.00", EOLcleaning: "$30.00"},
  {service: "Deck", houseCleaning: "$30.00", deepCleaning: "$30.00", EOLcleaning: "$30.00"},
  {service: "Large Balcony", houseCleaning: "$60.00", deepCleaning: "$60.00", EOLcleaning: "$60.00"},
  {service: "Small Balcony", houseCleaning: "$30.00", deepCleaning: "$30.00", EOLcleaning: "$30.00"},
  {service: "Inside Fridge", houseCleaning: "$60.00", deepCleaning: "$60.00", EOLcleaning: "$60.00"},
  {service: "Spot Clean Walls (30 Minutes)", houseCleaning: "$30.00", deepCleaning: "$30.00", EOLcleaning: "$30.00"},
  {service: "Spot Clean Walls (1 Hour)", houseCleaning: "$60.00", deepCleaning: "$60.00", EOLcleaning: "$60.00"},
  {service: "Change Bed Sheets", houseCleaning: "$10.00", deepCleaning: "$10.00", EOLcleaning: "$10.00"},
];

export default function PriceList() {
  return (
    <>
        <div className={`${styles.container} ${styles.remmarg} `}>
        <div className={`container`}>
            <h2 className={`${styles.heading}`}>Call the Cleaners Price List</h2>
            <TableContainer className={`${styles.table_container}`} component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Property Size</StyledTableCell>
                        <StyledTableCell align="center">House Cleaning</StyledTableCell>
                        <StyledTableCell align="center">Deep Cleaning</StyledTableCell>
                        <StyledTableCell align="center">End of Lease Cleaning</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {pricing.map((row,index) => (
                    <StyledTableRow key={index+1}>
                        <StyledTableCell align="center">{row.propertySize}</StyledTableCell>
                        <StyledTableCell align="center">{row.houseCleaning}</StyledTableCell>
                        <StyledTableCell align="center">{row.deepCleaning}</StyledTableCell>
                        <StyledTableCell align="center">{row.EOLcleaning}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
        </div>
        <div className={`${styles.container} mb-5 `}>
        <div className={`container`}>
            <h2 className={`${styles.heading}`}>Services Add-ons</h2>
            <TableContainer className={`${styles.table_container}`} component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Services</StyledTableCell>
                        <StyledTableCell align="center">House Cleaning</StyledTableCell>
                        <StyledTableCell align="center">Deep Cleaning</StyledTableCell>
                        <StyledTableCell align="center">End of Lease Cleaning</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {services.map((row,index) => (
                    <StyledTableRow key={index+1}>
                        <StyledTableCell align="center">{row.service}</StyledTableCell>
                        <StyledTableCell align="center">{row.houseCleaning}</StyledTableCell>
                        <StyledTableCell align="center">{row.deepCleaning}</StyledTableCell>
                        <StyledTableCell align="center">{row.EOLcleaning}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
        </div>
    </>
  );
}