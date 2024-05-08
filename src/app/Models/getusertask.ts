import { Subtask } from "./subtask";

export interface Getusertask {
  taskId: number;
  taskName: string;
  description: string;
  priority: string;
  deadLine: Date;
  subtasks?: Subtask[];
}
