import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense({ addNewExpense }) {

  const [show, setShow] = useState(false);
  const getNewExpense = (addedExpense) => {
    addNewExpense(addedExpense);
  };

  const clickHandler = () => {
    setShow(true);
  }
  const cancelHandler = () => {
    setShow(false);
  }
  return (
    <div className="new-expense">
      {show && <ExpenseForm getNewExpense={getNewExpense} cancelHandler={cancelHandler} />}
      {!show && <button type="submit" onClick={clickHandler}>Add New Expense</button>}
    </div>
  );
}

export default NewExpense;
