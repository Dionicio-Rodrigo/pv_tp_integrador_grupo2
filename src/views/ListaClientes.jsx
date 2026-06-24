import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const ListaClientes = () => {
  const [usuarios, setUsuarios] = useState(undefined);
  useEffect(() => {
    const llamadaApi = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/users");

        if (!res.ok) throw new Error("Api no responde");

        setUsuarios(res.json());
      } catch (error) {
        console.log("Error en la api");
        setUsuarios(false);
      }
    };
    llamadaApi();
  }, []);

  if (usuarios == undefined) {
    return <>Cargando</>;
  }
  if (usuarios == false) {
    return <>Error</>;
  }

  return <>Datos Cargados</>;
};

export default ListaClientes;
