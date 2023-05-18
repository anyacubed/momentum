import { FC, useState } from 'react';
import './Settings.css';

const optionsList = ['Time', 'Date', 'Greeting', 'Quotes', 'Weather', 'Audio', 'Todo'];

const Settings: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleModal(): void {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className='settings-icon' onClick={toggleModal}></button>
      {isOpen && <div className='settings-modal'>
        <h3>General</h3>
        <p>Customize your dashboard</p>
        <h4>Show</h4>
        <ul className='options-list'>
          {optionsList.map((option, i) => {
            return <li className='option' key={i}>
              <span className='option-name'>{option}</span>
              <label className='switch'>
                <input type='checkbox' />
                <span className='toggle-slider circle'></span>
              </label>
            </li>
        })}
        </ul>
      </div>}
    </>
  );
}

export { Settings };
