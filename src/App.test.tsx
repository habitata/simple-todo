import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('adds and displays a new task', () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/What needs to be done?/i);
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  expect(screen.getByText(/New Task/)).toBeInTheDocument();
});

test('filters tasks correctly', () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/What needs to be done?/i);
  fireEvent.change(input, { target: { value: 'Active Task' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  fireEvent.change(input, { target: { value: 'Completed Task' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  fireEvent.click(screen.getAllByRole('checkbox')[1]);

  fireEvent.click(screen.getByRole('button', { name: /Show active tasks/ }));
  expect(screen.getByText(/Active Task/)).toBeInTheDocument();
  expect(screen.queryByText(/Completed Task/)).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /Show completed tasks/ }));
  expect(screen.queryByText(/Active Task/)).not.toBeInTheDocument();
  expect(screen.getByText(/Completed Task/)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /Show all tasks/ }));
  expect(screen.getByText(/Active Task/)).toBeInTheDocument();
  expect(screen.getByText(/Completed Task/)).toBeInTheDocument();
});

test('clears completed tasks', () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/What needs to be done?/i);
  fireEvent.change(input, { target: { value: 'Task to Complete' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  fireEvent.click(screen.getAllByRole('checkbox')[0]);
  fireEvent.click(
    screen.getByRole('button', { name: /Clear completed tasks/ }),
  );

  expect(screen.queryByText(/Task to Complete/)).not.toBeInTheDocument();
});
