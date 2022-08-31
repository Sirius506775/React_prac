import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
    // 부모인 Expense 컴포넌트에 있는 onChangeFilter 함수를 호출해서 데이터 위로 끌어올린다. 
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {/* 상위 컴포넌트로 전송한 selected값을 propse로 다시 수신(양방향 바인딩) */}
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
