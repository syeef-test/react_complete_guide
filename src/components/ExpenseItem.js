import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.Date}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h3>{props.LocationOfExpenditure}</h3>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
