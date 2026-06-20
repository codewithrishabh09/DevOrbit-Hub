import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./layouts/Layout.jsx";
import { routes } from "./routes/routes.jsx";
import { useLenis } from "./hooks/useLenis.js";
import { useMouseGlow } from "./hooks/useMouseGlow.js";

export default function App() {
  const location = useLocation();
  useLenis();
  useMouseGlow();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
