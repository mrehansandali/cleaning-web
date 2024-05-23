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
  {propertySize: "1 Bedroom, 1 Bathroom", houseCleaning: 155.00, deepCleaning: 210.00, EOLcleaning: 435.00},
  {propertySize: "2 Bedroom, 1 Bathrooms", houseCleaning: 155.00, deepCleaning: 250.00, EOLcleaning: 499.00},
  {propertySize: "3 Bedrooms, 2 Bathrooms", houseCleaning: 250.00, deepCleaning: 310.00, EOLcleaning: 550.00},
  {propertySize: "1 Bedroom, 1 Bathroom", houseCleaning: 155.00, deepCleaning: 210.00, EOLcleaning: 435.00},
  {propertySize: "2 Bedroom, 1 Bathrooms", houseCleaning: 155.00, deepCleaning: 250.00, EOLcleaning: 499.00},
  {propertySize: "3 Bedrooms, 2 Bathrooms", houseCleaning: 250.00, deepCleaning: 310.00, EOLcleaning: 550.00},
  {propertySize: "1 Bedroom, 1 Bathroom", houseCleaning: 155.00, deepCleaning: 210.00, EOLcleaning: 435.00},
  {propertySize: "2 Bedroom, 1 Bathrooms", houseCleaning: 155.00, deepCleaning: 250.00, EOLcleaning: 499.00},
  {propertySize: "3 Bedrooms, 2 Bathrooms", houseCleaning: 250.00, deepCleaning: 310.00, EOLcleaning: 550.00},
];

const services = [
    {propertySize: "Wet Wipe Blinds (per blind)", houseCleaning: 155.00, deepCleaning: 210.00, EOLcleaning: 435.00},
    {propertySize: "Inside Ovens", houseCleaning: 155.00, deepCleaning: 250.00, EOLcleaning: 499.00},
    {propertySize: "Carpet Steam Clean (per room or area)", houseCleaning: 250.00, deepCleaning: 310.00, EOLcleaning: 550.00},
    {propertySize: "Sliding Door & Interior Windows (1-3 Bedroom)", houseCleaning: 250.00, deepCleaning: 310.00, EOLcleaning: 550.00},
    {propertySize: "Inside Cupboards (must be empty) (4-6 Bedroom)", houseCleaning: 250.00, deepCleaning: 310.00, EOLcleaning: 550.00},
    {propertySize: "Inside Fridge", houseCleaning: 250.00, deepCleaning: 310.00, EOLcleaning: 550.00},
    {propertySize: "Small Balcony", houseCleaning: 250.00, deepCleaning: 310.00, EOLcleaning: 550.00},
    {propertySize: "Large Balcony", houseCleaning: 250.00, deepCleaning: 310.00, EOLcleaning: 550.00},
    {propertySize: "Deck", houseCleaning: 250.00, deepCleaning: 310.00, EOLcleaning: 550.00},
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
                        <StyledTableCell align="center">${row.houseCleaning}.00</StyledTableCell>
                        <StyledTableCell align="center">${row.deepCleaning}.00</StyledTableCell>
                        <StyledTableCell align="center">${row.EOLcleaning}.00</StyledTableCell>
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
                        <StyledTableCell align="center">{row.propertySize}</StyledTableCell>
                        <StyledTableCell align="center">${row.houseCleaning}.00</StyledTableCell>
                        <StyledTableCell align="center">${row.deepCleaning}.00</StyledTableCell>
                        <StyledTableCell align="center">${row.EOLcleaning}.00</StyledTableCell>
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