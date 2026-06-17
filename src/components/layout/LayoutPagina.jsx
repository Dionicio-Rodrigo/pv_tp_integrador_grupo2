import { Box, Container, Stack } from "@mui/material";

const LayoutPagina = () => {
  return (
    <Stack sx={{ height: "100vh" }}>
      <Box component="header">Prueba header {/*Componente Header*/}</Box>
      <Container component="main" sx={{ flexGrow: "1" }}>
        Prueba main {/*  Aca se colocara el componente Outlet */}
      </Container>
      <Box component="footer">Prueba footer {/*Componente Footer*/}</Box>
    </Stack>
  );
};

export default LayoutPagina;
