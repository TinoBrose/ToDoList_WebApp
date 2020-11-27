import React from 'react';
import './TodoList.css'
import { Row, Col } from 'reactstrap';


//import component
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return(
        <div className="todo-container">
            <ul className="todo-list"> 
                {filteredTodos.map(todo => (
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id}
                        todo={todo} 
                        text={todo.text}
                        who={todo.who} />
                ))} 
            </ul> 
        </div>
        /*use map() method on todos to loop through every single todo being rendered*/
    )
}

export default TodoList;