import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import React,{useState} from "react";
const NewExpense = (data) => {
  const [formState, setFormState] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    data.onCreateNewExpense(expenseData);
    setFormState(false);
    console.log("newExpense");
    console.log(expenseData);
  };
  const showAddExpenseForm = () =>{
    setFormState(true);
  }
  const closeAddExpenseForm = () =>{
    setFormState(false);
  }
  let displayButtonOrForm = (
    <button onClick={showAddExpenseForm}>Add Expense</button>
  );
  if(formState === true){
    displayButtonOrForm = (
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
      onCancel={closeAddExpenseForm} />
    )
  }

  return (
    <div className="new-expense">
      {displayButtonOrForm}
    </div>
  );
};

export default NewExpense;
