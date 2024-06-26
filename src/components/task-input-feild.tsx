import React from "react";
import '../styles/input-feild.css';

interface Properties{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo: (e: React.FormEvent) => void;
}

const taskInputFeild: React.FC<Properties> = ({todo, setTodo, addTodo}) =>{
    return(
        <form className="input-feild open-task-input-feild" action="" onSubmit={addTodo}>
            <input type="text" value={todo} 
            onChange={(e)=>setTodo(e.target.value)} className="text-input"  placeholder="Type here..." />
            <input className="text-input-btn" type="submit" value="+" />
        </form>
    )
}
export default taskInputFeild;