import React, { FormEvent, useState } from 'react';
import TodoCard from './components/todo-card';
import OpenInputFeild from './components/task-input-feild';
import './App.css';
import { Todo } from './models/todo-data';

const App = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [setTextData] = useState<string>("");

  const addTodo = (e:FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id: Date.now(), data:todo, status:'open'}]);
      setTodo("");
    }
  }

  console.log(todos);

  return (
    <div className="App">
      <div className='header'>
        <h2>TO-DO List App</h2>
      </div>
      <div className='container'>
        <div className='list-col'>
        <span className="openTitle title-open">Open</span>
        <div className='openListOuter list-area-outer'>
          <div className='openList list-area'>
            <OpenInputFeild todo={todo} setTodo={setTodo} addTodo={addTodo}/>
            <div className='card-area open-card'>
            
            {todos.map((t) => (
              <TodoCard setTextData={t.data} />
            ))}  
            </div>
          </div>
        </div>
        </div>
        
        <div className='list-col'>
        <span className="processTitle title-open">In-Process</span>
        <div className='processListOuter list-area-outer'>
          <div className='processList list-area'>
            {/* <OpenInputFeild /> */}
            <div className='card-area process-card'>
            {/* <TodoCard />               */}
            </div>
          </div>
        </div>
        </div>
        <div className='list-col'>
        <span className="completeTitle title-open">Completed</span>
        <div className='completeListOuter list-area-outer'>
          <div className='completeList list-area'>
            {/* <OpenInputFeild /> */}
            <div className='card-area complete-card'>
              {/* <TodoCard /> */}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
