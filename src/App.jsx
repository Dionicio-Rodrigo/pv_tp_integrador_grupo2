import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPagina from "./components/layout/LayoutPagina";
import ListaClientes from "./views/ListaClientes";
import Dashboard from "./views/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPagina />}>
            {/* Rutas de las otras vistas */}
            <Route index element={<Dashboard />} />
            <Route path="Usuarios" element={<ListaClientes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
