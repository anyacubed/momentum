import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getTimeOfDay } from '../../utils';
import './Greeting.css';

const Greeting: FC = () => {
  const [greetingText, setgreetingText] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

  const { isGreetingDisplayed } = useSelector((state: RootState) => state.display);

  function showGreeting(): void {
    const timeOfDay: string = getTimeOfDay();

    // let greetingTranslation = {
    //   en: `Good ${timeOfDay},`,
    //   be: `${timeOfDay === 'night' ? 'Дабранач,'
    //                               : timeOfDay === 'morning' ? 'Добрага ранку,'
    //                               : timeOfDay === 'afternoon' ? 'Добры дзень,'
    //                               : 'Добры вечар,'}`
    // };
    // const greetingText = greetingTranslation[state.language];
    setgreetingText(`Good ${timeOfDay}, `);

    let savedName: string | null = localStorage.getItem('name');

    if (savedName !== null) {
      setUserName(savedName);
    }
  }

  function saveUserName(e: React.ChangeEvent<HTMLInputElement>): void {
    const inputValue: string = (e.target as HTMLInputElement).value;

    localStorage.setItem('name', inputValue);
  }

  function containerClassName(): string {
    const classes: string[] = ['greeting'];

    !isGreetingDisplayed && classes.push('hidden');

    return classes.join(' ');
  }

  useEffect(() => {
    showGreeting();
  }, []);

  return (
    <div className={containerClassName()}>
      <span>{greetingText}</span>
      <label>
        <input type='text' className='user-name-input' placeholder='[Enter name]' defaultValue={userName} onInput={saveUserName} />
      </label>
    </div>
  );
}

export { Greeting };
