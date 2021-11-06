import react, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, enteredTitleHandler] = useState("");
  const [enteredAmount, enteredAmountHandler] = useState("");
  const [enteredDate, enteredDateHandler] = useState("");

  const titleChangeHandler = (event) => {
    enteredTitleHandler(event.target.value);
  };

  const amountChangeHandler = (event) => {
    enteredAmountHandler(event.target.value);
  };

  const dateChangeHandler = (event) => {
    enteredDateHandler(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.saveExpenseData(expenseData);
    enteredTitleHandler("");
    enteredAmountHandler("");
    enteredDateHandler("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div>
        <button type="submit" className="new-expense__actions">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
