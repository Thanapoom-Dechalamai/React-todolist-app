import React, { useState, useEffect } from 'react';
import './App.css';
import TaskInput from './components/task-input.component';
import TaskList from './components/task-list.component';

function App()
{
  // State for managing tasks
  const [tasks, setTasks] = useState([]);

  // State for new task input
  const [newTask, setNewTask] = useState('');

  // State for currently edited task index
  const [editIndex, setEditIndex] = useState(-1);

  // State for edited text of tasks
  const [editedText, setEditedText] = useState('');

  // Function to add a new task to the tasks array
  const addTask = () =>
  {
    if (newTask.trim() !== '')
    {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Function to delete a task from the tasks array
  const deleteTask = (index) =>
  {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Function to toggle the completion status of a task
  const toggleTaskCompletion = (index) =>
  {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to toggle the edit mode for a task
  const toggleEdit = (index) =>
  {
    setEditIndex(index === editIndex ? -1 : index);
  };

  // Function to handle changes in the edited text of a task
  const handleEditChange = (index, newText) =>
  {
    setEditedText((prevState) => ({
      ...prevState,
      [index]: newText
    }));
  };

  // Function to save the edited text of a task
  const handleSaveEdit = (index) =>
  {
    const newText = editedText[index];
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText || task.text } : task
    );
    setTasks(updatedTasks);
    setEditedText((prevState) => ({
      ...prevState,
      [index]: ''
    }));
    toggleEdit(index);
  };

  // Load tasks from local storage on component mount
  useEffect(() =>
  {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (storedTasks.length > 0)
    {
      setTasks(storedTasks);
    }
  }, []);


  // Save tasks to local storage whenever tasks change
  useEffect(() =>
  {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <header>
        <h1>To-Do List App</h1>
      </header>
      <div className="container">
        {/* TaskInput component to input new tasks */}
        <TaskInput newTask={newTask} setNewTask={setNewTask} addTask={addTask} />

        {/* TaskList component to display and manage task list */}
        <TaskList
          tasks={tasks}
          editIndex={editIndex}
          editedText={editedText}
          toggleTaskCompletion={toggleTaskCompletion}
          toggleEdit={toggleEdit}
          handleEditChange={handleEditChange}
          handleSaveEdit={handleSaveEdit}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
