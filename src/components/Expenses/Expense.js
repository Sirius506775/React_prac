import { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expense = (props) => {

  const [filterdYear, setFilterdYear] = useState('2020'); 
  //상태를 다루기 위해 useState 훅을 사용하며, 기본값은 2020으로 설정

  const filterChangeHandler = selectedYear => {
    //ExpenxseFilter에서 송신받은 데이터를 selectedYear로 받는다.

    setFilterdYear(selectedYear); 
    //상태를 변경하는 함수에 송신받은 데이터인 selectedYear
    
    // console.log(selectedYear)
  };


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterdYear} onChangeFilter={filterChangeHandler} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expense;
