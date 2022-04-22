import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
function ExpensesList({ filteredArray }) {
  if (filteredArray.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense found !!</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredArray.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
