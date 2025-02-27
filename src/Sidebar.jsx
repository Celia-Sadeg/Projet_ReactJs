import React from "react";
import "./Sidebar.css";

const Sidebar = ({ showSidebar, setShowSidebar, filterExpensesByTime }) => {
  return (
    <div className={`sidebar ${showSidebar ? "open" : ""}`}>
      <button className="close-btn" onClick={() => setShowSidebar(false)}>❌ Fermer</button>
      <h2>Suivi des Dépenses</h2>
      <p>📅 Dépenses cette semaine : <strong>{filterExpensesByTime("week")} €</strong></p>
      <p>📅 Dépenses ce mois : <strong>{filterExpensesByTime("month")} €</strong></p>
    </div>
  );
};

export default Sidebar;
