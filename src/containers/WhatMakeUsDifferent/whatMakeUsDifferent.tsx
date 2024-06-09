import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import styles from "./whatMakeUsDifferent.module.scss"

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

const rows = [
  {benefit: "Trusted & Vetted Cleaners", callTheCleaners: true, standardCleaningCompanies: true,},
  {benefit: "Tailored Service, No Hidden Fees", callTheCleaners: true, standardCleaningCompanies: false,},
  {benefit: "100% Money-Back guarantee", callTheCleaners: true, standardCleaningCompanies: false,},
  {benefit: "Schedule Online, Cancel Anytime", callTheCleaners: true, standardCleaningCompanies: false,},
  {benefit: "Trusted by 1000+ Sydney Homes", callTheCleaners: true, standardCleaningCompanies: false,},
];



export default function WhatMakeUsDifferent() {
  return (
    <div className={`${styles.container} mb-5 `}>
      <div className={`container`}>
        <h2 className={`${styles.heading}`}>What Makes Us Different?</h2>
        <TableContainer className={`${styles.table_container}`} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="center">Benefits</StyledTableCell>
                <StyledTableCell align="center">Shah Cleaning Services</StyledTableCell>
                <StyledTableCell align="center">Standard Cleaning Companies</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.benefit}>
                <StyledTableCell align="center">{row.benefit}</StyledTableCell>
                <StyledTableCell align="center">{row.callTheCleaners == false ? <RxCross1 className={`${styles.icons}`}/> : <TiTick className={`${styles.icons}`}/>}</StyledTableCell>
                <StyledTableCell align="center">{row.standardCleaningCompanies == false ? <RxCross1 className={`${styles.icons}`}/> : <TiTick className={`${styles.icons}`}/>}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
      </div>
    </div>
  );
}