import React from "react";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: "Kolkata",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      LocationOfExpenditure: "Burdwan",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: "Bolpur",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: "Hyderabad",
    },
  ];

  const expenseItems = [];

  for (let i = 0; i < 100; i++) {
    expenseItems.push(
      <ExpenseItem
        key={expenses[i % 4].id + i} // Using modulo to cycle through the expenses array
        title={expenses[i % 4].title}
        amount={expenses[i % 4].amount}
        date={expenses[i % 4].date}
        LocationOfExpenditure={expenses[i % 4].LocationOfExpenditure}
      />
    );
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenseItems}
    </div>
  );
}

export default App;
