import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDisplay } from '../../features/displaySlice';
import './Settings.css';

const optionsList = ['Time', 'Date', 'Greeting', 'Quotes', 'Weather', 'Audio', 'Todo'];

const Settings: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  function toggleModal(): void {
    setIsOpen(!isOpen);
  }

  function handleChange(container: string): void {
    dispatch(toggleDisplay(`is${container}Displayed`));
  }

  return (
    <>
      <button className='settings-icon' onClick={toggleModal}></button>
      {isOpen && <div className='settings-modal'>
        <h3>General</h3>
        <p>Customize your dashboard</p>
        <h4>Show</h4>
        <ul className='options-list'>
          {optionsList.map(option => {
            return <li className='option' key={option}>
              <span className='option-name'>{option}</span>
              <label className='switch' onChange={() => handleChange(option)}>
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
