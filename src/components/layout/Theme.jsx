import { createTheme } from "@mui/material";

//Aca van los colores y estilos básicos de toda la pagina
const COLORES = {
  oscuro: "#3B1F08",
  acento: "#C8651A",
  crema: "#FDF0E0",
  beige: "#C8A882",
  marron: "#7A3B10",
  blanco: "#FDF5E8",
};
export const Theme = createTheme({
  palette: {
    primary: { main: COLORES.acento, contrastText: COLORES.crema },
    secondary: { main: COLORES.marron, contrastText: COLORES.beige },
    success: { main: COLORES.acento, contrastText: COLORES.crema },
    warning: { main: COLORES.beige, contrastText: COLORES.crema },
    error: { main: COLORES.oscuro, contrastText: COLORES.beige },
    background: { default: COLORES.crema, paper: COLORES.blanco },
    colores: {
      oscuro: "#3B1F08",
      acento: "#C8651A",
      crema: "#FDF0E0",
      beige: "#C8A882",
      marron: "#7A3B10",
      blanco: "#FDF5E8",
    },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
  },
  components: {
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          color: `${COLORES.marron}`,
          borderRadius: "10px",
          border: `solid 0.25px ${COLORES.beige}`,
          backgroundColor: COLORES.blanco,
          padding: "0.5em",
        },
      },
    },
  },
});
