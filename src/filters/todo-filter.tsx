import React from "react";
import { Todo } from "../models/todo-data";



const todoFilter =(todoList:Array<Todo>,statusType:string) =>{
    const filteredTodoList = todoList.filter((todo) => todo.status === statusType);

    return filteredTodoList;
}

export default todoFilter;