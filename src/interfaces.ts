import { Dispatch, SetStateAction } from 'react';

export interface BasicPlayerProps {
  isPlaying: boolean;
  togglePlaying: () => void;
  trackIndex: number;
  setTrackIndex: Dispatch<SetStateAction<number>>;
}

// export interface PlayListI {
//   title: string;
//   src: string;
//   duration: string;
// }

export interface AdvancedPlayerProps {
  isPlaying: boolean;
  togglePlaying: () => void;
}

export interface WeatherI {
  icon: string;
  temperature: string;
  description: string;
  wind: string;
  humidity: string;
  error: string;
}

export interface MainProps {
  imageIndex: number;
  setBackgroundImage: (index: number) => Promise<void>;
}

export interface QuotesI {
  text: string;
  author: string;
}

export interface ModeStateI {
  title: string;
  description: string;
  switchTo: string;
}

export interface TodoHeaderProps {
  currentMode: string;
  changeMode: (mode: string) => void;
  todoList: Record<string, TodoItemI[]>;
}

export interface TodoItemI {
  id: string;
  value: string;
  isDone: boolean;
}

export interface TodoListProps {
  todoList: Record<string, TodoItemI[]>;
  setTodoList: Dispatch<SetStateAction<Record<string, TodoItemI[]>>>;
  currentMode: string;
  currentModeState: ModeStateI;
  changeMode: (mode: string) => void;
  verifyNewTodoClick: Dispatch<SetStateAction<boolean>>;
}

export interface TodoItemProps {
  todo: TodoItemI;
  updateTodoList: (todoId: string) => void;
}

export interface TodoFooterProps {
  isNewTodoClicked: boolean;
  todoList: Record<string, TodoItemI[]>;
  setTodoList: Dispatch<SetStateAction<Record<string, TodoItemI[]>>>;
  currentMode: string;
}

export interface DisplayState {
  [key: string]: boolean;
}
