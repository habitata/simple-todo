import React from 'react';

interface TaskItemProps {
  task: string;
  completed: boolean;
  toggleTask: () => void;
  removeTask: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  completed,
  toggleTask,
  removeTask,
}) => {
  return (
    <div className='flex items-center justify-between border-b p-2'>
      <div className='flex items-center'>
        <input
          type='checkbox'
          checked={completed}
          onChange={toggleTask}
          className='mr-2'
        />
        <span className={`${completed ? 'text-gray-500 line-through' : ''}`}>
          {task}
        </span>
      </div>
      <button onClick={removeTask} className='text-red-500'>
        ×
      </button>
    </div>
  );
};

export default TaskItem;
