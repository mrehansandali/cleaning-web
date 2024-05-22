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
import styles from "./reasonToCallUs.module.scss"
import GetACall from '../GetACall/GetACall';

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

const rows = [
  {benefit: "Organic, sustainable cleaning products", callTheCleaners: true,},
  {benefit: "Quick and easy online booking", callTheCleaners: true,},
  {benefit: "Outstanding customer service", callTheCleaners: true,},
  {benefit: "Super fast response rate", callTheCleaners: true,},
  {benefit: "A thorough, friendly and experienced cleaning crew", callTheCleaners: true,},
  {benefit: "No lock in contracts", callTheCleaners: true,},
  {benefit: "Customisable Service", callTheCleaners: true,},
  {benefit: "Competitive pricing", callTheCleaners: true,},
];



export default function ReasonToCallUs() {
  return (
    <div className={`${styles.container}`}>
      <div className={`container`}>
        <h2 className={`${styles.heading}`}>8 Reasons to Choose Call the Cleaners</h2>
        <p className={`${styles.text}`}>In order to make an informed decision, it is customary to conduct thorough research on cleaning services and carefully evaluate various <br /> companies based on their experience, pricing, guarantees, and reputation.</p>
        <TableContainer className={`${styles.table_container}`} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="center">Benefits</StyledTableCell>
                <StyledTableCell align="center">Call The Cleaners</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.benefit}>
                <StyledTableCell align="center">{row.benefit}</StyledTableCell>
                <StyledTableCell align="center">{row.callTheCleaners == false ? <RxCross1 className={`${styles.icons}`}/> : <TiTick className={`${styles.icons}`}/>}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
      </div>
    </div>
  );
}