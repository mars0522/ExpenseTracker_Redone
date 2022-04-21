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

  return (
    <Card className="expenses">
      <ExpensesFilter getYear={getYear} year={year} />
      {filteredArray.map((expense) => (
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
