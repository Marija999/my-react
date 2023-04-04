import Expenses from "./components/Expenses/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import React from "react";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: "294.24",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Makeup",
      amount: "500.24",
      date: new Date(2023, 2, 25),
    },
    {
      id: "e3",
      title: "Shopping",
      amount: "100.24",
      date: new Date(2021, 3, 28),
    },
  ];

  return (
    <div>
      <NewExpense></NewExpense>
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
