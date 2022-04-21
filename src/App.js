import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const [expense_array, updateExpense] = useState([]);
  const addNewExpense = (addedExpense) => {
    console.log(addedExpense);
    updateExpense((prevExpense) => {

      // I want to add latest entered expense at the from of the list 
      // return [addedExpense , ...prevExpense]; // this is not working

      return [...prevExpense, addedExpense]; // this is adding the lastest entered expense at the end of the list which i do not want
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
