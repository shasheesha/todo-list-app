import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardProps, IconButton } from '@mui/material';
import { Todo } from '../models/todo-data';



const todoCard: React.FC<{
  index: number;
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}>= ({index, todo, todos, setTodos }) =>{

  
  

    return(
        <div className='card '>
                <p>{todo.data}</p>
                <p>{todo.id}</p>
                <p>{todo.status}</p>
                <p>{index}</p>
                <div className='btn-tools'>
                  <IconButton>
                    <EditIcon />  
                  </IconButton>
                  <IconButton>
                    <DoneIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
    )
}
export default todoCard;