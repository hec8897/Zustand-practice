import { create } from "zustand";
import { Todo, FilterType } from "../types/todo";

interface TodoStore {
  // State
  todos: Todo[];
  filter: FilterType;
  searchQuery: string;

  // Actions
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  setFilter: (filter: FilterType) => void;
  setSearchQuery: (query: string) => void;
  clearCompleted: () => void;
}

// TODO: Store 구현을 여기에 작성하세요
export const useTodoStore = create<TodoStore>((set) => ({
  // State
  todos: [],
  filter: "all",
  searchQuery: "",

  // Actions - 구현 필요
  addTodo: (text: string) => {
    // TODO: 구현
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now().toString(),
          text,
          completed: false,
          createdAt: Date.now(),
        },
      ],
    }));
  },
  toggleTodo: (id: string) => {
    // TODO: 구현
    console.log("toggleTodo:", id);
  },
  deleteTodo: (id: string) => {
    // TODO: 구현
    console.log("deleteTodo:", id);
  },
  updateTodo: (id: string, text: string) => {
    // TODO: 구현
    console.log("updateTodo:", id, text);
  },
  setFilter: (filter: FilterType) => {
    // TODO: 구현
    console.log("setFilter:", filter);
  },
  setSearchQuery: (query: string) => {
    // TODO: 구현
    console.log("setSearchQuery:", query);
  },
  clearCompleted: () => {
    // TODO: 구현
    console.log("clearCompleted");
  },
}));
