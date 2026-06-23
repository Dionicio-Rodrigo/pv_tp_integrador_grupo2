import {
  AppBar,
  Avatar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Nav } from "./Nav";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "error.main", border: "none", borderRadius: "0" }}
    >
      <Toolbar component={Stack} direction="row" spacing={1}>
        <Box>
          <Typography variant="h5">Titulo Proyecto</Typography>
        </Box>
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
            >
              Nombre Apellido
            </Typography>
            <Typography variant="caption" color="warning">
              Rol - Mas datos
            </Typography>
          </Stack>
          <Avatar sx={{ bgcolor: "primary.main" }}>Ht</Avatar>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
