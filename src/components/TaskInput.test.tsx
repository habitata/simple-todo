import { render, screen, fireEvent } from '@testing-library/react';
import TaskInput from './TaskInput';

test('calls addTask when Enter key is pressed', () => {
  const addTask = jest.fn();
  render(<TaskInput addTask={addTask} />);

  const input = screen.getByPlaceholderText(/What needs to be done?/i);
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  expect(addTask).toHaveBeenCalledWith('New Task');
  expect(input).toHaveValue('');
});
