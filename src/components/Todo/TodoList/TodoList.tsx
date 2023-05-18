import { FC, useState } from 'react';
import { TodoItemI, TodoListProps } from '../../../interfaces';
import { TodoItem } from './TodoItem/TodoItem';
import './TodoList.css';

const TodoList: FC<TodoListProps> = ({ todoList, setTodoList, currentMode, currentModeState, changeMode, verifyNewTodoClick }) => {
  const currentTodos: TodoItemI[] = todoList[currentMode.toLowerCase()];
  const currentTodosNum: number = currentTodos.length;
  const [isNewTodoClicked, setIsNewTodoClicked] = useState<boolean>(false);

  function toggleMode(): void {
    changeMode(currentModeState.switchTo.toLowerCase());
  }

  function clickNewTodo(): void {
    setIsNewTodoClicked(true);
    verifyNewTodoClick(true);
  }

  function updateTodoList(todoId: string): void {
    const mode: string = currentMode.toLowerCase();

    // if (mode === 'inbox' || mode === 'today') {
    //   console.log(todoList)
    // }

    // if (mode === 'done') console.log(todoId)

    setTodoList((prevTodoList: Record<string, TodoItemI[]>) => ({
      ...prevTodoList,
      [mode]: prevTodoList[mode].map((item: TodoItemI) => {
        if (item.id === todoId) {
          return { ...item, isDone: !item.isDone };
        }

        return item;
      })
    }));
  }

  return (
    <>
      {currentTodosNum === 0 &&
      <div className='todo-list-wrapper'>
        <p className='todo-list-wrapper-title'>{currentModeState.title}</p>
        <div className='todo-list-wrapper-description' onClick={toggleMode}>
          {currentModeState.description} {currentModeState.switchTo}
          <div className='description-angle-icon'></div>
        </div>
        {!isNewTodoClicked && (
          <button className='new-todo-button' onClick={clickNewTodo}>
            New Todo
          </button>
        )}
      </div>}
      {currentTodosNum > 0 &&
      <ul className='todo-list'>
        {currentTodos.map((todo: TodoItemI) => (
          <TodoItem key={todo.value} todo={todo} updateTodoList={updateTodoList} />
        ))}
      </ul>}
    </>
  );
}

export { TodoList };
