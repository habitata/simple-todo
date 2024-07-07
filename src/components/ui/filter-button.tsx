import React from 'react';
import clsx from 'clsx';

interface FilterButtonProps {
  currentFilter: 'all' | 'active' | 'completed';
  filterType: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  currentFilter,
  filterType,
  setFilter,
}) => {
  return (
    <button
      onClick={() => setFilter(filterType)}
      className={clsx(
        currentFilter === filterType
          ? 'text-gray-700 underline'
          : 'text-gray-500',
        'transition hover:text-gray-700',
      )}
      aria-label={`Show ${filterType} tasks`}
    >
      {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
    </button>
  );
};

export default FilterButton;
