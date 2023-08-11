function TaskInput({ newTask, setNewTask, addTask })
{
    return (
        <div className="task-input">
            <input
                type="text"
                placeholder="Enter a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="add-button" onClick={addTask}>
                Add
            </button>
        </div>
    );
}


export default TaskInput;