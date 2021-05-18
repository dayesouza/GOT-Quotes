import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dog fact header', () => {
  render(<App />);
  const docFactHeader = screen.getByText(/Dog facts/i);
  expect(docFactHeader).toBeInTheDocument();
});
