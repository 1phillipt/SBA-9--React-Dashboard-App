export type TaskStatus = "todo" | "in-progress" | "completed";

export type TaskPriority = "low" | "medium" | "high";

export interface Task {
    id: string,
    title: string,
    description?:string,
    status:TaskStatus;
    priority: TaskPriority,
    dueDate?: string,
    createdAt: string;

}

export interface TaskFormData{
    title: string,
    description?: string,
    status: TaskStatus;
    priority: TaskPriority;
    dueDate?: string;
}

export interface TaskFilterOptions{
    status: TaskStatus | "all";
    priority: TaskPriority | "all";
    search: string;
}