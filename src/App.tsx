import { useTodoStore } from "./stores/todoStore";
import { TodoForm } from "./components/TodoForm";
import { FilterBar } from "./components/FilterBar";
import { TodoList } from "./components/TodoList";
import { Stats } from "./components/Stats";
import { useFilterTodos, useState } from "./hooks";
import "./App.css";

function App() {
  const {
    filter,
    searchQuery,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    setFilter,
    setSearchQuery,
    clearCompleted,
  } = useTodoStore();

  const filteredTodos = useFilterTodos();
  const stats = useState();

  return (
    <div className="app">
      <header className="app-header">
        <h1>🐻 Zustand TODO List</h1>
        <p>Zustand를 활용한 상태 관리 학습 프로젝트</p>
      </header>

      <main className="app-main">
        <div className="todo-container">
          <TodoForm onSubmit={addTodo} />

          <FilterBar
            currentFilter={filter}
            onFilterChange={setFilter}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />

          <Stats
            total={stats.total}
            active={stats.active}
            completed={stats.completed}
            onClearCompleted={clearCompleted}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
