import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
function ExpensesList({ expenses, filteredArray }) {
  let expense_data = <p>No Expense Found !!</p>;

  if (filteredArray.length > 0) {
    expense_data = filteredArray.map((expense) => (
      <ExpenseItem
        key={expenses.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ));
  }
  return <div>{expense_data}</div>;
}

export default ExpensesList;
