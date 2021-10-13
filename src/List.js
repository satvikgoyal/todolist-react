import React from "react";
import "./App.css";

const List = (props) => {
  return (
    <li className="list">
      {props.element}
      <span className="hel me-2">
      <div className='icons'>
        <i
          onClick={() => {
            props.deletee(props.id);
          }}
          className="t fas fa-trash-alt"
        ></i>
      </div>
      <div className='icons'>
        <i
          onClick={() => {
            props.editTask(props.id);
          }}
          className="fas fa-edit"
        > 
        </i>
      </div>
        <div className='icons'>
            <i
            onClick={() => {
                props.moveUp(props.id);
            }}
            className="fas fa-sort-up"
            >
            
            </i>
        </div>
        <div className='icons'>
            <i
            onClick={() => {
                props.moveDown(props.id);
            }}
            className="fas fa-sort-down"
            >
            
            </i>
        </div>
       
      </span>
    </li>
  );
};

export default List;
