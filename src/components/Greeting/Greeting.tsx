import { FC, useEffect, useState } from 'react';
import { getTimeOfDay } from '../../utils';
import './Greeting.css';

const Greeting: FC = () => {
  const [greetingText, setgreetingText] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

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

  useEffect(() => {
    showGreeting();
  }, []);

  return (
    <div className='greeting'>
      <span>{greetingText}</span>
      <label>
        <input type='text' className='user-name-input' placeholder='[Enter name]' defaultValue={userName} onInput={saveUserName} />
      </label>
    </div>
  );
}

export { Greeting };
