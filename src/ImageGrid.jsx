import { useState } from "react";
import "./index.css";
import BudgetChart from "./BudgetChart"; // 🔥 Import du graphique

export default function BudgetManager() {
  const [transactions, setTransactions] = useState([]); // ✅ Correction ici
  const [description, setDescription] = useState(""); // ✅ Correction ici
  const [amount, setAmount] = useState(""); // ✅ Correction ici
  const [type, setType] = useState("income");
  const [filter, setFilter] = useState("all");

  // ✅ Ajouter une transaction
  const addTransaction = () => {
    console.log("Description:", description, "Montant:", amount); // 🔍 Vérification
    if (!description || !amount) return alert("Veuillez remplir tous les champs.");
    
    setTransactions([
      ...transactions,
      { id: Date.now(), description, amount: Number(amount), type } // ✅ Conversion ici
    ]);

    setDescription("");
    setAmount("");
  };

  // ✅ Supprimer une transaction
  const removeTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  // ✅ Calcul du solde total
  const totalBalance = transactions.reduce((acc, t) => {
    return t.type === "income" ? acc + t.amount : acc - t.amount;
  }, 0);

  // ✅ Filtrer les transactions
  const filteredTransactions = transactions.filter(t => 
    filter === "all" || t.type === filter
  );

  return (
    <div className="budget-container">
      <h1>💰 Gestionnaire de Budget</h1>
      <h2>Solde : {totalBalance.toFixed(2)} €</h2>

      {/* ✅ Conteneur principal avec deux colonnes */}
      <div className="budget-content">
        {/* ✅ Graphique à gauche */}
        <BudgetChart transactions={transactions} />

        {/* ✅ Transactions à droite */}
        <div className="transactions-section">
          {/* ✅ Ajout de transaction */}
          <div className="add-transaction">
            <input 
              type="text" 
              placeholder="Description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            />
            <input 
              type="number" 
              placeholder="Montant" 
              value={amount} 
              onChange={(e) => {
                console.log("Valeur saisie:", e.target.value); // 🔍 Vérification
                setAmount(Number(e.target.value)); // ✅ Conversion ici
              }} 
            />
           <div className="type-selector">
  <button 
    className={type === "income" ? "selected" : ""}
    onClick={() => setType("income")}
  >
    💰 Revenu
  </button>
  <button 
    className={type === "expense" ? "selected" : ""}
    onClick={() => setType("expense")}
  >
    💸 Dépense
  </button>
</div>

            <button onClick={addTransaction}>➕ Ajouter</button>
          </div>

          {/* ✅ Filtre des transactions */}
          <div className="filter">
            <button onClick={() => setFilter("all")}>📊 Toutes</button>
            <button onClick={() => setFilter("income")}>💵 Revenus</button>
            <button onClick={() => setFilter("expense")}>💸 Dépenses</button>
          </div>

          {/* ✅ Liste des transactions */}
          <ul className="transactions-list">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((t) => (
                <li key={t.id} className={t.type === "income" ? "income" : "expense"}>
                  {t.description} - {t.amount.toFixed(2)} €
                  <button onClick={() => removeTransaction(t.id)}></button>
                </li>
              ))
            ) : (
              <p>Aucune transaction.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
