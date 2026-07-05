import {
  Box,
  TextField,
  Typography,
  Alert,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { SkeletonTabla } from "../components/common/SkeletonTabla";
import { TablaClientes } from "../components/common/TablaClientes";
import FormularioCliente from "../components/common/FormularioCliente";

import { ClientesContainer } from "../components/common/ClientesContainer";

const ListaClientes = () => {
  const [usuarios, setUsuarios] = useState(undefined);

  const [busqueda, setBusqueda] = useState("");

  const theme = useTheme();
  const esPantallaMovil = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const llamadaApi = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/users");
        if (!res.ok) throw new Error("Api no responde");

        const data = await res.json();
        setUsuarios(data);
      } catch (error) {
        console.log("Error en la api");
        setUsuarios(false);
      }
    };
    llamadaApi();
  }, []);

  //  LÓGICA DE FILTRADO (El "Motor")
  const usuariosFiltrados = Array.isArray(usuarios)
    ? usuarios.filter((user) => {
        const apellido = user.name.lastname.toLowerCase();
        const ciudad = user.address.city.toLowerCase();
        const termino = busqueda.toLowerCase();
        return apellido.includes(termino) || ciudad.includes(termino);
      })
    : [];

  return (
    <Box sx={{ p: 3 }}>
      <FormularioCliente />
      {/* LA INTERFAZ DEL BUSCADOR */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          Gestión de Clientes
        </Typography>
        <TextField
          fullWidth
          label="Buscar cliente por apellido o ciudad..."
          variant="outlined"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </Box>

      {/* RENDERIZADO CONDICIONAL */}

      {/* Estado: Cargando */}
      {usuarios === undefined && <SkeletonTabla filas={10} />}

      {/* Estado: Error */}
      {usuarios === false && (
        <Alert severity="error">
          Error de conexión: No se pudo cargar la lista de clientes desde la
          API.
        </Alert>
      )}

      {/* Estado: Éxito */}
      {Array.isArray(usuarios) &&
        (esPantallaMovil ? (
          <ClientesContainer clientes={usuariosFiltrados} />
        ) : (
          <TablaClientes clientes={usuariosFiltrados} />
        ))}
    </Box>
  );
};

export default ListaClientes;
