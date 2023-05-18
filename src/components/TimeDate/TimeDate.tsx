import { FC, useEffect, useState } from 'react';
import './TimeDate.css';

const TimeDate: FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  function setTime(): void {
    const date = new Date();
    const current: string = date.toLocaleTimeString([], {
      hourCycle: 'h23',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    setCurrentTime(current);
  }

  function setDate(): void {
    const date: Date = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' , month: 'long', day: 'numeric', timeZone: 'UTC' };
    const current: string = date.toLocaleDateString('en-US', options);

    setCurrentDate(current);
  }

  useEffect(() => {
    setTime();
    setDate();

    const timer: NodeJS.Timer = setInterval(() => {
      setTime();
      setDate();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className='time'>{currentTime}</div>
      <div className='date'>{currentDate}</div>
    </>
  );
}

export { TimeDate };
