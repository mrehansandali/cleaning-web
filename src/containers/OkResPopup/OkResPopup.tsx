import React from 'react'
import styles from "./okrespopup.module.scss"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { RxCross1 } from "react-icons/rx";
import { GrStatusGood } from "react-icons/gr";

type Props = {
  toggle: () => void,
  isOpenPopup: boolean
}

export default function BasicModal({toggle, isOpenPopup}: Props) {

  return (
    <>
        <Modal
        className={styles.container}
        open={isOpenPopup}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box  className={styles.box_container}>
              <GrStatusGood className={styles.okResIcon} />
              <p className={`${styles.text}`}>Your response has been received !</p>
              <div onClick={() => toggle()} className={`${styles.cross_container}`}><RxCross1 className={`${styles.cross_button}`}/></div>
            </Box>
        </Modal>
    </>
  );
}