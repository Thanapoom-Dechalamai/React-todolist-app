function TaskItem({ task, index, editIndex, editedText, toggleTaskCompletion, toggleEdit, handleEditChange, handleSaveEdit, deleteTask })
{
    return (
        <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
            {editIndex === index ? (
                <input
                    type="text"
                    className="edit-input"
                    value={editedText[index] || task.text}
                    onChange={(e) => handleEditChange(index, e.target.value)}
                />
            ) : (
                <span className="task-text">{task.text}</span>
            )}
            <div className="button-container">
                <button
                    className={`complete-button ${task.completed ? 'completed' : ''}`}
                    onClick={() => toggleTaskCompletion(index)}
                >
                    {task.completed ? 'Completed' : 'Complete'}
                </button>
                {editIndex === index ? (
                    <button className="save-button" onClick={() => handleSaveEdit(index)}>
                        Save
                    </button>
                ) : (
                    <button className="edit-button" onClick={() => toggleEdit(index)}>
                        Edit
                    </button>
                )}
                <button className="delete-button" onClick={() => deleteTask(index)}>
                    Delete
                </button>
            </div>
        </li>
    );
}

export default TaskItem;