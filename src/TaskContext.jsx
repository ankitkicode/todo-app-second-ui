import React, { createContext, useState, useContext } from 'react';

// Create a context for tasks
const TaskContext = createContext();

// Custom hook to use the task context
export const useTasks = () => useContext(TaskContext);

// Task provider component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, input, setInput, addTask, deleteTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
};
