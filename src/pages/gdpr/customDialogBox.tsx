import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "@mui/material";
import { setCookie } from "cookies-next";
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
    <Dialog open={open} onClose={() => handleClose}>
      <DialogTitle> {Title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Link style={{ textDecoration: "none" }} href="/gdpr">
          <Button sx={{ m: 1, mr: 2 }} variant="contained">
            Submit
          </Button>
        </Link>
        <Button
          sx={{ m: 1, mr: 2 }}
          variant="contained"
          onClick={() => handleClose()}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
    // <Dialog
    //   open={open}
    //   onClose={() => handleClose}
    //   aria-labelledby="alert-dialog-title"
    //   aria-describedby="alert-dialog-description"
    // >
    //   <DialogTitle
    //     sx={{ borderBottom: "solid 1px grey", mb: 2 }}
    //     id="alert-dialog-title"
    //   >
    //     {Title}
    //   </DialogTitle>
    //   <DialogContent>{children}</DialogContent>
    //   <DialogActions
    //     sx={{ boxShadow: "0px 1px 1px #888, 0px -1px 1px #888", mt: 2 }}
    //   >
    //     <Link style={{ textDecoration: "none" }} href="/">
    //       <Button
    //         variant="contained"
    //         // onClick={() => setCookie("GDPR", true)}
    //         sx={{ ml: 2 }}
    //         color="secondary"
    //       >
    //         Submit
    //       </Button>
    //     </Link>
    //     &nbsp; &nbsp;
    //     <Button
    //       variant="contained"
    //       sx={{ mr: 2, color: "grey", mt: 0.3 }}
    //       onClick={() => handleClose()}
    //     >
    //       Cancel
    //     </Button>
    //   </DialogActions>
    // </Dialog>
  );
};
export default CustomDialogBox;
