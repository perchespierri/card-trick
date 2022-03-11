import { render } from '@testing-library/react'
import Card from '../Card';


describe('Card component', () => {
  
  it('Renders card of spades correctly', () => {
    const testCard = { value: 'A', suit: 'spades' };
    const { container } = render(<Card card={ testCard } />);
    expect(container).toMatchSnapshot();
  });

  it('Renders card of hearts correctly', () => {
    const testCard = { value: 'A', suit: 'hearts' };
    const { container } = render(<Card card={ testCard } />);
    expect(container).toMatchSnapshot();
  });

  it('Renders card of diamonds correctly', () => {
    const testCard = { value: 'A', suit: 'diamonds' };
    const { container } = render(<Card card={ testCard } />);
    expect(container).toMatchSnapshot();
  });

  it('Renders card clubs correctly', () => {
    const testCard = { value: 'A', suit: 'clubs' };
    const { container } = render(<Card card={ testCard } />);
    expect(container).toMatchSnapshot();
  });

  it('Renders card of any value correctly', () => {
    const testCard = { value: 'TEST VALUE', suit: 'clubs' };
    const { container } = render(<Card card={ testCard } />);
    expect(container).toMatchSnapshot();
  });
})
