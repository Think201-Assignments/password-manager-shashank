import { Box, Snackbar, Stack } from "@mui/material";
import { link } from "fs";
import React, { useRef, useState } from "react";

import DataTable from "./inc/table";
import TableHeader from "./inc/tableHeader";
interface props {
  tableData: any;
}

const Content: React.FC<props> = ({ tableData }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
      <Stack>
        <TableHeader tableData={tableData} />

        <DataTable tableData={tableData} />
      </Stack>
    </Box>
  );
};

export default Content;
