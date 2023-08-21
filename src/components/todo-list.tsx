import React from "react";
import TodoCard from './todo-card';
import { Todo } from '../models/todo-data';


interface todoListProps {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    updateTodo: (id:number,currentStatus:string) => void;
    deleteTodo: (id:number) => void;
    editTodo: (id:number,currentData:string) => void;
    edit:boolean;
    setEdit: (editAction:boolean) => void;
  }

const TodoList: React.FC<todoListProps> = ({todos,setTodos,updateTodo,deleteTodo,editTodo, edit, setEdit}) => {
    

 

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
                updateTodo={(id, currentStatus) => {updateTodo(id,currentStatus)}}
                deleteTodo={(id) => {deleteTodo(id)}}
                editTodo={(id, currentData) => {editTodo(id,currentData)}}
                edit={edit}
                setEdit={setEdit}
              />
            ))}
      </div>
      </>
      
    );
  };
  
  export default TodoList;
  