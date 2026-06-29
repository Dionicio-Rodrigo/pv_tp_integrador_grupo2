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
import { BakeryDining } from "@mui/icons-material";

const Header = () => {
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
          <Stack sx={{ display: { xs: "none", md: "inherit" } }}>
            <Typography
              variant="caption"
              sx={{ color: "warning.contrastText", textAlign: "right" }}
            >
              Nombre Apellido
            </Typography>
            <Typography
              variant="caption"
              color="warning"
              sx={{ textAlign: "right" }}
            >
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
