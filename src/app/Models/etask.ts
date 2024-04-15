export interface Etask {
  taskName: string;
  description: string;
  priority: string; // You might need to adjust this based on the priority enum in your backend
  deadLine: Date;}

  export enum Priority {
    High = 'high',
    Medium = 'medium',
    Low = 'low'
}
