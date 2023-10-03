import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img, StepperSpace } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {
  const [step, setStep] = useState(0)

  //step = 0 -> datos usuario
  //step = 1 -> datos presonales
  //step = 2 -> datos entrega
  //step = 3 -> Complete

  const updateStep = (step) => {
    setStep(step)
  }

  const steps = {
    0: <DatosUsuario updateStep={updateStep}/>,
    1: <DatosPersonales updateStep={updateStep}/>,
    2: <DatosEntrega updateStep={updateStep}/>,
    3: <Complete/>
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/pedidos.png"} />
      </LogoSpace>
      <FormSpace>
        <StepperSpace>
        {(step<3) && <Stepper step={step}/>}
        </StepperSpace>
        {steps[step]}
      </FormSpace>
    </Box>
  );
};

export default Form;
