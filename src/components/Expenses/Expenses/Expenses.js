import "./Expenses.css";
import Card from "../../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";

const Expenses = (data) => {

  console.log(data);
  const [selectedValue, setSelectedValue] = useState("2023");
  

  const filteredValue = data.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedValue
  });

  const yearChangeHandler = (changedYear) => {
    setSelectedValue(changedYear);
  }; 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedValue}
          onYearChange={yearChangeHandler}
        />
        <ExpensesList filteredList = {filteredValue}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
