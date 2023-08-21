import EditIcon from "@mui/icons-material/Edit";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { Todo } from "../models/todo-data";

const todoCard: React.FC<{
  index: number;
  todo: Todo;
  todos: Array<Todo>;
  updateTodo: (id: number, currentStatus: string) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, currentData: string) => void;
  edit: boolean;
  setEdit: (editAction: boolean) => void;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}> = ({ index, todo, updateTodo, deleteTodo, edit, setEdit }) => {
  return (
    <>
      {}
      <form className="card ">
        {edit ? (
          <>
            <input className="text-input" type="text" />
          </>
        ) : (
          <>
            <p>{todo.data}</p>
            <p>{todo.id}</p>
            <p>{todo.status}</p>
            <p>{index}</p>
          </>
        )}
        {/* <p>{todo.data}</p>
                <p>{todo.id}</p>
                <p>{todo.status}</p>
                <p>{index}</p> */}

        <div className="btn-tools">
          <IconButton
            onClick={() => {
              if (!edit) {
                setEdit(!edit);
              }
            }}
          >
            <EditIcon />
          </IconButton>

          {todo.status === "complete" ? (
            <></>
          ) : (
            <>
              <IconButton onClick={() => updateTodo(todo.id, todo.status)}>
                <KeyboardDoubleArrowRightIcon />
              </IconButton>
            </>
          )}
          <IconButton onClick={() => deleteTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </form>
    </>
  );
};
export default todoCard;
