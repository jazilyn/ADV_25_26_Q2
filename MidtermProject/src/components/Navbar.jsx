import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">The Tea Cozy</Link>

      <nav className="nav-links">
        <Link to="/mission">Mission</Link>
        <Link to="/featured">Featured Tea</Link>
        <Link to="/locations">Locations</Link>
      </nav>
    </header>
  );
}
