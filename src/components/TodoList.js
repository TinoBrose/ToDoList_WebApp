import React from 'react';
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
                        text={todo.text} />
                ))} 
            </ul> 
        </div>
        /*use map() method on todos to loop through every single todo being rendered*/
    )
}

export default TodoList;