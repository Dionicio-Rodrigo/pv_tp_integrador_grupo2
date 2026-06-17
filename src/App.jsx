import { useState } from "react";
import LayoutPagina from "./components/layout/LayoutPagina";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPagina />}>
            {/* Rutas de las otras vistas */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
