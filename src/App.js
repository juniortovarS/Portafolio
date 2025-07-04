import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import DrawerNav from "./components/DrawerNav";
import TakeoverLink from "./components/TakeoverLink";
import Bienvenida from "./components/Bienvenida";

import SobreMi from "./pages/SobreMi";
import Estudios from "./pages/Estudios";
import Habilidades from "./pages/Habilidades";
import Experiencia from "./pages/Experiencia";

const MainContent = ({ children }) => {
  const location = useLocation();
  const showDrawer = location.pathname !== "/" && location.pathname !== "/bienvenida";

  return (
    <>
      {showDrawer && <DrawerNav />}
      {children}
    </>
  );
};

function App() {
  return (
    <BrowserRouter basename="/Portafolio">
      <Routes>
        {/* Página de bienvenida por defecto */}
        <Route path="/" element={<Bienvenida />} />

        {/* Página con animación tipo Takeover */}
        <Route path="/portafolio" element={<TakeoverLink />} />

        {/* Rutas con navegación lateral */}
        <Route
          path="/sobremi"
          element={
            <MainContent>
              <SobreMi />
            </MainContent>
          }
        />
        <Route
          path="/estudios"
          element={
            <MainContent>
              <Estudios />
            </MainContent>
          }
        />
        <Route
          path="/habilidades"
          element={
            <MainContent>
              <Habilidades />
            </MainContent>
          }
        />
        <Route
          path="/experiencia"
          element={
            <MainContent>
              <Experiencia />
            </MainContent>
          }
        />

        {/* Redirección a bienvenida si ruta no existe */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



