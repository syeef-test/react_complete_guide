import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "./Card";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
        LocationOfExpenditure={props.LocationOfExpenditure}
      />
    </Card>
  );
}

export default ExpenseItem;
