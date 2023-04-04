import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enetredTitle, setEnteredTitle] = useState("");
  const [enetredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInputs, setUserInputs] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInputs((prevState) => {
    //   return { ...prevtate, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInputs((prevState) => {
    //   return { ...prevState, enetredAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInputs((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amonut</label>
          <input type="number" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
