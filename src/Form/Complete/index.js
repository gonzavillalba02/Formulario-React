import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";

const Img = styled.img`
  width: 70%;
`;

const Texto = styled.h2`
  text-align: center;
  width: 100%;
  padding: 2% 0;
  font-family: 'Comfortaa', cursive;
`;

const Complete = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Texto>¡Gracias por tu registro!</Texto>
      <Img src="/complete.png" />
    </Box>
  );
};

export default Complete;
