import { FC } from 'react';
import { Settings } from '../Settings/Settings';
import { Quotes } from '../Quotes/Quotes';
import { Todo } from '../Todo/Todo';
import './Footer.css';

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-bottom bottom-left'><Settings /></div>
      <div className='footer-bottom bottom-center'><Quotes /></div>
      <div className='footer-bottom bottom-right'><Todo /></div>
    </footer>
  );
}

export { Footer };
