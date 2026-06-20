import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { CosmicBackground } from "../components/CosmicBackground.jsx";

export function Layout() {
  return (
    <>
      <CosmicBackground />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
