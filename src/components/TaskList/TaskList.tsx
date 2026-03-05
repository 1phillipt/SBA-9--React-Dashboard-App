import type { Task } from "../../types";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({ tasks, onToggleStatus, onDelete }: TaskListProps) {

  if (tasks.length === 0) {
    return <p className="text-gray-500 text-center mt-8">No tasks found.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Task List</h2>

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleStatus={onToggleStatus}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}