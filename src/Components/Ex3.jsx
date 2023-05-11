import { useState } from "react"

const Todo = () => {
    const [task, setTask] = useState('');
    const handleTask =() => {
        setTask(task)
    }

    return (
        <>
        <input
         type="text" 
         placeholder="enter your task"
         onChange={(e) => setTask(e.target.value)}
         required
         />
         <button type="button" onClick={handleTask}>Add</button>
        {<div>{task}</div>}
        </>

    )
}