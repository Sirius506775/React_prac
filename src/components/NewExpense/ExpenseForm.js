import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // 3번의 state 사용
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 1번의 state 사용 -> 이 경우엔 state를 업데이트할 때마다 한 개가 아닌 프로퍼티 모두를 업데이트해야한다.
  // const [userInput, setUserInput ] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  //기본적으로 입력에 대한 이벤트를 수식할 때마다, 숫자로 저장하더라도 값을 읽으면 항상 문자열로 초기화한다.

  const titleChangeHandler = (event) => {
    //입력하는 이벤트의 객체를 얻는다.

    setEnteredTitle(event.target.value); //함수를 호출해서 현재 입력된 값을 전달

    /** 이전 state에 의존하는 state의 업데이트 방법 */
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })

    //최신 상태의 스냅샷에서 작업하도록 하는 더 안전한 방법이다. 이전 상태에 따라 state를 업데이트할 때마다 이 구문을 사용해야한다.
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle : event.target.value}
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //form이 submit 될 때마다 실행되는 funciton
  const submitHandler = (event) => {
    event.preventDefault(); //현재 로드된 페이지에 머물게 만든다.
    //서버에게 요청을 보내지 않기 때문에 js로 컨트롤 할 수 있다.

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }; //입력된 모든 데이터를 결합한다.

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
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
