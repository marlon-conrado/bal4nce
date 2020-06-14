export const reviewBalance = (balance, availableBalance) => {
  const percentages = {
    "25%": 25,
    "50%": 50
  };
  const expensePercentage = (availableBalance * 100) / balance;
  let className = "";

  if (expensePercentage < percentages["25%"]) {
    className = "alert alert-danger";
  } else if (expensePercentage < percentages["50%"]) {
    className = "alert alert-warning";
  } else {
    className = "alert alert-success";
  }

  return className;
};
