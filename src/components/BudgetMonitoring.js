const BudgetMonitoring = () => {
    const budgets = [
      { name: "Project Alpha", budget: "$10,000", expenses: "$7,500" },
      { name: "Project Beta", budget: "$12,000", expenses: "$12,000" },
      { name: "Project Gamma", budget: "$8,000", expenses: "$3,500" },
    ];
  
    return (
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Budget Monitoring</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {budgets.map((budget, index) => (
            <div key={index} className="p-4 border rounded-md shadow-sm">
              <h3 className="text-lg font-bold">{budget.name}</h3>
              <p>Budget: {budget.budget}</p>
              <p>Expenses: {budget.expenses}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BudgetMonitoring;
  