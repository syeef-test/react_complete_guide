import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const App = () => {
  const initialExpenses = [];

  const [expenses, setExpenses] = useState(initialExpenses);

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expense, { items: expenses })
  // );

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;
