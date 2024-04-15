export enum Role {
  // Define your role enums here
  Employee,
  Mentor,
  Admin
}
export class User {
  userId!: number;
  name!: string;
  role!: Role;
  domain!: string;
  jobTitle!: string;
  location!: string;
  phone!: string;
  isCr!: boolean;
  gender!: string;
  doj!: Date;
  capgeminiEmailId!: string;
  attendanceCount!: number;
  totalAverageRatingStatus!: number;
  grade!: string;
  batches!: any[];
personalEmailId: any;
earlierMentorName: any;
finalMentorName: any;
 // batches:null = null;//Later ocnvert it into a Batch Array

}

