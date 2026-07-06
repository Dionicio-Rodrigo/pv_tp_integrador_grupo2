import { useEffect } from "react";
import { useAdmin } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik"; 
import * as Yup from "yup";
import { Box, Paper, Typography, TextField, Button, MenuItem } from "@mui/material";

const Login = () => {
  const { admin ,login } = useAdmin();
  const navigate = useNavigate();

 useEffect(() => {
   if (admin) navigate("/");
  }, [admin, navigate]);

  const initialValues = { nombre: "", sector: "Soporte" };
  
  const validationSchema = Yup.object({
    nombre: Yup.string()
      .trim()
      .required("Debe ingresar nombre")
      .matches(/^[a-zA-ZñÑ]+(\s+[a-zA-ZñÑ]+)+$/, "Ingrese nombre completo")
  });

  const manejarEnvio = (values) => {
    login(values);
    navigate("/");
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "background.default" }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 420, width: "100%", borderRadius: 2 }}>
        <Typography variant="h5" mb={3} sx={{ fontWeight: 700 }}>Acceso del Administrador</Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={manejarEnvio}
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) => {
            const { nombre, sector } = values;

            return (
              <Form noValidate>
                <TextField
                  fullWidth
                  label="Nombre Completo"
                  name="nombre"
                  sx={{ mb: 2 }}
                  value={nombre} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.nombre && Boolean(errors.nombre)}
                  helperText={touched.nombre && errors.nombre}
                />

                <TextField
                  select
                  fullWidth
                  label="Sector"
                  name="sector"
                  sx={{ mb: 3 }}
                  value={sector} 
                  onChange={handleChange}
                >
                  <MenuItem value="Soporte">Soporte</MenuItem>
                  <MenuItem value="Gerencia">Gerencia</MenuItem>
                </TextField>

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  disabled={!isValid || !dirty}>
                  Ingresar al Sistema
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Paper>
    </Box>
  );
};

export default Login;