import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
interface props {
  Title: any;
  children?: React.ReactNode;
  handleClose: Function;
  open: any;
}
const CustomDialogBox: React.FC<props> = ({
  children,
  Title,
  handleClose,
  open,
}) => {
  return (
    <Dialog
      open={open}
      onClose={() => handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{Title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button variant="outlined" sx={{ mr: 2 }} onClick={() => handleClose()}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CustomDialogBox;
