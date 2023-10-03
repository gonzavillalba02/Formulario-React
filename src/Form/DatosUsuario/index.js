import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = () => {

  const [email, setEmail] = useState({
    value: "",
    valid: null
  })

  const [password, setPassword] = useState({
    value: "",
    valid: null
  })

  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)

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
      onSubmit={ (e) => {
          e.preventDefault();
          if(email.valid && password.valid){
            console.log("siguiente formulario")
            console.log(email, password)
          }else{
            console.log("no hacer nada")
          }
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={errorEmail}
        helperText={errorEmail && "El correo electronico debe tener entre 8 y 50 caracteres, ademas de contener '@'"}
        value = { email.value }
        onChange={ (e) => {
          setEmail({value: e.target.value, valid: true})
          setErrorPassword(false)
        } }
        onBlur={
          (e) => {
            setEmail({value: e.target.value, valid: validarEmail(e.target.value)})
            setErrorEmail(!validarEmail(e.target.value))
          }
        }
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={errorPassword}
        helperText={errorPassword && "La contraseña debe tener entre 8 y 20 caracteres"}
        value = { password.value }
        onChange={ (e) => {
          setPassword({value: e.target.value, valid: true})
          setErrorPassword(false)
        } }
        onBlur={
          (e) => {
            setPassword({value: e.target.value, valid: validarPassword(e.target.value)})
            setErrorPassword(!validarPassword(e.target.value))
          }
        }
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
}

export default DatosUsuario;
