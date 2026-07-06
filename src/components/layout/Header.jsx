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
import { useAdmin } from "../../context/AdminContext";
import { BakeryDining, LogoutOutlined } from "@mui/icons-material";
import Nav from "./Nav";

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
            }}
          >
            <BakeryDining sx={{ fontSize: 45 }} />
          </Box>
          <Typography
            variant="h5"
            sx={{ alignSelf: "center", display: { xs: "none", md: "inherit" } }}
          >
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
          <Stack sx={{ display: { xs: "none", md: "inherit" } }}>
            <Typography
              variant="caption"
              sx={{ color: "warning.contrastText" }}
              align="right"
            >
              {admin.nombre}
            </Typography>
            <Typography variant="caption" color="warning" align="right">
              {admin.sector}
            </Typography>
          </Stack>
          <Avatar sx={{ bgcolor: "primary.main" }}>{iniciales} </Avatar>
          <Button
            variant="contained"
            size="small"
            onClick={logout}
            color="success"
            sx={{ borderColor: "warning.main", color: "warning.contrastText" }}
          >
            <LogoutOutlined />
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
