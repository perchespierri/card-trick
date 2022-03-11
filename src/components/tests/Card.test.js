import { render } from '@testing-library/react'
import Card from '../Card';

describe('Card component', () => {

  it.each(['hearts', 'spades', 'diamonds', 'clubs'])
    (`Renders correctly when suit is %s`, (suit) => {    
      const testCard = { value: 'A', suit: suit };
      const { container } = render(<Card card={ testCard } />);
      
      expect(container).toMatchSnapshot();
    });

    it('Renders card of any value correctly', () => {
      const testCard = { value: 'TEST VALUE', suit: 'clubs' };
      const { container } = render(<Card card={ testCard } />);
      
      expect(container).toMatchSnapshot();
    });
})
