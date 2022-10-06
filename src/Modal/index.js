import React from "react";
import  ReactDOM  from "react-dom";
import {CreateTodoButton} from '../CreateTodoButton'
import './Modal.css'

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
            <CreateTodoButton/>

        </div>,
        document.getElementById('modal')
    );
}

export { Modal };