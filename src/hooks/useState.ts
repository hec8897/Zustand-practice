import { useTodoStore } from "../stores/todoStore";

export const useState = () => {
  const state = useTodoStore((state) => ({
    total: state.todos.length,
    active: state.todos.filter((t) => !t.completed).length,
    completed: state.todos.filter((t) => t.completed).length,
  }));

  return state;
};
