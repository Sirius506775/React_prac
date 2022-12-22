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
  };

  const filteredExpenses = props.items.filter(expense => {

    return expense.date.getFullYear().toString() === filterdYear;

  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterdYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map(expense => 
        <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}/>)
        }
      </Card>
    </div>
  );
};

export default Expense;
