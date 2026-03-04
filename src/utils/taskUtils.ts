    import type { Task, TaskFilterOptions, TaskFormData } from "../types";

    export function filterTasks(tasks: Task[], filters:TaskFilterOptions){
        return tasks.filter((tasks) => {
            const statusMatch = filters.status === "all" || tasks.status === filters.status;
            const priorityMatch = filters.priority === "all" || tasks.priority === filters.priority;
            const searchMatch = tasks.title.toLowerCase().includes(filters.search.toLowerCase());
            return statusMatch && priorityMatch && searchMatch;
    })
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
// export function sortTasks(tasks: Task[], sortBy: "date" | "priority") {

//     const sorted = [...tasks];

// }