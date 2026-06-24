import { useState } from "react";
import LayoutPagina from "./components/layout/LayoutPagina";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaClientes from "./views/ListaClientes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPagina />}>
            {/* Rutas de las otras vistas */}
            <Route path="Usuarios" element={<ListaClientes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
