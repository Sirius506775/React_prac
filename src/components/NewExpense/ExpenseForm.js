import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');


    const titleChangeHandler = (event) => { //입력하는 이벤트의 객체를 얻는다.
        setEnteredTitle(event.target.value); //함수를 호출해서 현재 입력된 값을 전달
    };
    
    const amountChangeHandler = (event) => {
        console.log(event.target.value)
    }

    const dateChangeHandler = (event) => {
        console.log(event.target.value)
    }


  return (
    <form className="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
