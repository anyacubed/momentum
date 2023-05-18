import { FC } from 'react';
import { TodoFooterProps, TodoItemI } from '../../../interfaces';
import './TodoFooter.css';

let itemId = 0;

const TodoFooter: FC<TodoFooterProps> = ({ isNewTodoClicked, todoList, setTodoList, currentMode }) => {
  function addNewTodo(e: React.KeyboardEvent<HTMLInputElement>): void {
    const inputValue: string = (e.target as HTMLInputElement).value;

    if (e.code === 'Enter' && inputValue !== '') {
      const mode: string = currentMode.toLowerCase();
      const isDoneMode: boolean = mode === 'done';
      const newItem: TodoItemI = {
        // id: `todo-${itemId++}`,
        id: `${mode}-${itemId++}`,
        value: inputValue,
        isDone: isDoneMode ? true : false
      };

      setTodoList(prevState => ({
        ...prevState,
        [mode]: [...prevState[mode], newItem]
      }));

      (e.target as HTMLInputElement).value = '';
    }
  }

  return (
    <div className='todo-footer'>
      {isNewTodoClicked && (
        <input
          className='todo-footer-input'
          type='text'
          placeholder='New Todo'
          autoFocus
          onKeyDown={addNewTodo}
        />
      )}
    </div>
  );
}

export { TodoFooter };
