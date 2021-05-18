import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GOT fact header', () => {
  render(<App />);
  const GOTHeader = screen.getByText(/Game of Thrones Quotes/i);
  expect(GOTHeader).toBeInTheDocument();
});
