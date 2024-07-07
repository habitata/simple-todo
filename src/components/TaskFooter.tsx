import React from 'react';
import FilterButton from './ui/filter-button';

interface TaskFooterProps {
  tasks: { completed: boolean }[];
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  clearCompletedTasks: () => void;
}

const TaskFooter: React.FC<TaskFooterProps> = ({
  tasks,
  filter,
  setFilter,
  clearCompletedTasks,
}) => {
  return (
    <div className='mt-2 flex items-center justify-between border-gray-200 p-2'>
      <span>{tasks.filter((task) => !task.completed).length} items left</span>
      <div className='flex gap-2'>
        <FilterButton
          currentFilter={filter}
          filterType='all'
          setFilter={setFilter}
        />
        <FilterButton
          currentFilter={filter}
          filterType='active'
          setFilter={setFilter}
        />
        <FilterButton
          currentFilter={filter}
          filterType='completed'
          setFilter={setFilter}
        />
      </div>
      <button
        onClick={clearCompletedTasks}
        className='text-red-500 transition hover:text-red-700'
        aria-label='Clear completed tasks'
      >
        Clear completed
      </button>
    </div>
  );
};

const MemoizedTaskFooter = React.memo(TaskFooter);
MemoizedTaskFooter.displayName = 'TaskFooter';

export default MemoizedTaskFooter;
