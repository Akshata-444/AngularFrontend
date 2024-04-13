// get-batch-employee.model.ts

export interface GetBatchEmployeeModel {

  supersetId: number;
  empId: number;
  pernerId: number;
  status: string;
  name: string;
  gender: string;
  doj: Date;
  level: string;
  grade: string;
  type: string;
  trainingLocation: string;
  assignedLocation: string;
  category: string;
  technology: string;
  practice: string;
  trainingStartDate: Date;
  trainingEndDate: Date;
  labDetails: string;
  batchCode: string;
  bu: string;
  personalEmailId: string | null;
  phoneNo: string;
  capgeminiEmailId: string;
  collegeDegree: string;
  collegeStream: string;
  collegeName: string;
  collegeType: string;
  collegeLocation: string;
  cognitiveScoreRating: number;
  technicalScoreRating: number;
  svarCommunicationScore: number;
  cewsSkillImparted: string;
  hostNames: string;
  earlierMentorName: string | null;
  finalMentorName: string | null;

  //batches:null = null;
}
