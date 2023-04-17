import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const checkBudget = screen.getByText(/Budgets/);
  expect(checkBudget.textContent).toEqual('Budgets');
});
