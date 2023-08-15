import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  const deleteExpense = () => {
    console.log("delete expense!");
  };

  const editExpense = () => {
    setAmount(100);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h3>{props.LocationOfExpenditure}</h3>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteExpense}>Delete Expense</button>
        <button onClick={editExpense}>Edit Expense</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
