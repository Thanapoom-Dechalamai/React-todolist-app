import TaskItem from './task-item.component'

function TaskList({ tasks, editIndex, editedText, toggleTaskCompletion, toggleEdit, handleEditChange, handleSaveEdit, deleteTask })
{
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    task={task}
                    index={index}
                    editIndex={editIndex}
                    editedText={editedText}
                    toggleTaskCompletion={toggleTaskCompletion}
                    toggleEdit={toggleEdit}
                    handleEditChange={handleEditChange}
                    handleSaveEdit={handleSaveEdit}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
}


export default TaskList;