/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import QRcode from "../../assets/images/qrCode.png";

const QRcodeComponent = ({ handleClose }: { handleClose: () => void }) => {
  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const modalContentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    outline: "none",
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={modalStyle}
      >
        <Box sx={modalContentStyle}>
          <img src={QRcode} alt="Modal Image" />
          <Button variant="contained" onClick={handleClose}>
            close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default QRcodeComponent;
