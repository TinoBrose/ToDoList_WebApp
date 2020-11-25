import React from 'react';

/*create a variable for the component (Form) and add the props that come from app.js */
const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {

    /*create a variable with an event for the input field (inputTextHander) --- needs to be added to the submit Button below */
    const inputTextHandler = (e) => { 
        setInputText(e.target.value); 
    };

    /*create a variable with an event for the submit button (submitTodoHandler) --- needs to be added to the submit Button below */
    const submitTodoHandler = (e) => { 
        e.preventDefault(); // e.preventDefault() to prevent browser to refresh after submitting
        setTodos(
            [...todos, {
                text: inputText, 
                completed: false, 
                id: Math.random() * 1000}, 
        ]); // setTodos creates todos with spread todos (...todos means if there were todos before they will get passed aswell) plus new todos with the todo being added, completed (false by default) and a random ID between 1 - 1000
        setInputText(""); //to reset the state to "empty string" in the form component
    };

    /*creat a variable with an event for the filter selector "all" (statusHandler)*/
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;