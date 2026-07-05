import { useState } from "react";
import {Paper,Typography,TextField,Button,Stack} from "@mui/material";


const FormularioCliente = () => {

    const clienteInicial = {
        nombre: "", apellido: "", email: "", telefono: "", ciudad: "",
    };
    const [cliente,setCliente] = useState(clienteInicial);
    const handleChange = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cliente);
        setCliente(clienteInicial);
    };
    return (
        <Paper
        component="form"
        onSubmit={handleSubmit} 
        sx={{p:3,mb:4}}>
            <Typography variant="h6">
                Alta de cliente
            </Typography>

            <Stack spacing={2}>
                <TextField label="Nombre" name="nombre" value={cliente.nombre} onChange={handleChange} fullWidth/>
                <TextField label="Apellido" name="apellido" value={cliente.apellido} onChange={handleChange} fullWidth/>
                <TextField label="Email" name="email" value={cliente.email} onChange={handleChange} fullWidth/>
                <TextField label="Telefono" name="telefono" value={cliente.telefono} onChange={handleChange} fullWidth/>
                <TextField label="Ciudad" name="ciudad" value={cliente.ciudad} onChange={handleChange} fullWidth/>
                <button type="submit" variant="contained">Guadar Cliente</button>
            </Stack>
        </Paper>
    );
};

export default FormularioCliente;