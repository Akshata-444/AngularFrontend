import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetBatch } from '../Models/get-batch';
import { GetBatchEmployeeModel } from '../Models/getbatchemployee';
import { map } from 'rxjs/operators';
//import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class GetBatchService {

  private apiUrl = 'http://localhost:5176/api/Batch';

  constructor(private http: HttpClient) { }
  getBatchDetails(): Observable<GetBatch[]> {
    return this.http.get<GetBatch[]>(this.apiUrl);
}

getExcelDataForBatch(batchId: number): Observable<GetBatchEmployeeModel[]> {
  return this.http.get<string>(`${this.apiUrl}/${batchId}/excel-data`, { responseType: 'text' as 'json' }).pipe(
    map(response => {
      const rows = response.split('\n'); // Split the response into rows
      const data: GetBatchEmployeeModel[] = [];
      for (let i = 1; i < rows.length; i++) { // Start from index 1 to skip the header row
        const columns = rows[i].split('\t'); // Split the row into columns
        const employee: GetBatchEmployeeModel = {
          supersetId: parseInt(columns[0], 10),
          empId: parseInt(columns[1], 10),
          pernerId: parseInt(columns[2], 10),
          status: columns[3],
          name: columns[4],
          gender: columns[5],
          doj: new Date(columns[6]),
          level: columns[7],
          grade: columns[8],
          type: columns[9],
          trainingLocation: columns[10],
          assignedLocation: columns[11],
          category: columns[12],
          technology: columns[13],
          practice: columns[14],
          trainingStartDate: new Date(columns[15]),
          trainingEndDate: new Date(columns[16]),
          labDetails: columns[17],
          batchCode: columns[18],
          bu: columns[19],
          personalEmailId: columns[20] || null,
          phoneNo: columns[21],
          capgeminiEmailId: columns[22],
          collegeDegree: columns[23],
          collegeStream: columns[24],
          collegeName: columns[25],
          collegeType: columns[26],
          collegeLocation: columns[27],
          cognitiveScoreRating: parseInt(columns[28], 10) ,
          technicalScoreRating: parseInt(columns[29], 10),
          svarCommunicationScore: parseInt(columns[30], 10),
          cewsSkillImparted: columns[31],
          hostNames: columns[32],
          earlierMentorName: columns[33] || null,
          finalMentorName: columns[34] || null
        };
        data.push(employee);
      }
      return data;
    })
  );
}
}

