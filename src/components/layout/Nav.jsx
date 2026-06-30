import styled from "@emotion/styled";
import {
  AccountCircleOutlined,
  GroupOutlined,
  HomeOutlined,
} from "@mui/icons-material";
import { ToggleButtonGroup, ToggleButton, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ToggleButtonGroup
      size="small"
      sx={{
        bgcolor: "rgba(255,255,255,0.10)",
        borderRadius: "8px",
        padding: "3px",
        gap: "3px",
        "& .MuiToggleButton-root": {
          color: "primary.contrastText",

          border: "none",
          textTransform: "none",
          fontSize: "1rem",
          gap: 0.6,
          borderRadius: "8px !important",
          "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
          "&.active": { bgcolor: "success.main" },
        },
      }}
    >
      <ToggleButton component={NavLink} to="/">
        <HomeOutlined sx={{ fontSize: 30 }} />
        <Box sx={{ display: { xs: "none", sm: "inherit" } }}>Inicio</Box>
      </ToggleButton>
      <ToggleButton component={NavLink} to="/Usuarios">
        <GroupOutlined sx={{ fontSize: 30 }} />
        <Box sx={{ display: { xs: "none", sm: "inherit" } }}>Usuarios</Box>
      </ToggleButton>
      <ToggleButton component={NavLink} to="/Mi-Perfil">
        <AccountCircleOutlined sx={{ fontSize: 30 }} />
        <Box sx={{ display: { xs: "none", sm: "inline" }, flexWrap: "nowrap" }}>
          Mi Perfil
        </Box>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Nav;
