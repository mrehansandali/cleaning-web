import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { AiOutlineStop } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import styles from "./exServices.module.scss"

export default function ExServices() {

    const exclusions = [
        "Chandeliers",
        "Light Bulbs",
        "Fly Screens",
        "Fireplaces Biohazards (e.g. blood, faeces, excessive mould, etc.)",
        "Silicon & Grout Remediation",
        "Removal of certain mineral deposits (e.g. stains in toilet bowls)",
        "Removal of pet hair embedded in carpet fibres",
        "Picture Rails",
        "High Reach Areas (e.g. tops of cupboards, ceilings, etc.)",
        "We also do not move furniture or clean underneath it",
        "We do not guarantee removal of any stains (including remediation of stained grout or silicon), nor do we put away dishes, pots, pans, etc."
    ];


    return (
        <>
        <div className="container mb-5">
            <Accordion className={`${styles.accordion_container} m-auto`}>
                <AccordionSummary
                    expandIcon={<FaAngleDown className={`${styles.accordion_icon}`} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className={`${styles.accordion_summary}`}
                >
                    Excluded Services
                </AccordionSummary>
                <AccordionDetails>
                    <ul className={`${styles.ul}`}>
                    {exclusions.map((item,index) => {
                        return (
                                <li key={index+1}>
                                    <div><AiOutlineStop className={`${styles.li_icon}`}/></div>
                                    <p className="m-0">{item}</p>
                                </li>
                        )
                    })}
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
            
        </>
    );
}
