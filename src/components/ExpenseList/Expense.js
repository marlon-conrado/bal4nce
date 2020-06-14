import React from "react";
import PropTypes from "prop-types";

const Expense = ({ expense }) => {
  return (
    <li className="gastos">
      <p>
        {expense.name}
        <span className="gasto">$ {expense.amount}</span>
      </p>
    </li>
  );
};

Expense.propTypes = {
  expense: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired
  }).isRequired
};

export default Expense;
