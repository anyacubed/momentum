import { FC, useEffect, useState } from 'react';
import { ModeStateI, TodoItemI } from '../../interfaces';
import { TodoHeader } from './TodoHeader/TodoHeader';
import { TodoList } from './TodoList/TodoList';
import { TodoFooter } from './TodoFooter/TodoFooter';
import './Todo.css';

export const modeDrafts: Record<string, ModeStateI> = {
  inbox: {
    title: 'Add a todo to get started',
    description: 'Switch to',
    switchTo: 'Today',
  },
  today: {
    title: 'Add a todo to get started',
    description: 'Switch to',
    switchTo: 'Inbox',
  },
  done: {
    title: 'No completed todos yet',
    description: 'Get started in',
    switchTo: 'Today',
  },
};

export const modes: string[] = Object.keys(modeDrafts);

const Todo: FC = () => {
  const [isTodoModalOpen, setIsTodoModalOpen] = useState<boolean>(false);
  const [currentMode, setCurrentMode] = useState<string>('Today');
  const [isNewTodoClicked, setIsNewTodoClicked] = useState<boolean>(false);
  const [currentModeState, setCurrentModeState] = useState<ModeStateI>({
    title: 'Add a todo to get started',
    description: 'Switch to',
    switchTo: 'Inbox',
  });
  const [todoList, setTodoList] = useState<Record<string, TodoItemI[]>>({
    inbox: [],
    today: [],
    done: []
  });

  function toggleTodoModal(): void {
    setIsTodoModalOpen(!isTodoModalOpen);
  }

  const changeMode = (mode: string): void => {
    const selectedMode: ModeStateI | undefined = modeDrafts[mode.toLowerCase()];

    if (selectedMode) {
      setCurrentMode(mode.charAt(0).toUpperCase() + mode.slice(1));
      setCurrentModeState({
        title: selectedMode.title,
        description: selectedMode.description,
        switchTo: selectedMode.switchTo,
      });
    }
  };

  // useEffect(() => {
  //   const moveCompletedTodos = (): void => {
  //     const todosToMove: TodoItemI[] = [];

  //     for (const list of ['inbox', 'today']) {
  //       const todosInList: TodoItemI[] = todoList[list];
  //       const completedTodos: TodoItemI[] = todosInList.filter((todo: TodoItemI) => todo.isDone && !todoList.done.some((doneTodo: TodoItemI) => doneTodo.id === todo.id));

  //       todosToMove.push(...completedTodos);
  //     }

  //     setTodoList((prevState) => ({
  //       ...prevState,
  //       done: [...prevState.done, ...todosToMove],
  //     }));
  //   };

  //   moveCompletedTodos();
  // }, [todoList.inbox, todoList.today]);

  // useEffect(() => {
  //   const completedTodos: TodoItemI[] = todoList.done.filter((doneTodo: TodoItemI) => doneTodo.isDone === false);

  //   console.log(completedTodos)

  //   // setTodoList((prevState) => ({
  //   //   ...prevState,
  //   //   done: [...prevState.done, ...todosToMove],
  //   // }));
  // }, [todoList.done]);
  console.log(todoList)

  return (
    <>
      <button className='todo-icon' onClick={toggleTodoModal}>Todo</button>
      {isTodoModalOpen && <div className='todo-modal'>
        <TodoHeader currentMode={currentMode} changeMode={changeMode} todoList={todoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} currentMode={currentMode} currentModeState={currentModeState} changeMode={changeMode} verifyNewTodoClick={setIsNewTodoClicked} />
        <TodoFooter isNewTodoClicked={isNewTodoClicked} todoList={todoList} setTodoList={setTodoList} currentMode={currentMode} />
      </div>}
    </>
  );
}

export { Todo };

// обьединить currentMode and currentModeState
// provide id for list items
// triangle for top-left modal

    // inbox: [{ value: 'aws', isDone: false }, { value: 'react', isDone: true }],
    // today: [{ value: 'momentum', isDone: false }, { value: 'breakfast', isDone: true }],
    // done: [{ value: 'react', isDone: true }, { value: 'breakfast', isDone: true }]
