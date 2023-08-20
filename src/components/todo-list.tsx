import React from "react";
import TodoCard from './todo-card';
import { Todo } from '../models/todo-data';


interface props {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    listType:string;
  }

const TodoList: React.FC<props> = ({todos,setTodos,listType}) => {
    
    
    return (
      <>
      <div>
      {todos?.map((todo, index) => (
              <TodoCard
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
      </div>
      </>
      
    );
  };
  
  export default TodoList;
  