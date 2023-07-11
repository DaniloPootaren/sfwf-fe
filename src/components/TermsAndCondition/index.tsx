import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  DialogTitle,
} from "@mui/material";
import { replaceWordsWithMaupassName } from "../../utils";
import { store } from "../../App";
import { Me } from "../../redux/types";

const TermsAndConditionsModal = ({
  terms,
  _open,
  onClose,
  handleSubmit,
}: {
  terms: string;
  _open: boolean;
  onClose: () => void;
  handleSubmit: ()=> void;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleApplyClick = () => {
    // Do something when the apply button is clicked
    // For example, you can close the modal or perform any necessary actions
    handleSubmit();
  };

  const termsWithname = replaceWordsWithMaupassName(terms);
  const profile = (store.getState() as any).authentication.data.me as Me;

  const highlightedTerms = termsWithname.replace(
    new RegExp(`(${profile.name} ${profile.surname})`, "gi"),
    `<span style="background-color: #638B1E; color: white">$1</span>`
  );

  return (
    <Dialog open={_open} onClose={() => onClose()}>
      <DialogTitle sx={{ backgroundColor: "#F2F6EE", marginBottom: 5 }}>
        Terms and Conditions
      </DialogTitle>
      <DialogContent>
        <Typography
          variant="body1"
          component="div"
          sx={{ marginBottom: 10 }}
          dangerouslySetInnerHTML={{ __html: highlightedTerms }}
        />
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <span>I agree to the terms and conditions</span>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleApplyClick} disabled={!isChecked}>
          Apply
        </Button>
        <Button onClick={() => onClose()}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TermsAndConditionsModal;
