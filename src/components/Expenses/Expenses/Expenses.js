import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

const Expenses = (items) => {
  console.log(items);
  const yearChangeHandler = (changerYear) => {
    console.log(changerYear);
  };
  return (
    <div>
      <ExpensesFilter onYearChange={yearChangeHandler} />
      <Card
        className="expenses"
        onCreate={() => {
          for (var i = 0; i < items.items.length; i++) {
            <ExpenseItem
              title={items.items[i].title}
              amount={items.items[i].amount}
              date={items.items[i].date}
            ></ExpenseItem>;
          }
        }}
      ></Card>
    </div>
  );
};

export default Expenses;
