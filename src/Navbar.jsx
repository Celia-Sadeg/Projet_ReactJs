import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>💰 Budget Manager</h1>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/dashboard">Tableau de bord</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
