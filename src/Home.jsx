import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenue sur Budget Manager</h1>
      <p>Gérez vos finances simplement et efficacement.</p>
      <Link to="/dashboard" className="cta-button">Accéder au tableau de bord</Link>
    </div>
  );
};

export default Home;
