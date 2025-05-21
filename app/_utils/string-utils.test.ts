import { describe, it, expect } from 'vitest';
import { formatCategoryName } from './string-utils';

describe('formatCategoryName', () => {
  it('should format a single word enum key', () => {
    expect(formatCategoryName('TEXT')).toBe('Text');
  });

  it('should format multiple words connected by underscores', () => {
    expect(formatCategoryName('VIRTUAL_DESKTOP')).toBe('Virtual Desktop');
  });

  it('should handle enum keys that are already lowercase (though not typical for enum keys)', () => {
    expect(formatCategoryName('file_explorer')).toBe('File Explorer');
  });
  
  it('should handle enum keys with mixed casing (though not typical)', () => {
    expect(formatCategoryName('ScreenShot_GamING')).toBe('Screenshot Gaming');
  });

  it('should return an empty string for an empty input', () => {
    expect(formatCategoryName('')).toBe('');
  });

  it('should handle a single letter', () => {
    expect(formatCategoryName('A')).toBe('A');
  });
  
  it('should handle single letters separated by underscores', () => {
    expect(formatCategoryName('A_B_C')).toBe('A B C');
  });
});
