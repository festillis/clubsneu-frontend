import { describe, it, expect } from '@jest/globals';
import { isNortheasternEmail } from '../string';

describe('isNortheasternEmail', () => {
  it('should return false for empty string / whitespace', () => {
    expect(isNortheasternEmail('')).toBeFalsy();
    expect(isNortheasternEmail('  ')).toBeFalsy();
  });

  it('should return false for invalid emails', () => {
    expect(isNortheasternEmail('hello')).toBeFalsy();
    expect(isNortheasternEmail('hello@')).toBeFalsy();
    expect(isNortheasternEmail('hello@world')).toBeFalsy();
    expect(isNortheasternEmail('hello@world.')).toBeFalsy();
    expect(isNortheasternEmail('hello@world.com')).toBeFalsy();
    expect(isNortheasternEmail('test@@northeastern.edu')).toBeFalsy();
    expect(isNortheasternEmail('@northeastern.edu')).toBeFalsy();
  });

  it('should return true for valid emails', () => {
    expect(isNortheasternEmail('test@northeastern.edu')).toBeTruthy();
    expect(isNortheasternEmail('test1@northeastern.edu')).toBeTruthy();
    expect(isNortheasternEmail('test.test@northeastern.edu')).toBeTruthy();
    expect(isNortheasternEmail('test.test1@northeastern.edu')).toBeTruthy();
  });
});
