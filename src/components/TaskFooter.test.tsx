import { render, screen, fireEvent } from '@testing-library/react';
import TaskFooter from './TaskFooter';

const tasks = [{ completed: false }, { completed: true }];

test('renders correct number of items left', () => {
  render(
    <TaskFooter
      tasks={tasks}
      filter='all'
      setFilter={() => {}}
      clearCompletedTasks={() => {}}
    />,
  );
  expect(screen.getByText(/1 items left/)).toBeInTheDocument();
});

test('calls setFilter when filter buttons are clicked', () => {
  const setFilter = jest.fn();
  render(
    <TaskFooter
      tasks={tasks}
      filter='all'
      setFilter={setFilter}
      clearCompletedTasks={() => {}}
    />,
  );

  fireEvent.click(screen.getByText(/Active/));
  expect(setFilter).toHaveBeenCalledWith('active');

  fireEvent.click(screen.getByText(/Completed/));
  expect(setFilter).toHaveBeenCalledWith('completed');
});

test('calls clearCompletedTasks when Clear completed button is clicked', () => {
  const clearCompletedTasks = jest.fn();
  render(
    <TaskFooter
      tasks={tasks}
      filter='all'
      setFilter={() => {}}
      clearCompletedTasks={clearCompletedTasks}
    />,
  );

  fireEvent.click(screen.getByText(/Clear completed/));
  expect(clearCompletedTasks).toHaveBeenCalled();
});
