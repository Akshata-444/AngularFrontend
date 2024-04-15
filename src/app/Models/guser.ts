export interface Guser {
    name: string;
    role: Role;
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
  }

  export enum Role {
    Employee = 0,
    Mentor = 1,
    Admin = 2
  }


