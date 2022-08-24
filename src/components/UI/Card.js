import React from 'react'
import "./Card.css";

const Card = (props) => {

  const classes = 'card ' + props.className; //컴포넌트 바깥에서 className으로 받는 속성값들이 문자열로 추가

  return <div className={classes}>{props.children}</div>;
 
}

export default Card;
