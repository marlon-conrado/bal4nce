import React, { useState, useEffect } from "react";
import Question from "./components/Question/Question";
import Form from "./components/Form/Form";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Budget from "./components/Budget/Budget";

function App() {
  const [balance, setbalance] = useState(0);
  const [availablebalance, setavailablebalance] = useState(0);
  const [expenses, setexpenses] = useState([]);

  const saveAmount = amount => {
    setbalance(amount);
    setavailablebalance(amount);
  };

  const addExpense = expense => {
    setexpenses([...expenses, expense]);
  };

  // Calculate available balance
  useEffect(() => {
    let totalExpenses = 0;

    expenses.forEach(expense => {
      totalExpenses += Number.parseFloat(expense.amount);
    });

    const availableBalance = Number.parseFloat(balance) - totalExpenses;
    setavailablebalance(availableBalance);
  }, [expenses, balance]);

  const isBalanceEmpty = balance === 0;

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {isBalanceEmpty ? (
            <Question onSaveAmount={saveAmount} />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form addExpense={addExpense} />
              </div>
              <div className="one-half column">
                <ExpenseList expenses={expenses} />
                <Budget budget={balance} availableBalance={availablebalance} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
