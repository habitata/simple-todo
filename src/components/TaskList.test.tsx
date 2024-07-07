import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from './TaskList';
import { Task } from '../types/task';

const tasks: Task[] = [
  { id: '1', name: 'Task 1', completed: false },
  { id: '2', name: 'Task 2', completed: true },
];

test('renders tasks correctly', () => {
  const toggleTask = jest.fn();
  const removeTask = jest.fn();
  render(
    <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />,
  );

  expect(screen.getByText(/Task 1/)).toBeInTheDocument();
  expect(screen.getByText(/Task 2/)).toBeInTheDocument();
});

test('calls toggleTask and removeTask correctly', () => {
  const toggleTask = jest.fn();
  const removeTask = jest.fn();
  render(
    <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />,
  );

  fireEvent.click(screen.getAllByRole('checkbox')[0]);
  expect(toggleTask).toHaveBeenCalledWith('1');

  fireEvent.click(screen.getAllByText(/×/)[0]);
  expect(removeTask).toHaveBeenCalledWith('1');
});
