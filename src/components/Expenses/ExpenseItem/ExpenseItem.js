import "./ExpenseItem.css";
import Card from "../../UI/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import React, { useState } from "react";

const ExpenseItem = (data) => {
  const [title, setTitle] = useState(data.title);
  console.log("Render of ExpenseItem component");

  const clickHandler = () => {
    setTitle("Makeup");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={data.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${data.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
