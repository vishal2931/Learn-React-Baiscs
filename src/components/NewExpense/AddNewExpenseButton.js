import React from "react";
import './AddNewExpenseButton.css';

const AddNewExpenseButton = (props) => {
    const NewExpenseButtonHandler = () =>{
        props.onClickNewExpenseButton(true);
    }

  return (
    <div className="new-expense">
        <div className="new-expense__actions">
            <button type="button" onClick={NewExpenseButtonHandler}>Add Expense</button>
        </div>
    </div>
  );
};

export default AddNewExpenseButton;