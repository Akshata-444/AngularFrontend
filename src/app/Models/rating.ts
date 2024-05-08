export interface Rating {
  ratingId: number;
  ratedBy: number;
  ratedTo: number;
  taskSubmissionId: number;
  ratingValue: number;
  comments?: string;
  subtaskId?: number;
}

