import { useState } from "react";
import LayoutPagina from "./components/layout/LayoutPagina";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListaClientes from "./views/ListaClientes";
import RutaProtegida from "./components/common/RutaProtegida";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

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
            <Route path="Usuarios" element={<ListaClientes />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
