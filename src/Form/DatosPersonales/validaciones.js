export const validarNombre = (nombre) => (nombre.length > 1 && nombre.length <= 30) ? true : false;

export const validarApellidos = (apellidos) => (apellidos.length > 1 && apellidos.length <= 50) ? true : false;

export const validarTelefono = (telefono) => (telefono.length >= 8 && telefono.length <= 14) ? true : false;