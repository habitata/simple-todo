import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';

test('calls toggleTask when checkbox is clicked', () => {
  const toggleTask = jest.fn();
  const removeTask = jest.fn();
  render(
    <TaskItem
      task='Test Task'
      completed={false}
      toggleTask={toggleTask}
      removeTask={removeTask}
    />,
  );

  fireEvent.click(screen.getByRole('checkbox'));
  expect(toggleTask).toHaveBeenCalled();
});

test('calls removeTask when delete button is clicked', () => {
  const toggleTask = jest.fn();
  const removeTask = jest.fn();
  render(
    <TaskItem
      task='Test Task'
      completed={false}
      toggleTask={toggleTask}
      removeTask={removeTask}
    />,
  );

  fireEvent.click(screen.getByText(/×/));
  expect(removeTask).toHaveBeenCalled();
});
