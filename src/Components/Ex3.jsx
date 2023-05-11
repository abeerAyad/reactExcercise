import { useState } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [descriptionTask, setDescriptionTask] = useState('');
    const handleTask = () => {
        if(descriptionTask) {
            const tasks = {
                id: todos.length + 1,
                description: descriptionTask,
            };
            setTodos((prevTask) => [...prevTask, tasks]);
            setDescriptionTask('');
        }
        
    };

    const deleteTask = (id) => {
        const filteredTasks = todos.filter((task) => task.id !== id  )
        setTodos(filteredTasks)
    }

    return (
        <>
            <input
                type="text"
                placeholder="enter your task"
                value={descriptionTask}
                onChange={(e) => setDescriptionTask(e.target.value)}
                required
            />
            <button type="button" onClick={handleTask}>
                Add
            </button>
            {
                <div>
                    {todos.map((task) => {
                        return (
                            <div key={task.id}>
                                <h3>{task.description}</h3>
                                <button onClick={() => deleteTask(task.id)}>Delete</button>
                            </div>
                        );
                    })}
                </div>
            }
        </>
    );
};

export default Todo;
