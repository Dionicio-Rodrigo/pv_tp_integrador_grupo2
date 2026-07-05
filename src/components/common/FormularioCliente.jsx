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

  const clienteInicial = {
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
      number: 0,
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      },
    },
    phone: "",
  };
  const [cliente, setCliente] = useState(clienteInicial);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCargando(true);
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente),
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
      });

    setCliente(clienteInicial);
  };
  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
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
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Nombre"
                name="name.firstname"
                value={cliente.name.firstname}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Apellido"
                name="name.lastname"
                value={cliente.name.lastname}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Email"
                name="email"
                value={cliente.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Telefono"
                name="phone"
                value={cliente.phone}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Ciudad"
                name="address.city"
                value={cliente.address.city}
                onChange={handleChange}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ maxWidth: "200px", alignSelf: "center" }}
                disabled={cargando}
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
