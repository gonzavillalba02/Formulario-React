import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellidos, validarTelefono } from "./validaciones";

const DatosPersonales = ({updateStep}) => {

  const [name, setName] = useState({value: "", valid: null})
  const [lastname, setLastname] = useState({value: "", valid: null})
  const [phone, setPhone] = useState({value: "", valid: null})

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
        if(name.valid && lastname.valid && phone.valid){
          console.log(name, lastname, phone)
          updateStep(2)
        }else{
          if(name.valid !== true){
            setName({value: name.value, valid: false})
          }
          if(lastname.valid !== true){
            setLastname({value: lastname.value, valid: false})
          }
          if(phone.valid !== true){
            setPhone({value: phone.value, valid: false})
          }
        }
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={name.value}
        onChange={(e)=>setName({value: e.target.value, valid: validarNombre(e.target.value)})}
        error={name.valid === false}
        helperText={name.valid === false && "El nombre debe tener entre 2 y 30 caracteres"}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastname.value}
        onChange={(e)=>setLastname({value: e.target.value, valid: validarApellidos(e.target.value)})}
        error={lastname.valid === false}
        helperText={lastname.valid === false && "El apellido debe tener entre 2 y 50 caracteres"}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phone.value}
        onChange={(e)=>setPhone({value: e.target.value, valid: validarTelefono(e.target.value)})}
        error={phone.valid === false}
        helperText={phone.valid === false && "El telefono debe tener entre 8 y 14 digitos"}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
