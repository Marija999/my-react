import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import React from "react";
const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
