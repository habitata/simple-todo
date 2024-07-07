import React, { useState } from 'react';

interface TaskInputProps {
  addTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && task.trim()) {
      addTask(task.trim());
      setTask('');
    }
  };

  return (
    <input
      className='text-md w-full p-2 outline-none'
      type='text'
      value={task}
      onChange={(e) => setTask(e.target.value)}
      onKeyDown={handleAddTask}
      placeholder='What needs to be done?'
    />
  );
};

export default TaskInput;
