import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import React from "react";
const NewExpense = (data) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    data.onCreateNewExpense(expenseData);
    console.log("newExpense");
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
