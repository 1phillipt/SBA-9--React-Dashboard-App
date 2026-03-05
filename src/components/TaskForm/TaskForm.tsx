import { useState } from "react";
import type { TaskFormData, TaskStatus, TaskPriority, Task } from "../../types";
import { createTask, validateTask } from "../../utils/taskUtils";

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    status: "todo",
    priority: "medium",
    dueDate: "",
  });

  const [errors, setErrors] = useState<string[]>([]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validateTask(formData);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newTask = createTask(formData);

    onAddTask(newTask);

    setFormData({
      title: "",
      description: "",
      status: "todo",
      priority: "medium",
      dueDate: "",
    });

    setErrors([]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Task</h2>

      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}

      <div>
        <label>Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div>
        <label>Priority</label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div>
        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
}