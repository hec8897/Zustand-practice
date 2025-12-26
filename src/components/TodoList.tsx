import { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';
import './TodoList.css';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
}

export const TodoList = ({ todos, onToggle, onDelete, onUpdate }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="todo-list-empty">
        <p>📝 아직 할 일이 없습니다.</p>
        <p className="todo-list-empty-hint">위에서 새로운 할 일을 추가해보세요!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

