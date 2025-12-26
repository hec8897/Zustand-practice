import { useTodoStore } from "../stores/todoStore";

export const useFilterTodos = () => {
  const { todos, searchQuery, filter } = useTodoStore();

  return todos.filter((todo) => {
    if (
      searchQuery &&
      !todo.text.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
};
