import { FC, useState } from 'react';
import { TodoHeaderProps } from '../../../interfaces';
import { modes } from '../Todo';
import './TodoHeader.css';

const TodoHeader: FC<TodoHeaderProps> = ({ currentMode, changeMode, todoList }) => {
  const [isModeListOpen, setIsModeListOpen] = useState<boolean>(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);

  function toggleModeListModal(): void {
    isSettingsModalOpen && setIsSettingsModalOpen(false);

    setIsModeListOpen(!isModeListOpen);
  }

  function toggleSettingsModal(): void {
    isModeListOpen && setIsModeListOpen(false);

    setIsSettingsModalOpen(!isSettingsModalOpen);
  }

  return (
  <div className='todo-header'>
    <div className='todo-header-left' onClick={toggleModeListModal}>
      <div className='todo-header-select'>
        <span>{currentMode}</span>
        {isModeListOpen && (
          <ul className='mode-list'>
            {modes.map((mode: string) => {
              const todoCount: number = todoList[mode].length;

              return (
                <li className='mode-list-item' key={mode} onClick={() => changeMode(mode)}>
                  {mode}<span> {todoCount}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className='todo-header-icon-wrapper'>
        <div className='todo-header-angle-icon'></div>
      </div>
    </div>
    <div className='todo-header-right'>
      <div  className='todo-header-icon-wrapper' onClick={toggleSettingsModal}>
        <div className='todo-header-more-icon'></div>
      </div>
      {isSettingsModalOpen && <ul className='todo-header-right-more-modal'>
        <li className='more-modal-item'>Settings</li>
      </ul>}
    </div>
  </div>
  );
}

export { TodoHeader };
