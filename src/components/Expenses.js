import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses() {
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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
