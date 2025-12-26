export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  priority?: 'low' | 'medium' | 'high';
  category?: string;
  dueDate?: number;
}

export type FilterType = 'all' | 'active' | 'completed';

export type SortType = 'createdAt' | 'priority' | 'dueDate';

