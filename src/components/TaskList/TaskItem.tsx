import type { Task } from "../../types";

interface TaskItemProps {
  task: Task;
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityColors: Record<string, string> = {
  low: "bg-green-100 text-green-700",
  medium: "bg-yellow-100 text-yellow-700",
  high: "bg-red-100 text-red-700",
};

const statusColors: Record<string, string> = {
  todo: "bg-gray-100 text-gray-700",
  "in-progress": "bg-blue-100 text-blue-700",
  completed: "bg-green-100 text-green-700",
};

export default function TaskItem({ task, onToggleStatus, onDelete }: TaskItemProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-start justify-between">
      <div>
        <h3 className="font-semibold text-gray-800">{task.title}</h3>

        {task.description && (
          <p className="text-sm text-gray-500 mt-1">{task.description}</p>
        )}

        <div className="flex gap-2 mt-2 flex-wrap">
          <span className={`text-xs font-medium px-2 py-0.5 rounded ${statusColors[task.status] ?? ""}`}>
            {task.status}
          </span>
          <span className={`text-xs font-medium px-2 py-0.5 rounded ${priorityColors[task.priority] ?? ""}`}>
            {task.priority}
          </span>
          {task.dueDate && (
            <span className="text-xs text-gray-500">
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>

      <div className="flex gap-2 ml-4 shrink-0">
        <button
          onClick={() => onToggleStatus(task.id)}
          className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors cursor-pointer"
        >
          Toggle
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}