import React, { useState, useMemo, useCallback } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskFooter from './components/TaskFooter';
import useTasks from './hooks/useTasks';

const App: React.FC = () => {
  const { tasks, addTask, toggleTask, removeTask, clearCompletedTasks } =
    useTasks();
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter((task) => !task.completed);
      case 'completed':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const memoizedSetFilter = useCallback(
    (filter: 'all' | 'active' | 'completed') => {
      setFilter(filter);
    },
    [],
  );

  const memoizedClearCompletedTasks = useCallback(() => {
    clearCompletedTasks();
  }, [clearCompletedTasks]);

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-200'>
      <div className='w-[90%] rounded-lg bg-white p-4 shadow-lg md:w-1/2 xl:w-1/3 2xl:w-1/4'>
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
        {tasks.length > 0 && (
          <TaskFooter
            tasks={tasks}
            filter={filter}
            setFilter={memoizedSetFilter}
            clearCompletedTasks={memoizedClearCompletedTasks}
          />
        )}
      </div>
    </div>
  );
};

export default App;
