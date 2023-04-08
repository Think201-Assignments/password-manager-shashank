import StepHeader from "@/componenets/organization/stepheader";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { parseJsonText } from "typescript";

interface props {
  heading?: any;
  subheading?: any;
  buttonfunction?: any;
  buttonText?: any;
  children?: React.ReactNode;
  step?: any;
}

const StepCreator: React.FC<props> = ({
  buttonfunction,
  subheading,
  heading,
  buttonText,
  children,
  step,
}) => {
  return (
    <Box sx={{ ml: 8, mt: 4 }}>
      <Typography
        sx={{ mb: 2, fontWeight: "400", color: "#0000008A", fontSize: "14px" }}
      >
        Step {step} of 4
      </Typography>
      <StepHeader heading={heading} subheading={subheading} />
      <Stack sx={{ pt: 4 }}>
        {children}
        <Button
          variant="contained"
          color="secondary"
          sx={{
            mt: 4,
            //   backgroundColor: "#4DB6AC",
            borderRadius: "0px",
            height: "50px",
            width: "488px",
            color: "white",
            fontSize: "15px",
            fontWeight: "700",
          }}
          onClick={() => buttonfunction()}
        >
          {buttonText}
        </Button>
      </Stack>
    </Box>
  );
};

export default StepCreator;
