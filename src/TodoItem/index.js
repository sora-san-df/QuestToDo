import React from 'react';
import './TodoItem.css';
import {TbSword} from 'react-icons/tb'
import {TbSwords} from 'react-icons/tb'

function TodoItem(props) {
 

  
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <TbSword/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <TbSwords/>
      </span>
    </li>
  );
}

export { TodoItem };
