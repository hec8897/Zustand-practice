import { useState, FormEvent } from 'react';
import './TodoForm.css';

interface TodoFormProps {
  onSubmit: (text: string) => void;
}

export const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text.trim());
      setText('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="새로운 할 일을 입력하세요..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="todo-submit-btn">
        추가
      </button>
    </form>
  );
};

