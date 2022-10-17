import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expense = (props) => {
  const [filterdYear, setFilterdYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => { return expense.date.getFullYear().toString() === filterdYear });
  let expenseContent = <p>No expenses found.</p>;
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expense;
