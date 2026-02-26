    import type { Task, TaskFilterOptions } from "../types";

    export function filterTasks(tasks: Task[], filters:TaskFilterOptions){
        return tasks.filter((tasks) => {
            const statusMatch = filters.status === "all" || tasks.status === filters.status;
            const priorityMatch = filters.priority === "all" || tasks.priority === filters.priority;
            const searchMatch = tasks.title.toLowerCase().includes(filters.search.toLowerCase());
            return statusMatch && priorityMatch && searchMatch;
    })
}

// export function sortTasks(tasks: Task[], sortBy: "date" | "priority") {

//     const sorted = [...tasks];

// }