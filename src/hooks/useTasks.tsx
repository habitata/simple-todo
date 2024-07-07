import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Task } from '../types/task';

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (name: string) => {
    setTasks([...tasks, { id: uuidv4(), name, completed: false }]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return {
    tasks,
    addTask,
    toggleTask,
    removeTask,
    clearCompletedTasks,
  };
};

export default useTasks;
