import { render,screen } from '@testing-library/react'
import Hello from './hello';

it('hello word',()=>{
  render(<Hello />);
  const myElement = screen.getByText('hello');
  expect(myElement).toBeInTheDocument();
})