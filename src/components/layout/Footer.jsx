import { Box, Divider, Link, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack direction="row" sx={{ justifyContent: "space-between" }}>
      <Typography> © Panaderos Organizados - 2026</Typography>
      <Stack direction="row" spacing={1}>
        <Link
          color="error.contrastText"
          underline="hover"
          sx={{ cursor: "pointer" }}
        >
          Soporte
        </Link>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ bgcolor: "error.contrastText" }}
        />
        <Link
          color="error.contrastText"
          underline="hover"
          sx={{ cursor: "pointer" }}
        >
          Terminos
        </Link>
      </Stack>
    </Stack>
  );
};

export default Footer;
