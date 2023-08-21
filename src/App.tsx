import React, { FormEvent, useState } from "react";
import OpenInputFeild from "./components/task-input-feild";
import "./App.css";
import { Todo } from "./models/todo-data";
import TodoList from "./components/todo-list";
import todoFilter from "./filters/todo-filter";

const App = () => {
  const [openTodo, setOpenTodo] = useState<string>("");
  const [processTodo, setProcessTodo] = useState<string>("");
  const [completeTodo, setCompleteTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [edit, setEdit] = useState<Boolean>(false);

  const addOpenTodo = (e: FormEvent) => {
    e.preventDefault();

    if (openTodo) {
      setTodos([...todos, { id: Date.now(), data: openTodo, status: "open" }]);
      setOpenTodo("");
    }
  };

  const addProcessTodo = (e: FormEvent) => {
    e.preventDefault();

    if (processTodo) {
      setTodos([
        ...todos,
        { id: Date.now(), data: processTodo, status: "process" },
      ]);
      setProcessTodo("");
    }
  };

  const addCompleteTodo = (e: FormEvent) => {
    e.preventDefault();

    if (completeTodo) {
      setTodos([
        ...todos,
        { id: Date.now(), data: completeTodo, status: "complete" },
      ]);
      setCompleteTodo("");
    }
  };

  const todoLevelUp = (id: number, currentStatus: string) => {
    if (currentStatus === "open") {
      const selectedTodo = todos.map((obj) => {
        if (obj.id === id) {
          // obj.status = 'process';
          return { ...obj, status: "process" };
        }
        return obj;
      });

      setTodos(selectedTodo);
      console.log(id, currentStatus);
      console.log(todos);
    } else if (currentStatus === "process") {
      const selectedTodo = todos.map((obj) => {
        if (obj.id === id) {
          // obj.status = 'process';
          return { ...obj, status: "complete" };
        }
        return obj;
      });

      setTodos(selectedTodo);
      console.log(id, currentStatus);
      console.log(todos);
    }
  };

  const todoDeleteUp = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todoEditUp = (id: number, currentData: string) => {};

  return (
    <div className="App">
      <div className="header">
        <h2>My To-Do List</h2>
      </div>
      <div className="container">
        <div className="list-col">
          <span className="openTitle title-open">Open</span>
          <div className="openListOuter list-area-outer">
            <div className="openList list-area">
              <OpenInputFeild
                todo={openTodo}
                setTodo={setOpenTodo}
                addTodo={addOpenTodo}
              />
              <div className="card-area open-card">
                <TodoList
                  todos={todoFilter(todos, "open")}
                  setTodos={setTodos}
                  updateTodo={(id, currentStatus) =>
                    todoLevelUp(id, currentStatus)
                  }
                  deleteTodo={(id) => todoDeleteUp(id)}
                  editTodo={(id, currentData) => todoEditUp(id, currentData)}
                  edit={edit.valueOf()}
                  setEdit={setEdit}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="list-col">
          <span className="processTitle title-open">In-Process</span>
          <div className="processListOuter list-area-outer">
            <div className="processList list-area">
              <OpenInputFeild
                todo={processTodo}
                setTodo={setProcessTodo}
                addTodo={addProcessTodo}
              />
              <div className="card-area process-card">
                <TodoList
                  todos={todoFilter(todos, "process")}
                  setTodos={setTodos}
                  updateTodo={(id, currentStatus) =>
                    todoLevelUp(id, currentStatus)
                  }
                  deleteTodo={(id) => todoDeleteUp(id)}
                  editTodo={(id, currentData) => todoEditUp(id, currentData)}
                  edit={edit.valueOf()}
                  setEdit={setEdit}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="list-col">
          <span className="completeTitle title-open">Completed</span>
          <div className="completeListOuter list-area-outer">
            <div className="completeList list-area">
              <OpenInputFeild
                todo={completeTodo}
                setTodo={setCompleteTodo}
                addTodo={addCompleteTodo}
              />
              <div className="card-area complete-card">
                <TodoList
                  todos={todoFilter(todos, "complete")}
                  setTodos={setTodos}
                  updateTodo={(id, currentStatus) =>
                    todoLevelUp(id, currentStatus)
                  }
                  deleteTodo={(id) => todoDeleteUp(id)}
                  editTodo={(id, currentData) => todoEditUp(id, currentData)}
                  edit={edit.valueOf()}
                  setEdit={setEdit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
