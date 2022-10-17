import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import AddNewExpenseButton from "./AddNewExpenseButton";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }

        props.onDisplayNewExpense(expenseData);
    }

    const [displayForm,setDisplayForm] = useState(false);
    const newExpenseButtonHandler = (clickEvent) => {
        setDisplayForm(clickEvent);
    };

    return (
      <div>
        {!displayForm && (<AddNewExpenseButton
          onClickNewExpenseButton={newExpenseButtonHandler}
        />)}
        {displayForm && (
            <div className="new-expense">
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onClickCancelButton={newExpenseButtonHandler}
            />
            </div>
        )}
      </div>
    );
};

export default NewExpense;