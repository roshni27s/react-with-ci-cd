import { render, screen } from '@testing-library/react';
import localStorageMock from './localStorageMock';
import App from './App';

beforeEach(() => {
  global.localStorage = localStorageMock;
});

test('renders learn react link', () => {
  render(<App />);
  const checkBudget = screen.getByText(/Budgets/);
  expect(checkBudget.textContent).toEqual('Budgets');
});
