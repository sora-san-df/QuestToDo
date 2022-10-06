import React       from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">you have completed {completedTodos} of {totalTodos} questdo's</h2>
  );
}

export { TodoCounter };