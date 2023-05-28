import { FC } from 'react';
import { TodoItemProps } from '../../../../interfaces';
import './TodoItem.css';

const TodoItem: FC<TodoItemProps> = ({ todo, updateTodoList }) => {
  function className (isDone: boolean): string {
    const classes: string[] = ['todo-list-item-value'];

    isDone && classes.push('checked');

    return classes.join(' ');
  }

  return (
    <li className='todo-list-item'>
      <label className='todo-list-item-label'>
        <input
          type='checkbox'
          className='todo-list-item-input'
          onChange={() => updateTodoList(todo.id)}
          checked={todo.isDone}
        />
      </label>
      <span className={className(todo.isDone)}>{todo.value}</span>
    </li>
  );
}

export { TodoItem };
