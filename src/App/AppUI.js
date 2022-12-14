import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal'
import {MyLoader}from '../LoadingSket'



// Desescructuramos las nuesvas props
function AppUI() {

  const {
    error, 
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    
  } = React.useContext( TodoContext);

  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
            {/* Mostramos un mensaje en caso de que ocurra algún error */}
            {error && <p>Desespérate, hubo un error...</p>}
            {/* Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos */}
          {/*   {loading && <MyLoader/>} */}
            {loading && new Array(10).fill(searchedTodos).map((a, i) => <MyLoader classNmae="skeleton"/>)}
            {/*  Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
      </TodoList>
        {openModal &&(
          <Modal>
            <TodoForm/>
          </Modal>
        )}
  

      <CreateTodoButton
      />
    </React.Fragment>
  );
}

export { AppUI };