import { Box, Container, Stack, Paper } from "@mui/material";
import { Nav } from "./Nav";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const LayoutPagina = () => {
  return (
    <Stack sx={{ height: "100vh" }}>
      <Box component="header">
        <Header />
      </Box>
      <Box component="main" sx={{ flexGrow: "1", p: "1em" }}>
        {/* Aca tiene que ir el componente Outlet */}
        {/* Los componentes que salen ahora son solo ejemplos */}
        <Stack spacing={1}>
          <Paper>Probando</Paper>
          <Paper>Probando</Paper>
        </Stack>
      </Box>
      <Box
        component="footer"
        sx={{
          bgcolor: "error.main",
          color: "error.contrastText",
          px: "1em",
          py: "0.25em",
        }}
      >
        Texto Ejemplo
      </Box>
    </Stack>
  );
};

export default LayoutPagina;
