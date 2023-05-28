import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './TimeDate.css';

const TimeDate: FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  const { isTimeDisplayed, isDateDisplayed } = useSelector((state: RootState) => state.display);

  function setTime(): void {
    const date: Date = new Date();
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

  function timeClassName(): string {
    const classes: string[] = ['time'];

    !isTimeDisplayed && classes.push('hidden');

    return classes.join(' ');
  }

  function dateClassName(): string {
    const classes: string[] = ['date'];

    !isDateDisplayed && classes.push('hidden');

    return classes.join(' ');
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
      <div className={timeClassName()}>{currentTime}</div>
      <div className={dateClassName()}>{currentDate}</div>
    </>
  );
}

export { TimeDate };
