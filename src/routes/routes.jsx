import { About } from "../pages/About.jsx";
import { Blog } from "../pages/Blog.jsx";
import { Careers } from "../pages/Careers.jsx";
import { Community } from "../pages/Community.jsx";
import { Contact } from "../pages/Contact.jsx";
import { Home } from "../pages/Home.jsx";
import { Internships } from "../pages/Internships.jsx";
import { Portfolio } from "../pages/Portfolio.jsx";
import { Services } from "../pages/Services.jsx";

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Internships", path: "/internships" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Community", path: "/community" },
  { label: "Careers", path: "/careers" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" }
];

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/internships", element: <Internships /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/community", element: <Community /> },
  { path: "/careers", element: <Careers /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> }
];
