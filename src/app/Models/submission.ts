export interface Submission {
  taskSubmissionsId: number;

  userId: number;
  subtaskId: number;
  submittedFileName?: string;
  fileUploadSubmission?: string;
  subTaskSubmittedOn?: Date;
  ratingValue: number;
  
}
