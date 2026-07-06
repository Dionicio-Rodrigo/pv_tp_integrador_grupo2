import styled from "@emotion/styled";
import { InfoOutlineRounded } from "@mui/icons-material";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Fab,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Encabezado = styled(TableCell)`
  color: ${({ theme }) => theme.palette.secondary.contrastText};
  font-weight: bold;
`;

const Dato = styled(TableCell)`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-weight: bold;
  border-bottom-color: ${({ theme }) => theme.palette.warning.main};
  text-wrap: nowrap;
`;
// El borde del ultimo elemento se ve doble

export const TablaClientes = ({ clientes }) => {
  const navigate = useNavigate();

  const manejarClick = (id) => {
    navigate(`/clientes/${id}`);
  };

  return (
    <Stack>
      <TableContainer component={Paper} sx={{ p: "0" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "secondary.main" }}>
              <Encabezado align="center">ID</Encabezado>
              <Encabezado>NOMBRE</Encabezado>
              <Encabezado>APELLIDO</Encabezado>
              <Encabezado>E-MAIL</Encabezado>
              <Encabezado>TELEFONO</Encabezado>
              <Encabezado>CIUDAD</Encabezado>
              <Encabezado></Encabezado>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map((c) => (
              <TableRow key={c.id} hover>
                <Dato align="center">{c.id}</Dato>
                <Dato>{`${c.name.firstname.charAt(0).toUpperCase()}${c.name.firstname.slice(1)}`}</Dato>
                <Dato>{`${c.name.lastname.charAt(0).toUpperCase()}${c.name.lastname.slice(1)}`}</Dato>
                <Dato>{c.email}</Dato>
                <Dato>{c.phone}</Dato>
                <Dato>{c.address.city}</Dato>
                <Dato>
                  <Tooltip title="Ver detalles del cliente">
                    <Fab
                      variant="outlined"
                      color="success"
                      onClick={() => navigate(`/clientes/${c.id}`)}
                      size="small"
                      sx={{ boxShadow: "none" }}
                    >
                      <InfoOutlineRounded />
                    </Fab>
                  </Tooltip>
                </Dato>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
