import { useState } from 'react';
import { Todo } from '../types/todo';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (editText.trim() && editText !== todo.text) {
      onUpdate(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleUpdate();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      
      {isEditing ? (
        <input
          type="text"
          className="todo-edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span 
          className="todo-text"
          onDoubleClick={() => !todo.completed && setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}

      <div className="todo-actions">
        {!isEditing && !todo.completed && (
          <button
            className="todo-btn todo-edit-btn"
            onClick={() => setIsEditing(true)}
            title="수정"
          >
            ✏️
          </button>
        )}
        <button
          className="todo-btn todo-delete-btn"
          onClick={() => onDelete(todo.id)}
          title="삭제"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

