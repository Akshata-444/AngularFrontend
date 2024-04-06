// addbatch.spec.ts

import { TestBed } from '@angular/core/testing';
import { Addbatch } from './addbatch';

describe('Addbatch', () => {
  it('should create an instance with user-provided values', () => {
    const userInput = {
      mentorId: 1,
      batchName: 'Test Batch',
      domain: 'Test Domain',
      description: 'Test Description',
      employeeInfoExcelFile: null // You can provide a mock File object if needed
    };

    const addbatch: Addbatch = createAddbatchFromUserInput(userInput);
    expect(addbatch).toBeTruthy();
    expect(addbatch.mentorId).toEqual(userInput.mentorId);
    expect(addbatch.batchName).toEqual(userInput.batchName);
    expect(addbatch.domain).toEqual(userInput.domain);
    expect(addbatch.description).toEqual(userInput.description);
    // Add additional expectations as needed
  });
});

function createAddbatchFromUserInput(userInput: any): Addbatch {
  return {
    mentorId: userInput.mentorId,
    batchName: userInput.batchName,
    domain: userInput.domain,
    description: userInput.description,
    employeeInfoExcelFile: userInput.employeeInfoExcelFile
  };
}
