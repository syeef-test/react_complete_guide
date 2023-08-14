import React from "react";

const ExpenseDetails = (props) => {
  const clickHandler = () => {
    console.log("clicked!");
  };

  const deleteExpense = () => {
    console.log("delete expense!");
  };

  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <h3>{props.LocationOfExpenditure}</h3>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteExpense}>Delete Expense</button>
    </div>
  );
};

export default ExpenseDetails;
