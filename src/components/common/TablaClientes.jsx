import styled from "@emotion/styled";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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
              {/* <Encabezado> para la info</Encabezado> */}
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
                {/* <Dato>Aca iria un boton para ir a la info detallada</Dato> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
