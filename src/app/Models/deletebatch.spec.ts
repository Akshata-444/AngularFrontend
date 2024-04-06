import { DeleteBatch } from "./deletebatch";

describe('DeleteBatch', () => {
  it('should create an instance', () => {
    const batchId = 123; // Provide a valid batchId for testing
    expect(new DeleteBatch(batchId)).toBeTruthy();
  });
});
