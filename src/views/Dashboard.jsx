import {
  FiberManualRecord,
  InfoOutlined,
  Notifications,
  NotificationsOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

const infoFilas = [
  { info: "Nombre de la Organización", dato: "Panaderos Organizados" },
  { info: "Fundado en", dato: "2026" },
  { info: "Miemtros Activos", dato: "10+" },
  { info: "Nombre de la Organización", dato: "Reunion Mensual - Julio 2026" },
  { info: "Sede Principal", dato: "San Salvador de Jujuy, Argentina" },
];

const Dashboard = () => {
  return (
    <Stack
      spacing={1}
      direction={{ xs: "column", sm: "row" }}
      sx={{ alignItems: { sx: "inherit", sm: "baseline" } }}
    >
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
                <TableRow>
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
