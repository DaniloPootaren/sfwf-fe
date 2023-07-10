import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Modal } from "@mui/material";

const Spinner = () => {
  return (
    <Modal open={true}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <CircularProgress color="success" />
      </div>
    </Modal>
  );
};

export default Spinner;
