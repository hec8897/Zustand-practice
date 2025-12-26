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
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
  deleteTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  updateTodo: (id: string, text: string) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      ),
    }));
  },
  setFilter: (filter: FilterType) => {
    set({ filter });
  },
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },
  clearCompleted: () => {
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    }));
  },
}));
