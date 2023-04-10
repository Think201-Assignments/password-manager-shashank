import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
interface props {
  data: any;
  a?: any;
}
const SideIcons: React.FC<props> = ({ data, a }) => {
  return (
    <>
      <Box
        sx={{
          height: "48px",
          width: "48px",
          // background: `url(${a})`,

          backgroundColor: "white",

          boxShadow: " 0px 4px 34px 0px #00000073",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          borderRadius: "15%",
          diplay: "flex",

          justifyContent: "center",
          flexDirection: "coloumn",
          pt: 1,
        }}
      >
        <Image
          // fill

          alt={"12"}
          src={`/${a}`}
          width={30}
          height={30}
          quality={100}
          // sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
    </>
  );
};

export default SideIcons;
