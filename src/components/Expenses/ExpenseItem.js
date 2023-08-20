import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h3>{props.LocationOfExpenditure}</h3>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
