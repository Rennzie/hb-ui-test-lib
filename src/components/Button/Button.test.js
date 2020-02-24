import React from 'react';
import { render } from '../../../test/testing-utils';
import { Button } from './Button';

it('should render a button with a title which is clickable', async () => {
  const { getByTestId, getByText } = render(
    <Button onClick={() => console.log('i got clicked')}>title</Button>,
  );
  const button = await getByTestId(/button/i);
  const buttonContent = await getByText(/title/i);
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute('type');
  expect(buttonContent).toBeInTheDocument();
});

it('should not be clickable when its disabled', async () => {
  const { getByTestId, rerender } = render(
    <Button theme="secondary">title</Button>,
  );
  const button = await getByTestId(/button/i);
  expect(button).toBeInTheDocument();
  rerender(<Button theme="secondary" disabled title="title" />);
  expect(button).toBeDisabled();
});

it('should show loading indicator when loading and not be clickable', async () => {
  const { getByTestId } = render(<Button loading>title</Button>);
  const button = await getByTestId(/button/i);
  const loader = await getByTestId(/circular-loader/i);
  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();
  expect(loader).toBeInTheDocument();
});
