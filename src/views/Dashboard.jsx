import {
  InfoOutlined,
  NotificationsOutlined,
  FiberManualRecord,
} from "@mui/icons-material";
import { useAdmin } from "../context/AdminContext";
import {
  Container,
  Typography,
  Paper,
  Box,
  Stack,
  Divider,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { useEffect, useState } from "react";

const infoFilas = [
  { info: "Organización", dato: "Panaderos Organizados" },
  { info: "Fundado en", dato: "2026" },
  { info: "Eventos", dato: "Reunion Mensual - Julio 2026" },
  { info: "Sede", dato: "San Salvador de Jujuy, Argentina" },
];

const Dashboard = () => {
  const { admin } = useAdmin();
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => setClientes(data));
  }, []);

  return (
    <Stack spacing={1} direction={{ xs: "column", sm: "row" }}>
      <Stack spacing={1} sx={{ flexGrow: "1" }}>
        <Paper sx={{ p: "1em", flexGrow: "1" }}>
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
                        (ciudad, indice, self) =>
                          self.indexOf(ciudad) === indice,
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
        <Paper sx={{ p: "1em", flexGrow: "1" }}>
          <Stack direction="row" spacing={1} sx={{ m: "0.5em" }}>
            <InfoOutlined color="secondary" />
            <Typography variant="subtitle1" color="secondary" noWrap>
              Información General
            </Typography>
          </Stack>
          <Divider flexItem sx={{ bgcolor: "warning.main" }} />
          <TableContainer>
            <Table
              sx={{
                "& tr:last-child td, & tr:last-child th": {
                  borderBottom: 0,
                },
              }}
            >
              <TableBody>
                {infoFilas.map((r) => (
                  <TableRow key={r.info}>
                    <TableCell
                      align="left"
                      sx={{
                        px: "0",
                        py: "0.75em",
                        color: "secondary.main",
                        borderColor: "warning.main",
                      }}
                    >
                      {r.info}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        p: "0",
                        color: "error.main",
                        borderColor: "warning.main",
                        textWrap: "nowrap",
                      }}
                    >
                      {r.dato}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Stack>

      <Paper sx={{ p: "1em", flexGrow: "2" }}>
        <Stack direction="row" spacing={1} sx={{ m: "0.5em" }}>
          <NotificationsOutlined color="secondary" />
          <Typography variant="subtitle1" color="secondary" noWrap>
            Notificaciones
          </Typography>
        </Stack>

        <Divider flexItem sx={{ bgcolor: "warning.main" }} />

        <Box component={List} dense>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord fontSize="small" color="success" />
            </ListItemIcon>
            <ListItemText
              primary="Tu solicitud de certificación fue aprobada."
              secondary="Hace 10 minutos"
              sx={{
                color: "",
                "& .MuiListItemText-secondary": { color: "warning.main" },
              }}
            />
          </ListItem>
          <Divider flexItem sx={{ bgcolor: "warning.main" }} />
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord fontSize="small" color="success" />
            </ListItemIcon>
            <ListItemText
              primary="Kein Ryan te envio un mensaje."
              secondary="Hace 2 horas"
              sx={{
                color: "",
                "& .MuiListItemText-secondary": { color: "warning.main" },
              }}
            />
          </ListItem>
          <Divider flexItem sx={{ bgcolor: "warning.main" }} />
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Nuevo miembro registrado en tu región: Jimmie Klein."
              secondary="Ayer, 15:30"
              sx={{
                color: "",
                "& .MuiListItemText-secondary": { color: "warning.main" },
              }}
            />
          </ListItem>
          <Divider flexItem sx={{ bgcolor: "warning.main" }} />
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="La reunion mensual - Julio 2026 abrió inscripciones."
              secondary="Hace 3 días"
              sx={{
                color: "",
                "& .MuiListItemText-secondary": { color: "warning.main" },
              }}
            />
          </ListItem>
          <Divider flexItem sx={{ bgcolor: "warning.main" }} />
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Tu perfil fue verificado correctamente."
              secondary="Hace 2 semanas"
              sx={{
                color: "",
                "& .MuiListItemText-secondary": { color: "warning.main" },
              }}
            />
          </ListItem>
        </Box>
      </Paper>
    </Stack>
  );
};

export default Dashboard;
