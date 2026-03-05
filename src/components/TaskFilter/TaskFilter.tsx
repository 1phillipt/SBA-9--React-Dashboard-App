import type { TaskFilterOptions } from "../../types";

interface TaskFilterProps {
  filters: TaskFilterOptions;
  onFilterChange: (filters: TaskFilterOptions) => void;
}

export default function TaskFilter({ filters, onFilterChange }: TaskFilterProps) {

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    onFilterChange({
      ...filters,
      [name]: value
    });
  }

  return (
    <div>
      <h3>Filter Tasks</h3>

      <div>
        <label>Search</label>
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleChange}
          placeholder="Search tasks..."
        />
      </div>

      <div>
        <label>Status</label>
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
        >
          <option value="all">All</option>
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div>
        <label>Priority</label>
        <select
          name="priority"
          value={filters.priority}
          onChange={handleChange}
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
}