import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import DrawerNav from "./components/DrawerNav";
import TakeoverLink from "./components/TakeoverLink";

import SobreMi from "./pages/SobreMi";
import Estudios from "./pages/Estudios";
import Habilidades from "./pages/Habilidades";
import Experiencia from "./pages/Experiencia";

const MainContent = ({ children }) => {
  const location = useLocation();
  const showDrawer = location.pathname !== "/";

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
        {/* Pantalla principal con TakeoverLink */}
        <Route path="/" element={<TakeoverLink />} />

        {/* Secciones con DrawerNav */}
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

        {/* Redirigir rutas no válidas al inicio */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
