import React, { useState, useEffect } from 'react'
import styles from "./discountPopUp.module.scss"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IoCall } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

export default function BasicModal() {
  const [popUpShow, setPopUpShow] = React.useState(false);
//   const handleOpen = () => setPopUpShow(true);
  const handleClose = () => setPopUpShow(false);

    useEffect(() => {
        setTimeout(() => {
            setPopUpShow(true)
        }, 2000);
    }, [])
    

  return (
    <>
        <Modal
        className={styles.container}
        open={popUpShow}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box  className={styles.box_container}>
                <div className={`${styles.item_1}`}><img src="https://res.cloudinary.com/divbpcro8/image/upload/v1716895618/popupbanner_ty8pvx.jpg" alt="Banner" /></div>
                <div className={`${styles.item_2}`}>
                    <p className={`${styles.heading}`}>Want 20% OFF</p>
                    <p className={`${styles.sub_heading}`}>On Your First Cleaning</p>
                    <p className={`${styles.text}`}>Schedule A Call</p>
                    <button className={`${styles.button}`}><IoCall/></button>
                    <p className={`${styles.close_text}`}>No, I'll Pay Full Price.</p>
                </div>
                <div onClick={() => handleClose()} className={`${styles.cross_container}`}><RxCross1 className={`${styles.cross_button}`}/></div>
            </Box>
        </Modal>
    </>
  );
}