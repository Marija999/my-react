import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card";

const Expenses = (data) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={data.items[0].title}
        amount={data.items[0].amount}
        date={data.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={data.items[1].title}
        amount={data.items[1].amount}
        date={data.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={data.items[2].title}
        amount={data.items[2].amount}
        date={data.items[2].date}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
