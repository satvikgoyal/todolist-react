import React from "react";
import "./App.css";

const List = (props) => {
  return (
    <li className="list">
      {props.element}
      <span className="hel me-2">
        <i
          onClick={() => {
            props.deletee(props.id);
          }}
          className="t fas fa-trash-alt"
        ></i>
        <i
          onClick={() => {
            props.editTask(props.id);
          }}
        >
          📝
        </i>
        <i
          onClick={() => {
            props.moveUp(props.id);
          }}
        >
          ⬆
        </i>
        <i
          onClick={() => {
            props.moveDown(props.id);
          }}
        >
          ⬇
        </i>
      </span>
    </li>
  );
};

export default List;
