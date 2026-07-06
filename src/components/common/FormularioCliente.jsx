import { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { ExpandMore, Save } from "@mui/icons-material";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.object({
    firstname: Yup.string()
      .trim()
      .lowercase()
      .required("El nombre es obligatorio"),
    lastname: Yup.string()
      .trim()
      .lowercase()
      .required("El apellido es obligatorio"),
  }),
  email: Yup.string()
    .email("Ingresa un correo válido Ej: user@pagina.com")
    .required("El correo es obligatorio"),
  phone: Yup.string().trim().required("El teléfono es obligatorio"),
  address: Yup.object({
    city: Yup.string().trim().required("La ciudad es obligatoria"),
    street: Yup.string().optional().trim(),
    number: Yup.number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .optional()
      .typeError("El número debe ser un valor numérico"),
  }),
});

const initialValues = {
  email: "",
  username: "",
  password: "",
  name: {
    firstname: "",
    lastname: "",
  },
  address: {
    city: "",
    street: "",
    number: "",
    zipcode: "",
    geolocation: {
      lat: "",
      long: "",
    },
  },
  phone: "",
};

const FormikInput = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      {...field}
      {...props}
      label={label}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

const FormularioCliente = () => {
  const [open, setOpen] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [respuesta, setRespuesta] = useState({ texto: "", tipo: "", id: "" });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const manejarEnvio = (values, { resetForm }) => {
    console.log(values);
    const datosNormalizados = validationSchema.cast(values);
    console.log(datosNormalizados);

    setCargando(true);
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosNormalizados),
    })
      .then((response) => response.json())
      .then((data) =>
        setRespuesta({
          texto: `Nuevo cliente con ID: ${data.id} ha sido guardado correctamente`,
          tipo: "success",
          id: data.id,
        }),
      )
      .catch((error) =>
        setRespuesta({
          texto: "Error al guardar el cliente",
          tipo: "error",
          id: "",
        }),
      )
      .finally(() => {
        setOpen(true);
        setCargando(false);
        resetForm();
      });
  };

  return (
    <Box>
      <Accordion
        sx={{
          borderRadius: "10px",
          padding: "0",
          bgcolor: "secondary.main",
          "&:last-of-type": {
            borderRadius: "10px",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore color="warning" fontSize="large" />}
          sx={{
            padding: "0.5em",
            px: "1.5em",
            color: "secondary.contrastText",
          }}
        >
          <Typography variant="h5">Alta de cliente</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            padding: "1em",
            margin: "0",
            bgcolor: "background.paper",
          }}
        >
          <Box>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={manejarEnvio}
            >
              {({ isValid, dirty }) => (
                <Form noValidate>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                      Datos del Cliente
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                      <FormikInput
                        name="name.firstname"
                        label="Nombre"
                        fullWidth
                        sx={{ mb: 2 }}
                      />
                      <FormikInput
                        name="name.lastname"
                        label="Apellido"
                        fullWidth
                        sx={{ mb: 2 }}
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                      Contacto
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                      <FormikInput
                        name="email"
                        label="Email"
                        fullWidth
                        sx={{ mb: 2 }}
                      />
                      <FormikInput
                        name="phone"
                        label="Teléfono"
                        fullWidth
                        sx={{ mb: 2 }}
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                      Dirección
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                      <FormikInput
                        name="address.city"
                        label="Ciudad"
                        fullWidth
                        sx={{ mb: 2 }}
                      />
                      <FormikInput
                        name="address.street"
                        label="Calle"
                        fullWidth
                        sx={{ mb: 2 }}
                      />
                      <FormikInput
                        name="address.number"
                        label="Número"
                        fullWidth
                        sx={{ mb: 2 }}
                      />
                    </Stack>
                  </Box>
                  <Stack spacing={2}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ maxWidth: "200px", alignSelf: "center" }}
                      disabled={cargando || !isValid || !dirty}
                      startIcon={
                        cargando ? (
                          <CircularProgress size={20} color="inherit" />
                        ) : (
                          <Save />
                        )
                      }
                    >
                      {cargando ? "Guardando..." : "Guardar Cliente"}
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ textWrap: "nowrap" }}
      >
        <Alert variant="filled" severity={respuesta.tipo}>
          {respuesta.texto}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FormularioCliente;
