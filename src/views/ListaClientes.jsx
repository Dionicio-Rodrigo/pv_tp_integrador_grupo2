import {
  Box,
  TextField,
  Typography,
  Alert,
  Skeleton,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { SkeletonTabla } from "../components/common/SkeletonTabla";
import { TablaClientes } from "../components/common/TablaClientes";

const ListaClientes = () => {
  const [usuarios, setUsuarios] = useState(undefined);

  const [busqueda, setBusqueda] = useState("");

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
      {/* RENDERIZADO CONDICIONAL */}

      {/* Estado: Cargando */}
      {usuarios === undefined && (
        <Stack spacing={2}>
          <Skeleton
            height={100}
            variant="rounded"
            sx={{ bgcolor: "warning.main" }}
          />
          <SkeletonTabla filas={10} />
        </Stack>
      )}

      {/* Estado: Error */}
      {usuarios === false && (
        <Alert severity="error" variant="filled">
          Error de conexión: No se pudo cargar la lista de clientes desde la
          API.
        </Alert>
      )}

      {/* Estado: Éxito */}
      {Array.isArray(usuarios) && (
        <>
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
          <TablaClientes clientes={usuariosFiltrados} />
        </>
      )}
    </Box>
  );
};

export default ListaClientes;
