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
    backgroundColor: "#8080802b",
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const pricing = [
  {propertySize: "1 Bedroom, 1 Bathroom", houseCleaning: "$133.00", deepCleaning: "$166.00", EOLcleaning: "$342.00"},
  {propertySize: "2 Bedroom, 1 Bathrooms", houseCleaning: "$133.00", deepCleaning: "$199.00", EOLcleaning: "$419.00"},
  {propertySize: "3 Bedrooms, 2 Bathrooms", houseCleaning: "$232.00", deepCleaning: "$265.00", EOLcleaning: "$490.50"},
  {propertySize: "4 Bedrooms, 2 Bathrooms", houseCleaning: "$265.00", deepCleaning: "$331.00", EOLcleaning: "$567.50"},
  {propertySize: "5 Bedrooms, 2 Bathrooms", houseCleaning: "$298.00", deepCleaning: "$364.00", EOLcleaning: "$644.50"},
  {propertySize: "5 Bedrooms, 3 Bathrooms", houseCleaning: "$331.00", deepCleaning: "$397.00", EOLcleaning: "$677.50"},
  {propertySize: "6 Bedrooms, 3 Bathrooms", houseCleaning: "$364.00", deepCleaning: "$430.00", EOLcleaning: "$754.50"},
  {propertySize: "6 Bedrooms, 4 Bathrooms", houseCleaning: "$397.00", deepCleaning: "$463.00", EOLcleaning: "$787.50"},
  {propertySize: "7 Bedrooms, 4 Bathrooms", houseCleaning: "$430.00", deepCleaning: "$496.00", EOLcleaning: "$864.50"},
];

const services = [
  {service: "Wet Wipe Blinds (per blind)", houseCleaning: "$5.00", deepCleaning: "$5.00", EOLcleaning: "$5.00"},
  {service: "Inside Oven", houseCleaning: "$50.00", deepCleaning: "$50.00", EOLcleaning: "Included"},
  {service: "Carpet Steam Clean (per room or area)", houseCleaning: "$25.00", deepCleaning: "$25.00", EOLcleaning: "$25.00"},
  {service: "Sliding Door & Interior Windows (1-3 Bedroom)", houseCleaning: "$50.00", deepCleaning: "$50.00", EOLcleaning: "Included"},
  {service: "Sliding Door & Interior Windows (4-6 Bedroom)", houseCleaning: "$110.00", deepCleaning: "$110.00", EOLcleaning: "Included"},
  {service: "Inside Cupboards (must be empty) (1-3 Bedroom)", houseCleaning: "$50.00", deepCleaning: "$50.00", EOLcleaning: "Included"},
  {service: "Inside Cupboards (must be empty) (4-6 Bedroom)", houseCleaning: "$110.00", deepCleaning: "$110.00", EOLcleaning: "Included"},
  {service: "Garage Sweep & Tidy", houseCleaning: "$20.00", deepCleaning: "$20.00", EOLcleaning: "$20.00"},
  {service: "Patio", houseCleaning: "$20.00", deepCleaning: "$20.00", EOLcleaning: "$20.00"},
  {service: "Deck", houseCleaning: "$20.00", deepCleaning: "$20.00", EOLcleaning: "$20.00"},
  {service: "Large Balcony", houseCleaning: "$50.00", deepCleaning: "$50.00", EOLcleaning: "$50.00"},
  {service: "Small Balcony", houseCleaning: "$20.00", deepCleaning: "$20.00", EOLcleaning: "$20.00"},
  {service: "Inside Fridge", houseCleaning: "$50.00", deepCleaning: "$50.00", EOLcleaning: "$50.00"},
  {service: "Spot Clean Walls (30 Minutes)", houseCleaning: "$20.00", deepCleaning: "$20.00", EOLcleaning: "$20.00"},
  {service: "Spot Clean Walls (1 Hour)", houseCleaning: "$50.00", deepCleaning: "$50.00", EOLcleaning: "$50.00"},
  {service: "Change Bed Sheets", houseCleaning: "$5.00", deepCleaning: "$5.00", EOLcleaning: "$5.00"}
];

export default function PriceList() {
  return (
    <>
        <div className={`${styles.container} ${styles.remmarg} `}>
        <div className={`container`}>
            <h2 className={`${styles.heading}`}>Shah Cleaning Services Price List</h2>
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
