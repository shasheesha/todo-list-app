import React from "react";
import '../styles/input-feild.css';

const taskInputFeild = () =>{
    return(
        <form className="input-feild open-task-input-feild" action="">
            <input className="text-input" type="text" placeholder="Type here..." />
            <input className="text-input-btn" type="submit" value="+" />
        </form>
    )
}
export default taskInputFeild;