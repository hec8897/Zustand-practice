import { useTodoStore } from './stores/todoStore';
import { TodoForm } from './components/TodoForm';
import { FilterBar } from './components/FilterBar';
import { TodoList } from './components/TodoList';
import { Stats } from './components/Stats';
import './App.css';

function App() {
  const {
    todos,
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

  // 필터링된 todos 계산
  const filteredTodos = todos.filter((todo) => {
    // 검색 필터
    if (searchQuery && !todo.text.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // 상태 필터
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // 통계 계산
  const stats = {
    total: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  };

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
