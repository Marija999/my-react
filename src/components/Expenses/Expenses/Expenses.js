import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

const Expenses = (data) => {
  console.log(data);
  const [selectedValue, setSelectedValue] = useState("2023");
  const yearChangeHandler = (changedYear) => {
    setSelectedValue(changedYear);
    console.log(changedYear);
  };
  // const expenseItems = [];
  // const createNewExpense = () => {
  //   for (var i = 0; i < data.items.length; i++) {
  //     expenseItems.push(
  //       <ExpenseItem
  //         title={data.items[i].title}
  //         amount={data.items[i].amount}
  //         date={data.items[i].date}
  //       ></ExpenseItem>
  //     );
  //   }
  //   console.log(expenseItems);
  //   return expenseItems;
  // };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedValue}
          onYearChange={yearChangeHandler}
        />
        {data.items
          .filter(
            (expense) => expense.date.getFullYear().toString() === selectedValue
          )
          .map((filteredExpense) => (
            <ExpenseItem
              key={filteredExpense.id}
              title={filteredExpense.title}
              amount={filteredExpense.amount}
              date={filteredExpense.date}
            ></ExpenseItem>
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
