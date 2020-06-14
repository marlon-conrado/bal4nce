import React from "react";
import Expense from "./Expense";
import PropTypes from "prop-types";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {expenses.map(expense => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape(Expense.propTypes.expense))
};

export default ExpenseList;
