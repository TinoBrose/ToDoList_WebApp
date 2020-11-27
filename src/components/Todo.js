import React from 'react';
import { CgTrash, CgRedo } from 'react-icons/cg';
import { MdCheck } from 'react-icons/md';
import { Container, Row, Col } from 'reactstrap';




import './Todo.css'





const Todo = ({ text, todo, setTodos, todos, who }) => {

    //Events

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }; //add deletHandler function with filter method to delete element id if its not the todo id

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };

    return(
        <Container>
        <Row className="todo">
            <Col xs="auto">
            <div>
                <li className={`todo-item ${todo.completed ? "completed" : ''}`}>• {text}</li>
            </div>
            </Col>
            <Col xs="auto">
            <div>
                <li className={`todo-item ${todo.completed ? "completed" : ''}`}> {who}</li>
            </div>
            </Col>
            <Col xs="2">
            <div>
                <button onClick={completeHandler} className="complete-btn">
                    <MdCheck className={`todo-item ${todo.completed ? "display" : ''}`}/>
                    <CgRedo className={`todo-item ${todo.completed ? '' : 'display'}`}/>
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <CgTrash />
                </button>
            </div>
            </Col>
        </Row>
        </Container>
    );
}

export default Todo;