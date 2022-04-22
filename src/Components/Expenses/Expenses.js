import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../../ExpenseFilter";
import ExpensesList from "./ExpensesList";
function Expenses({ expenses }) {
  const [year, setYear] = useState("");

  const getYear = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredArray = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter getYear={getYear} year={year} />
      <ExpensesList expenses={expenses} filteredArray={filteredArray} />
    </Card>
  );
}

export default Expenses;
