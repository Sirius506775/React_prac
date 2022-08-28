import React,{ useState } from 'react'
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpensesFilter from './ExpenseFilter';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!!');
    console.log(title)  
  };

  return (
    // React에서 class는 예약어이기 때문에 속성값을 줄 때는 className을 사용
    <Card className="expense-item"> 
      <ExpensesFilter></ExpensesFilter>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
  // JSX의 규칙 : JSX 코드 조각마다 반드시 하나의 Root element를 가져야한다.
  // 반환할 때는 하나의 요소여야하기 때문에 div태그로 묶었다.
}

export default ExpenseItem;
