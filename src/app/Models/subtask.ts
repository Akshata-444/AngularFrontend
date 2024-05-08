export class Subtask {
  userId!: number;
  subTaskId!: number;
  title!: string;
  description!: string;
  taskId!: string;
  //fileUploadTaskPdf!: string; // Assuming file path or URL
  //creationDate: Date;
  fileName!: string;
  uploaded!: boolean;
  fileToUpload: File | null;

  constructor() {
    this.fileToUpload = null; // Initialize fileToUpload to null
  }
}
