import React from 'react';
import { VscAdd } from 'react-icons/vsc';
import { Row, Col } from 'reactstrap';

import './Form.css'


/*create a variable for the component (Form) and add the props that come from app.js */
const Form = ({setInputText, todos, setTodos, inputText, setStatus, inputWho, setInputWho}) => {

  
    /*create a variable with an event for the input field (inputTextHander) --- needs to be added to the submit Button below */
    const inputTextHandler = (e) => { 
        setInputText(e.target.value); 
    };

    const inputWhoHandler = (e) => { 
        setInputWho(e.target.value); 
    };

    /*create a variable with an event for the submit button (submitTodoHandler) --- needs to be added to the submit Button below */
    const submitTodoHandler = (e) => { 
        e.preventDefault(); // e.preventDefault() to prevent browser to refresh after submitting
        if (inputText.length > 0) { 
            setTodos(
            [...todos, {
                who: inputWho,
                text: inputText, 
                completed: false, 
                id: Math.random() * 1000}, 
        ])} // setTodos creates todos with spread todos (...todos means if there were todos before they will get passed aswell) plus new todos with the todo being added, completed (false by default) and a random ID between 1 - 1000
        else {
            alert("Please add a task!")
        };
        setInputText(""); //to reset the state to "empty string" in the form component
        setInputWho(""); //to reset the state to "empty string" in the form component
    };

    /*creat a variable with an event for the filter selector "all" (statusHandler)*/
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            <Row>
            <Col md>
                <input value={inputText} onChange={inputTextHandler} type="text" placeholder="Task ..."/>
            </Col>
            <Col md>
                <input value={inputWho} onChange={inputWhoHandler} type="who" placeholder="Assign to ..."/>
            </Col>
            <Col md="2">
                <button onClick={submitTodoHandler} type="submit" >
                    Add todo
                </button>
            </Col>
            <Col md="auto">
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All Todos</option>
                        <option value="completed">Done</option>
                        <option value="uncompleted">Not done</option>
                    </select>
                </div>
            </Col>
            </Row>
        </form>
    );
}

export default Form;