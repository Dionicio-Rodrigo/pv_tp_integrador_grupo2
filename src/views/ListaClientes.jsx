import { Box, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { SkeletonTabla } from "../components/common/SkeletonTabla";
import { TablaClientes } from "../components/common/TablaClientes";

const ListaClientes = () => {
  const [usuarios, setUsuarios] = useState(undefined);
  useEffect(() => {
    const llamadaApi = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/users");

        if (!res.ok) throw new Error("Api no responde");

        const data = await res.json();
        setUsuarios(data);
      } catch (error) {
        console.log("Error en la api");
        setUsuarios(false);
      }
    };
    llamadaApi();
  }, []);

  if (usuarios == undefined) {
    return (
      <Box>
        <SkeletonTabla filas={10} />
      </Box>
    );
  }
  if (usuarios == false) {
    return <>Error</>;
  }

  return <TablaClientes clientes={usuarios} />;
};

export default ListaClientes;
