import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../../ExpenseFilter";
function Expenses({ expenses }) {
  const [year, setYear] = useState("");

  const getYear = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredArray = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

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

  return (
    <Card className="expenses">
      <ExpensesFilter getYear={getYear} year={year} />
      {expense_data}
    </Card>
  );
}

export default Expenses;
