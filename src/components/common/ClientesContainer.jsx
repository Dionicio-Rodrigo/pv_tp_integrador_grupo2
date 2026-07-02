import {
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ClientesContainer = ({ clientes }) => {
  const navigate = useNavigate();

  return (
    <Stack direction="column" spacing={1}>
      {clientes.map((c) => (
        <Card key={c.id} sx={{ p: 0 }}>
          {/* El CardAction tendra un `onClick={() => {navigate("/")}}` para que pueda navegar su pagina de detalles */}
          <CardActionArea>
            <CardContent sx={{ bgcolor: "secondary.main" }}>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography variant="h5" color="warning">
                  {`${c.name.firstname.charAt(0).toUpperCase()}${c.name.firstname.slice(1)} `}
                  {`${c.name.lastname.charAt(0).toUpperCase()}${c.name.lastname.slice(1)}`}
                </Typography>
                <Typography gutterBottom variant="caption" color="warning">
                  ID: {c.id}
                </Typography>
              </Stack>
            </CardContent>

            <Divider flexItem sx={{ bgcolor: "warning.main" }} />

            <CardContent>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography variant="body2">Telefono:</Typography>
                <Typography variant="body2">{c.phone}</Typography>
              </Stack>
              <Divider sx={{ my: "5px", bgcolor: "warning.main" }} />
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography variant="body2">Email:</Typography>
                <Typography variant="body2">{c.email}</Typography>
              </Stack>
              <Divider sx={{ my: "5px", bgcolor: "warning.main" }} />
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography variant="body2">Ciudad:</Typography>
                <Typography variant="body2">{c.address.city}</Typography>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Stack>
  );
};
