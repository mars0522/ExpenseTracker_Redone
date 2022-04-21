import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../../ExpenseFilter";
function Expenses({ expenses }) {
  const [year, setYear] = useState("");

  const getYear = (selectedYear) => {
    setYear(selectedYear);
    console.log(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter getYear={getYear} year={year} />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expenses.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
