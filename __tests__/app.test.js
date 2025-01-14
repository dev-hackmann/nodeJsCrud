import request from 'supertest';
import app from '../app.js';

describe('Basic Math Test', () => {
  it('should sum 1 + 1 correctly', () => {
    const sum = 1 + 1;
    expect(sum).toBe(2);
  });
});