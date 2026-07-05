import {Formik,Form} from "formik";
import {Paper,Typography,TextField,Button,Stack} from "@mui/material";


const FormularioCliente = () => {

    const initialValues = {
        nombre:"",apellido:"",email:"",telefono:"",ciudad:"",};

        const manejarEnvio = (values, {resetForm}) => {
            console.log(values);

            resetForm();
        }
    
    return (
        <Formik initialValues={initialValues} onSubmit={manejarEnvio}>
            {({ values, handleChange }) => (
                <Paper sx={{p:3,mb:4}}>
                    <Form noValidate>

            <Typography variant="h6">
                Alta de cliente
            </Typography>

            <Stack spacing={2}>
                <TextField label="Nombre" name="nombre" value={values.nombre} onChange={handleChange} fullWidth/>
                <TextField label="Apellido" name="apellido" value={values.apellido} onChange={handleChange} fullWidth/>
                <TextField label="Email" name="email" value={values.email} onChange={handleChange} fullWidth/>
                <TextField label="Telefono" name="telefono" value={values.telefono} onChange={handleChange} fullWidth/>
                <TextField label="Ciudad" name="ciudad" value={values.ciudad} onChange={handleChange} fullWidth/>
                <Button type="submit" variant="contained">Guardar Cliente</Button>
            </Stack>
            </Form>
        </Paper>
            )}
        </Formik>
    );
};

export default FormularioCliente;