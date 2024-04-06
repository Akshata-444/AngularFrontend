/*export class Addbatch {
  mentorId!: number;
  batchName!: string;
  domain!: string;
  description!: string;
  employeeInfoExcelFile!: File;
}*/
export interface Addbatch {
  mentorId: number;
  batchName: string;
  domain: string;
  description: string;
  employeeInfoExcelFile: File | null; // Make it nullable
}



