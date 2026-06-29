import {
  AppBar,
  Avatar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Nav } from "./Nav";
import { useAdmin } from "../../context/AdminContext";
import { BakeryDining } from "@mui/icons-material";

const Header = () => {
  const { admin, logout } = useAdmin();

  if (!admin) return null;

  const partes = admin.nombre.trim().split(/\s+/);
  const iniciales = (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "error.main", border: "none", borderRadius: "0" }}
    >
      <Toolbar component={Stack} direction="row" spacing={1}>
        <Stack spacing={1} direction="row">
          <Box
            sx={{
              width: 50,
              height: 50,
              bgcolor: "success.main",
              borderRadius: "7px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              flexShrink: 0,
            }}
          >
            <BakeryDining sx={{ fontSize: 45 }} />
          </Box>
          <Typography variant="h5" sx={{ alignSelf: "center" }}>
            Panaderos Organizados
          </Typography>
        </Stack>
        <Box
          sx={{
            flexGrow: "1",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Nav />
        </Box>
        <Stack direction="row" spacing={1}>
          <Stack sx={{ display: { xs: "none", md: "inherit" } }}></Stack>
          <Stack>
            <Typography
              variant="caption"
              sx={{ color: "warning.contrastText", textAlign: "right" }}
            >
              {admin.nombre}
            </Typography>
            <Typography variant="caption" color="warning">
              {admin.sector}
            </Typography>
          </Stack>
          <Avatar sx={{ bgcolor: "primary.main" }}>{iniciales} </Avatar>
          <Button
            variant="outlined"
            size="small"
            onClick={logout}
            sx={{ borderColor: "warning.main", color: "warning.contrastText" }}
          >
            CERRAR SESION
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
