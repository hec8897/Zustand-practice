import { FilterType } from '../types/todo';
import './FilterBar.css';

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: '전체' },
  { value: 'active', label: '진행중' },
  { value: 'completed', label: '완료' },
];

export const FilterBar = ({
  currentFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
}: FilterBarProps) => {
  return (
    <div className="filter-bar">
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`filter-btn ${currentFilter === filter.value ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      <input
        type="text"
        className="search-input"
        placeholder="검색..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

