import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function BudgetChart({ transactions }) {
  // Préparer les données du graphique
  const chartData = [
    { name: "Revenus", value: transactions.filter(t => t.type === "income").reduce((acc, t) => acc + t.amount, 0) },
    { name: "Dépenses", value: transactions.filter(t => t.type === "expense").reduce((acc, t) => acc + t.amount, 0) },
  ];

  // Couleurs du graphique
  const COLORS = ["#4CAF50", "#FF5733"];

  return (
    <div className="chart-container">
      <h3>📊 Répartition des Dépenses et Revenus</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
