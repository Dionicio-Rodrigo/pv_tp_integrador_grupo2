import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const SkeletonTabla = ({ filas }) => {
  const dfilas = Array(filas).fill(null);
  const dcolumnas = Array(6).fill(null);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={dcolumnas.length}
              sx={{ border: "none", px: "5px", py: "10px" }}
            >
              <Skeleton
                variant="rounded"
                sx={{ bgcolor: "warning.main" }}
                height={40}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dfilas.map((f) => (
            <TableRow>
              {dcolumnas.map((c) => (
                <TableCell
                  colSpan={1}
                  sx={{ border: "none", px: "5px", py: "10px" }}
                >
                  <Skeleton
                    variant="rounded"
                    sx={{ bgcolor: "warning.main" }}
                    height={30}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
