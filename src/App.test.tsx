import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterConfig } from './route/RouterConfig';

test('renders learn react link', () => {
  render(<RouterConfig/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
