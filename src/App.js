import React, { useState, useEffect } from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';
import Header from './components/Header';
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from 'reactstrap';


function App() {

  //state variables
  const [inputText, setInputText] = useState("");
  const [inputWho, setInputWho] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useEffect run once the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  //useEffect filterHandler done
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
      <Header />
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <main>
          <Switch>
            <Route path="/todo-list">
              <Container>
                  <Form 
                  inputText={inputText}
                  todos={todos} 
                  setTodos={setTodos} 
                  setInputText={setInputText}
                  setInputWho={setInputWho}
                  inputWho={inputWho}
                  setStatus={setStatus}
                  />
                  <hr className="hr" />
                  <TodoList 
                  setTodos={setTodos} 
                  todos={todos}
                  filteredTodos={filteredTodos}
                  />
              </Container>
            </Route>
            <Redirect from="/" to="/todo-list" />
          </Switch>
        </main>
      

    </div>
  );
}

export default App;
