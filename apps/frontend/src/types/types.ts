export interface Task {
  id: number;
  title: string;
  description: string;
  dateCreated: Date;
  dueDate?: Date;
  labels: Label[];
  category: TaskCategory;
}

export interface Label {
  id: number;
  name: string;
  color: string;
  tasks: Task[];
}

export enum TaskCategory {
  DRAFT = 'Draft',
  TODO = 'To Do',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
}

export interface UpdateTaskDTO {
  title?: string;
  description?: string;
  dueDate?: string;
  category?: TaskCategory;
}
