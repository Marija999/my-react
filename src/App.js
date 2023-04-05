import Expenses from "./components/Expenses/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import React, { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState("");
  const [expense, setExpense] = useState({
    id: "",
    title: "",
    amount: "",
    date: "",
  });

  const createNewExpenseHandler = (expenseData) => {
    console.log(expenseData);
    setExpense(expenseData);
    setExpenses((prevState) => {
      return {
        ...prevState,
        expense: expenseData,
      };
    });
  };

  return (
    <div>
      <NewExpense onCreateNewExpense={createNewExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { itmes: expenses })
  // );
};

export default App;
