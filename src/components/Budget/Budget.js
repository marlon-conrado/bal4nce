import React, { Fragment } from "react";
import { reviewBalance } from "../../helpers/review-balance";
import PropTypes from "prop-types";

const Budget = ({ budget, availableBalance }) => {
  const className = reviewBalance(budget, availableBalance);

  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: {budget}</div>
      <div className={className}>Restante: {availableBalance}</div>
    </Fragment>
  );
};

Budget.propTypes = {
  budget: PropTypes.number.isRequired,
  availableBalance: PropTypes.number.isRequired
};

export default Budget;
