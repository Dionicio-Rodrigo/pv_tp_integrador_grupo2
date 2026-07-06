import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Divider,
  Stack,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Email,
  Phone,
  Home,
  Badge,
  Lock,
  LocationCity,
  Map,
} from "@mui/icons-material";
import { useAdmin } from "../context/AdminContext";

const BotonNavegacion = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.colores.marron,
  color: theme.palette.colores.beige,
  fontWeight: 700,
  borderRadius: "8px",
  textTransform: "none",
  padding: "8px 20px",
  "&:hover": { backgroundColor: theme.palette.colores.oscuro },
}));

const DetalleCliente = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { admin } = useAdmin();

  const [cliente, setCliente] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        setCargando(true);
        const respuesta = await fetch(`https://fakestoreapi.com/users/${id}`);
        if (!respuesta.ok)
          throw new Error("No se pudo conectar con el servidor");
        const datos = await respuesta.json();
        setCliente(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };
    obtenerDatos();
  }, [id]);

  const handleEliminar = async () => {
    const confirmar = window.confirm(
      "¿Estás seguro de que deseas eliminar este cliente?",
    );
    if (!confirmar) return;

    try {
      const res = await fetch(`https://fakestoreapi.com/users/${id}`, {
        method: "DELETE",
      });

      if (!res.ok)
        throw new Error("No se pudo eliminar el cliente en el servidor.");

      const data = await res.json();
      console.log("Cliente eliminado (Simulación de API):", data);

      alert(
        `Cliente ${name.firstname} ${name.lastname} eliminado correctamente.`,
      );

      navigate("/clientes");
    } catch (err) {
      console.error(err);
      alert("Hubo un problema de red al intentar eliminar al cliente.");
    }
  };

  if (cargando)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );

  if (error || !cliente)
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">{error || "Cliente no encontrado"}</Alert>
        <BotonNavegacion
          variant="contained"
          onClick={() => navigate("/clientes")}
          sx={{ mt: 2 }}
        >
          Regresar al listado
        </BotonNavegacion>
      </Container>
    );

  const { name, email, phone, username, password, address } = cliente;
  const { street, number, city, zipcode } = address;

  const ponerMayuscula = (palabra) =>
    palabra.charAt(0).toUpperCase() + palabra.slice(1);

  return (
    <Stack spacing={{xs:1,md:2}} >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BotonNavegacion onClick={() => navigate("/clientes")}>
          Regresar al Listado
        </BotonNavegacion>
        {admin?.sector === "Gerencia" && (
          <BotonNavegacion
            variant="contained"
            color="error"
            onClick={handleEliminar}
          >
            Eliminar Cliente
          </BotonNavegacion>
        )}
      </Box>
      <Stack
        container
        spacing={{ xs: 1, md: 2 }}
        sx={{ flexGrow: "1" }}
        direction={{ sm: "column", md: "row" }}
      >
        <Paper
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            height: "100%",
            flexGrow: "1",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              color: "colores.marron",
              lineHeight: 1.2,
              mb: 1,
            }}
          >
            {ponerMayuscula(name.firstname)} <br />
            {ponerMayuscula(name.lastname)}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            ID de Cliente: #{id}
          </Typography>

          <Divider sx={{ width: "100%", mb: 3 }} />

          <Box
            sx={{
              width: "100%",
              bgcolor: "colores.crema",
              p: 2,
              borderRadius: 2,
              border: "1px dashed",
              borderColor: "colores.beige",
            }}
          >
            <Typography
              sx={{
                color: "colores.marron",
                fontWeight: 700,
                mb: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Lock sx={{ fontSize: 18, mr: 1 }} /> Acceso al Sistema
            </Typography>
            <Typography variant="body2">
              <strong>Usuario:</strong> {username}
            </Typography>
            <Typography variant="body2">
              <strong>Clave:</strong> {password}
            </Typography>
          </Box>
        </Paper>
        <Paper sx={{ p: 4, flexGrow: "1" }}>
          <Typography
            variant="h6"
            sx={{ color: "colores.acento", fontWeight: 700, mb: 2 }}
          >
            Información de Contacto
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Email color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="E-mail" secondary={email} />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Phone color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Teléfono" secondary={phone} />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />
          <Typography
            variant="h6"
            sx={{ color: "colores.acento", fontWeight: 700, mb: 2 }}
          >
            Ubicación
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Home sx={{ mr: 2, color: "colores.beige" }} />
                  <Typography>
                    <strong>Dirección:</strong> {street} {number}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationCity sx={{ mr: 2, color: "colores.beige" }} />
                  <Typography>
                    <strong>Ciudad:</strong> {city}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Map sx={{ mr: 2, color: "colores.beige" }} />
                  <Typography>
                    <strong>Codigo Postal:</strong> {zipcode}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </Stack>
  );
};

export default DetalleCliente;
