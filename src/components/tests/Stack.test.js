import { render } from '@testing-library/react'
import Stack from '../Stack';

describe('Stack component', () => {
  
  it('Renders a list item on screen', () => {
    const stackToTest = [{value: 'A', suit: 'spades'}];
    const { container } = render(<Stack stack={ stackToTest } />);

    expect(container).toContainHTML('li');
  });

  it('List item has correct className', () => {
    const stackToTest = [{value: 'A', suit: 'spades'}];
    const { container } = render(<Stack stack={ stackToTest } />);

    expect(container).toBeInTheDocument();
  });
})
