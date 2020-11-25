import React, { useState, useEffect } from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {

  //state variables
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useEffect run once the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //use effectfunctions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  //Save todos to local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  //Get todos from local storage
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To do List</h1>
      </header>
      <main>
        <Form 
        inputText={inputText}
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        />
        <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}
        />
      </main>
    </div>
  );
}

export default App;
