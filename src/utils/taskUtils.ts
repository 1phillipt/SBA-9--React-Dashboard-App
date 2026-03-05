import type { Task, TaskFilterOptions, TaskFormData } from "../types";

export function filterTasks(tasks: Task[], filters: TaskFilterOptions) {
  return tasks.filter((tasks) => {
    const statusMatch =
      filters.status === "all" || tasks.status === filters.status;
    const priorityMatch =
      filters.priority === "all" || tasks.priority === filters.priority;
    const searchMatch = tasks.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    return statusMatch && priorityMatch && searchMatch;
  });
}

//cleans form data and adds Id
export function createTask(data: TaskFormData): Task {
  return {
    id: crypto.randomUUID(),
    title: data.title.trim(),
    description: data.description?.trim(),
    status: data.status,
    priority: data.priority,
    dueDate: data.dueDate,
    createdAt: new Date().toISOString(),
  };
}

//this will sort data by priority, due date or when data was created

export function sortTasks(
  tasks: Task[],
  sortBy: "priority" | "dueDate" | "createdAt",
): Task[] {
  const sortedTasks = [...tasks];

  sortedTasks.sort((a, b) => {
    if (sortBy === "priority") {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }

    if (sortBy === "dueDate") {
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;

      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }

    if (sortBy === "createdAt") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }

    return 0;
  });

  return sortedTasks;
}
export function validateTask(data: TaskFormData): string[] {
  const errors: string[] = [];

  if (!data.title || data.title.trim().length < 3) {
    errors.push("Title must be at least 3 characters long.");
  }

  if (data.description && data.description.length > 200) {
    errors.push("Description must be under 200 characters.");
  }

  if (data.dueDate && new Date(data.dueDate) < new Date()) {
    errors.push("Due date cannot be in the past.");
  }

  return errors;
}