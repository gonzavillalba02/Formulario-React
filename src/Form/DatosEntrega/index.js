import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validInput } from "./validaciones";

const DatosEntrega = ({updateStep}) => {

  const [address, setAdress] = useState({value:"", valid: null})
  const [city, setCity] = useState({value:"", valid: null})
  const [province, setProvince] = useState({value:"", valid: null})

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault()
        if(address.valid && city.valid && province.valid){
          console.log("siguiente formulario")
          console.log(address, city, province)
          updateStep(3)
        }else{
          console.log("no hacer nada")
        }
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ address.value}
        onChange={(e)=> setAdress({value: e.target.value, valid: validInput(e.target.value)})}
        error={address.valid === false}
        helperText={address.valid === false && "La direccion debe tenes mas de 4 caracteres"}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ city.value}
        onChange={(e)=> setCity({value: e.target.value, valid: validInput(e.target.value)})}
        error={city.valid === false}
        helperText={city.valid === false && "La ciudad debe tenes mas de 4 caracteres"}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ province.value}
        onChange={(e)=> setProvince({value: e.target.value, valid: validInput(e.target.value)})}
        error={province.valid === false}
        helperText={province.valid === false && "La provincia debe tenes mas de 4 caracteres"}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
