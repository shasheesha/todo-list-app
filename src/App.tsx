import React, { FormEvent, useState } from 'react';
import OpenInputFeild from './components/task-input-feild';
import './App.css';
import { Todo } from './models/todo-data';
import TodoList from './components/todo-list';

const App = () => {

  const [openTodo, setOpenTodo] = useState<string>("");
  const [processTodo, setProcessTodo] = useState<string>("");
  const [completeTodo, setCompleteTodo] = useState<string>("");
  const [openTodos, setOpenTodos] = useState<Todo[]>([]);
  const [processTodos, setProcessTodos] = useState<Todo[]>([]);
  const [completeTodos, setCompleteTodos] = useState<Todo[]>([]);

  const addOpenTodo = (e:FormEvent) => {
    e.preventDefault();

    if(openTodo){
      setOpenTodos([...openTodos,{id: Date.now(), data:openTodo, status:'open'}]);
      setOpenTodo("");
    }
  }

  const addProcessTodo = (e:FormEvent) => {
    e.preventDefault();

    if(processTodo){
      setOpenTodos([...openTodos,{id: Date.now(), data:processTodo, status:'process'}]);
      setProcessTodo("");
    }
  }

  const addCompleteTodo = (e:FormEvent) => {
    e.preventDefault();

    if(completeTodo){
      setOpenTodos([...openTodos,{id: Date.now(), data:completeTodo, status:'complete'}]);
      setCompleteTodo("");
    }
  }

  console.log(openTodos);

  return (
    <div className="App">
      <div className='header'>
        <h2>My To-Do List</h2>
      </div>
      <div className='container'>
        <div className='list-col'>
        <span className="openTitle title-open">Open</span>
        <div className='openListOuter list-area-outer'>
          <div className='openList list-area'>
            <OpenInputFeild todo={openTodo} setTodo={setOpenTodo} addTodo={addOpenTodo}/>
            <div className='card-area open-card'>
              <TodoList todos={openTodos} setTodos={setOpenTodos}  listType="open"/>
           
            </div>
          </div>
        </div>
        </div>
        
        <div className='list-col'>
        <span className="processTitle title-open">In-Process</span>
        <div className='processListOuter list-area-outer'>
          <div className='processList list-area'>
          <OpenInputFeild todo={processTodo} setTodo={setProcessTodo} addTodo={addProcessTodo}/>
            <div className='card-area process-card'>
              {
                
              }
            <TodoList todos={processTodos} setTodos={setProcessTodos} listType="process"/>
            </div>
          </div>
        </div>
        </div>
        <div className='list-col'>
        <span className="completeTitle title-open">Completed</span>
        <div className='completeListOuter list-area-outer'>
          <div className='completeList list-area'>
          <OpenInputFeild todo={completeTodo} setTodo={setCompleteTodo} addTodo={addCompleteTodo}/>
            <div className='card-area complete-card'>
            <TodoList todos={completeTodos} setTodos={setCompleteTodos}  listType="complete"/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
