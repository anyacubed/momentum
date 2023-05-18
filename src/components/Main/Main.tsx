import { FC } from 'react';
import { MainProps } from '../../interfaces';
import { TimeDate } from '../TimeDate/TimeDate';
import { Greeting } from '../Greeting/Greeting';
import './Main.css';

const Main: FC<MainProps> = ({ imageIndex, setBackgroundImage }) => {
  function nextSlide(): void {
    let index: number = imageIndex;

    if (imageIndex < 19) {
      index = imageIndex + 1;
    } else if (imageIndex === 19) {
      index = 0;
    }

    setBackgroundImage(index);
  }

  function prevSlide(): void {
    let index: number = imageIndex;

    if (imageIndex > 0) {
      index = imageIndex - 1;
    } else if (imageIndex === 0) {
      index = 19;
    }

    setBackgroundImage(index);
  }

  return (
    <main className='main'>
      <div className='main-left'><button className='arrow arrow-prev' onClick={prevSlide}></button></div>
      <div className='main-center'>
        <TimeDate />
        <Greeting />
      </div>
      <div className='main-right'><button className='arrow arrow-next' onClick={nextSlide}></button></div>
    </main>
  );
}

export { Main };
