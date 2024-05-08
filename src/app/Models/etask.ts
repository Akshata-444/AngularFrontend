import { Subtask } from "./subtask";

export interface Etask {
  taskName: string;
  description: string;
  priority: string; // You might need to adjust this based on the priority enum in your backend
  deadLine: Date;
  subtasks?: Subtask[];
}

  export enum Priority {
    High = 'high',
    Medium = 'medium',
    Low = 'low'
}
