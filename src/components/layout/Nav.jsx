import styled from "@emotion/styled";
import {
  AccountCircleOutlined,
  GroupOutlined,
  HomeOutlined,
} from "@mui/icons-material";
import { ToggleButtonGroup, ToggleButton, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <ToggleButtonGroup
      size="small"
      sx={{
        bgcolor: "rgba(255,255,255,0.10)",
        borderRadius: "8px",
        padding: "3px",
        gap: "3px",
        position: "relative",
        top: "50%",
        right: "10%",
        "& .MuiToggleButton-root": {
          color: "primary.contrastText",
          fontWeight: "bold",
          border: "none",
          textTransform: "none",
          fontSize: "12px",
          gap: 0.6,
          borderRadius: "8px !important",
          "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
          "&.active": { bgcolor: "success.main" },
        },
      }}
    >
      <ToggleButton component={NavLink} to="/">
        <HomeOutlined />
        <Box sx={{ display: { xs: "none", sm: "inherit" } }}>Inicio</Box>
      </ToggleButton>
      <ToggleButton component={NavLink} to="/Usuarios">
        <GroupOutlined />
        <Box sx={{ display: { xs: "none", sm: "inherit" } }}>Usuarios</Box>
      </ToggleButton>
      <ToggleButton component={NavLink} to="/Mi-Perfil">
        <AccountCircleOutlined />
        <Box sx={{ display: { xs: "none", sm: "inherit" } }}>Mi Perfil</Box>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
