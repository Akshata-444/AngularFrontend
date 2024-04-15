export interface Getaduser {
  userId: number;
  name: string;
  userName: string;
  password: string;
  role: string; // You might want to change this to an enum if necessary
  domain: string;
  jobTitle: string;
  location: string;
  phone: string;
  isCr: boolean;
  gender: string;
  doj: Date;
  capgeminiEmailId: string;
  grade?: string;
  totalAverageRatingStatus: number;
  personalEmailId?: string;
  earlierMentorName?: string;
  finalMentorName?: string;
  attendanceCount: number;
  batches?: any[]; // You can define a proper interface for batches if needed
  dailyUpdates?: any[];
}
