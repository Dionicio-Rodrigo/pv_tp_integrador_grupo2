import { Box, Container, Stack, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LayoutPagina = () => {
  return (
    <Stack sx={{ height: "100vh" }}>
      <Box component="header" sx={{ position: "relative" }}>
        <Header />
      </Box>
      <Box component="main" sx={{ flexGrow: "1", p: "1em" }}>
        <Outlet />
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
        <Footer />
      </Box>
    </Stack>
  );
};

export default LayoutPagina;
