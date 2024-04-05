export class GetBatch {
  batchId!:number;
  mentorId!:number;// FK to UserID
  batchName!:string;//System generated using the Date_of_creation+MentorName+Domain
  domain!:string; //e.g., Web development, Data
  description!:string;

}
