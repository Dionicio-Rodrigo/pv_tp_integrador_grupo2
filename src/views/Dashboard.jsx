import { useAdmin } from "../context/AdminContext";
import { Container, Typography, Paper, Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { admin } = useAdmin();
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => setClientes(data));
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Stack spacing={3}>
          <Box>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "colores.oscuro", fontWeight: 700 }}
            >
              Bienvenido, {admin?.nombre}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "colores.marron" }}>
              Sector: <strong>{admin?.sector}</strong>
            </Typography>
          </Box>

          <Stack direction="row" spacing={2}>
            <Paper sx={{ p: 3, flex: 1, textAlign: "center" }}>
              <Typography
                variant="h3"
                sx={{ color: "primary.main", fontWeight: 700 }}
              >
                {clientes.length}
              </Typography>
              <Typography variant="body2" sx={{ color: "colores.marron" }}>
                Total Clientes
              </Typography>
            </Paper>

            <Paper sx={{ p: 3, flex: 1, textAlign: "center" }}>
              <Typography
                variant="h3"
                sx={{ color: "primary.main", fontWeight: 700 }}
              >
                {
                  clientes
                    .map((c) => c.address.city)
                    .filter(
                      (ciudad, indice, self) => self.indexOf(ciudad) === indice,
                    ).length
                }
              </Typography>
              <Typography variant="body2" sx={{ color: "colores.marron" }}>
                Ciudades
              </Typography>
            </Paper>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Dashboard;
