import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expense = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.LocationOfExpenditure}
        />
      ))}
    </Card>
  );
};

export default Expense;
