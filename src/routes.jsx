import { Routes, Route, Navigate } from "react-router-dom";
import FormularioTeclado from "./components/FormularioTeclado";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/formulario-teclado" />} />
    <Route path="formulario-teclado" element={<FormularioTeclado />} />
  </Routes>
);
