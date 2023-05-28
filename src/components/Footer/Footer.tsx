import { FC } from 'react';
import { Settings } from '../Settings/Settings';
import { Quotes } from '../Quotes/Quotes';
import { Todo } from '../Todo/Todo';
import './Footer.css';

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div><Settings /></div>
      <div><Quotes /></div>
      <div><Todo /></div>
    </footer>
  );
}

export { Footer };
