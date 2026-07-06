import { useState } from "react";
import LayoutPagina from "./components/layout/LayoutPagina";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListaClientes from "./views/ListaClientes";
import RutaProtegida from "./components/common/RutaProtegida";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import DetalleCliente from "./views/DetalleCliente.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <RutaProtegida>
                <LayoutPagina />
              </RutaProtegida>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="Clientes" element={<ListaClientes />} />
            <Route path="clientes/:id" element={<DetalleCliente />} /> 
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
