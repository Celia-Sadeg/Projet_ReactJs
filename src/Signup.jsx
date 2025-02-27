import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setMessage("❌ Veuillez remplir tous les champs !");
      return;
    }

    setMessage("✅ Compte créé avec succès !");
    // Ici, on pourrait envoyer les données à un backend
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup-container">
      <h2>Créer un compte</h2>
      {message && <p className={message.includes("❌") ? "error" : "success"}>{message}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Signup;
