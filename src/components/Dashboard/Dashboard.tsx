import { useState } from "react";
import { Task, TaskFilterOptions } from "../../types";
import { filterTasks, sortTasks } from "../../utils/taskUtils";

import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [filters, setFilters] = useState<TaskFilterOptions>({
    status: "all",
    priority: "all",
    search: "",
  });

  const [sortBy, setSortBy] = useState<"priority" | "dueDate" | "createdAt">(
    "createdAt"
  );

  function addTask(task: Task) {
    setTasks((prev) => [...prev, task]);
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function toggleStatus(id: string) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;

        if (task.status === "todo") return { ...task, status: "in-progress" };
        if (task.status === "in-progress") return { ...task, status: "completed" };

        return { ...task, status: "todo" };
      })
    );
  }

  const filteredTasks = filterTasks(tasks, filters);
  const sortedTasks = sortTasks(filteredTasks, sortBy);

  return (
    <div>
      <h1>Task Dashboard</h1>

      <TaskForm onAddTask={addTask} />

      <TaskList
        tasks={sortedTasks}
        onToggleStatus={toggleStatus}
        onDelete={deleteTask}
      />
    </div>
  );
}