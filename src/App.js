import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const [expense_array, updateExpense] = useState([]);
  const addNewExpense = (addedExpense) => {

    console.log(addedExpense);
    updateExpense((prevExpense) => {
      addedExpense.id = uuidv4();

      return [addedExpense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense addNewExpense={addNewExpense} />
      <Expenses expenses={expense_array} />
    </div>
  );
}

export default App;
