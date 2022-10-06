import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm(){

    const [newTodoValue,setNewTodoValue]= React.useState('');

    const {
        addTodos,
        setOpenModal

    }= React.useContext(TodoContext);

    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    }
    const onCancel = ()=>{
        setOpenModal(false);
    }
    
    const onSubmit = (event)=>{
        event.preventDefault();
        addTodos(newTodoValue);
        setOpenModal(false)
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Write your new quest adventurer! </label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Write your next quest!'
            />
            <div className="TodoForm-buttonContainer">
                <button
                type='button'
                onClick={onCancel}
                className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancel
                </button>
                <button
                type='submit'
                className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
            </div>      
            
        </form>
    );
}

export {TodoForm}