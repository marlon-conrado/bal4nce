import React, { Fragment, useState } from "react";
import Error from "../Error/Error";
import PropTypes from "prop-types";

const Question = ({ onSaveAmount }) => {
  const [amount, setamount] = useState(0);
  const [error, seterror] = useState(false);

  const handleChange = e => {
    seterror(false);
    const parsedValue = Number(e.target.value);
    setamount(parsedValue);
  };

  const submitForm = e => {
    e.preventDefault();

    if (!amount || isNaN(amount) || amount === 0) {
      seterror(true);
      return;
    }

    onSaveAmount(amount);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error msg="Presupuesto incorrecto" /> : ""}

      <form onSubmit={submitForm}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          value={amount}
          onChange={handleChange}
        ></input>

        <button type="submit" className="button-primary u-full-width">
          Agregar
        </button>
      </form>
    </Fragment>
  );
};

Question.propTypes = {
  onSaveAmount: PropTypes.func.isRequired
};

export default Question;
