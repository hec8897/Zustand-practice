import './Stats.css';

interface StatsProps {
  total: number;
  active: number;
  completed: number;
  onClearCompleted: () => void;
}

export const Stats = ({ total, active, completed, onClearCompleted }: StatsProps) => {
  return (
    <div className="stats">
      <div className="stats-info">
        <div className="stat-item">
          <span className="stat-label">전체</span>
          <span className="stat-value">{total}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">진행중</span>
          <span className="stat-value active">{active}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">완료</span>
          <span className="stat-value completed">{completed}</span>
        </div>
      </div>
      
      {completed > 0 && (
        <button className="clear-completed-btn" onClick={onClearCompleted}>
          완료된 항목 삭제
        </button>
      )}
    </div>
  );
};

