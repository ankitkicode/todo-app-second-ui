import React, { useState } from 'react';
import { PlusIcon, CheckIcon, TrashIcon } from '@heroicons/react/solid';
import { useTasks } from './TaskContext';

function App() {
  const { tasks, input, setInput, addTask, deleteTask, toggleComplete } = useTasks();
 // Calculate total number of tasks
 const totalTasks = tasks.length;

 // Calculate number of completed tasks
 const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white">
      <div className="top w-[320px] h-[130px] flex items-center justify-between px-[3%]  rounded-lg my-3 border-[1px] border-orange-500">
        <div>
          <h2 className='text-[20px] font-semibold'>TODO DONE</h2>
          <p>Keep it up!</p>
        </div>
        <div className='flex items-center justify-center w-[70px] h-[70px] text-[20px] font-bold rounded-full bg-orange-500'>
        {completedTasks}/{totalTasks}
        </div>
      </div>
      <div className="bg-gray-800 rounded-md p-8">
        <h1 className="text-3xl mb-4">XEROTODO</h1>
        <p className="text-lg mb-4">Todo Done <span className="text-orange-500">keep it up</span></p>
        <div className="flex items-center mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="write your next task"
            className="w-full py-2 px-3 bg-gray-700 rounded-md mr-4"
          />
          <button onClick={addTask} className="bg-red-500 text-white rounded-md p-2">
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
        <div>
          {tasks.map((task, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span className={`text-lg ${task.completed ? 'text-green-500' : 'text-red-500'} ${task.completed ? 'line-through' : ''}`}>{task.text}</span>
              <div>
                <button onClick={() => toggleComplete(index)} className="bg-green-500 text-white rounded-md p-1 mr-2">
                  <CheckIcon className="h-4 w-4" />
                </button>
                <button onClick={() => deleteTask(index)} className="bg-red-500 text-white rounded-md p-1">
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
