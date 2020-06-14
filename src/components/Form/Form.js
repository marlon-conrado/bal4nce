import React, { useState } from "react";
import Error from "../Error/Error";
import PropTypes from "prop-types";

const initialState = {
  name: "",
  amount: 0
};

const Form = ({ addExpense }) => {
  const [state, setstate] = useState(initialState);
  const [error, seterror] = useState(false);

  const handleChange = e => {
    seterror(false);
    setstate({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();

    if (isNaN(state.amount) || state.amount === 0) {
      seterror(true);
      return;
    }

    const expenses = {
      ...state,
      id: Date.now()
    };

    addExpense(expenses);
    setstate(initialState);
  };

  return (
    <form onSubmit={submitForm}>
      <h2>Agrega tus gastos aquí</h2>

      {error ? <Error msg="Campos inválidos" /> : ""}

      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          name="name"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={handleChange}
          value={state.name}
        />
      </div>

      <div className="campo">
        <label>Cantidad gasto</label>
        <input
          name="amount"
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange={handleChange}
          value={state.amount}
        />
      </div>

      <button type="submit" className="button-primary u-full-width">
        Agregar gasto
      </button>
    </form>
  );
};

Form.propTypes = {
  addExpense: PropTypes.func.isRequired
};

export default Form;
