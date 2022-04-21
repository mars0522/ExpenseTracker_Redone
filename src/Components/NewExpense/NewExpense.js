import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense({ addNewExpense }) {
  const getNewExpense = (addedExpense) => {
    addNewExpense(addedExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm getNewExpense={getNewExpense} />
    </div>
  );
}

export default NewExpense;
