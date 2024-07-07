import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types/task';

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleTask,
  removeTask,
}) => {
  return (
    <div className='scrollbar-thin max-h-64 overflow-auto'>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task.name}
          completed={task.completed}
          toggleTask={() => toggleTask(task.id)}
          removeTask={() => removeTask(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
