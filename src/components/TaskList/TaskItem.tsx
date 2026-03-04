import { Task } from "../../types";

interface TaskItemProps {
  task: Task;
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggleStatus, onDelete }: TaskItemProps) {
  return (
    <div>
      <h3>{task.title}</h3>

      {task.description && <p>{task.description}</p>}

      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>

      {task.dueDate && (
        <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      )}

      <button onClick={() => onToggleStatus(task.id)}>
        Toggle Status
      </button>

      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}