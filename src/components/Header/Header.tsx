import { FC } from 'react';
import { AudioPlayer } from '../AudioPlayer/AudioPlayer';
import { WeatherWidget } from '../WeatherWidget/WeatherWidget';
import './Header.css';

const Header: FC = () => {
  return (
    <header className='header'>
      <div><AudioPlayer /></div>
      <div><WeatherWidget /></div>
    </header>
  );
}

export { Header };
