import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NextResponse } from 'next/server';
import { handleApiError } from './api-helpers';

// Mock NextResponse from next/server
// We will access the mocked 'json' static method via the imported NextResponse object.
vi.mock('next/server', () => {
  const jsonMock = vi.fn((body, init) => ({ // This is the mock for NextResponse.json
    status: init?.status,
    body,
    headers: new Headers(),
    ok: (init?.status ?? 200) < 300,
    redirected: false,
    type: 'default',
    url: '',
    clone: vi.fn(),
    json: async () => body,
    text: async () => JSON.stringify(body),
    blob: async () => new Blob([JSON.stringify(body)]),
    formData: async () => new FormData(),
    arrayBuffer: async () => new ArrayBuffer(0),
  }));
  return {
    NextResponse: {
      json: jsonMock,
    },
  };
});

// This spy will be on the original console.error.
const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

describe('handleApiError', () => {
  beforeEach(() => {
    // Reset mocks before each test
    // Clear the specific mock for NextResponse.json by accessing it through the imported module
    // (NextResponse as any) is used to bypass TypeScript's type checking for the mock
    ((NextResponse as any).json as ReturnType<typeof vi.fn>).mockClear();
    consoleErrorSpy.mockClear();
  });

  afterEach(() => {
    // Restore console.error after all tests in this describe block if needed elsewhere
    // For now, clearing mocks is enough. If we want to fully restore:
    // consoleErrorSpy.mockRestore();
  });

  it('should handle an Error instance correctly', () => {
    const error = new Error('Test error message');
    error.name = "TestError"; // Custom error name

    const response = handleApiError(error);

    // Verify console.error was called
    expect(consoleErrorSpy).toHaveBeenCalledOnce();
    expect(consoleErrorSpy).toHaveBeenCalledWith('API Error:', error);

    // Verify NextResponse.json was called with the correct structure
    expect(NextResponse.json).toHaveBeenCalledOnce();
    expect(NextResponse.json).toHaveBeenCalledWith(
      { 
        success: false, 
        error: 'Test error message',
        code: 'TestError'
      },
      { status: 500 }
    );
    
    // Optionally check the mock response object itself
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
        success: false,
        error: 'Test error message',
        code: 'TestError'
    });
  });

  it('should handle a non-Error object (string) correctly', () => {
    const error = 'Just a string error';

    const response = handleApiError(error);

    // Verify console.error was called
    expect(consoleErrorSpy).toHaveBeenCalledOnce();
    expect(consoleErrorSpy).toHaveBeenCalledWith('API Error:', error);

    // Verify NextResponse.json was called with the correct structure
    expect(NextResponse.json).toHaveBeenCalledOnce();
    expect(NextResponse.json).toHaveBeenCalledWith(
      { 
        success: false, 
        error: 'An unexpected internal server error occurred.',
        code: 'UNKNOWN_ERROR'
      },
      { status: 500 }
    );

    // Optionally check the mock response object itself
     expect(response.status).toBe(500);
     expect(response.body).toEqual({
        success: false,
        error: 'An unexpected internal server error occurred.',
        code: 'UNKNOWN_ERROR'
    });
  });

  it('should handle a non-Error plain object correctly', () => {
    const error = { message: 'Custom object error', details: 'Some details' };
    
    const response = handleApiError(error);

    expect(consoleErrorSpy).toHaveBeenCalledOnce();
    expect(consoleErrorSpy).toHaveBeenCalledWith('API Error:', error);

    expect(NextResponse.json).toHaveBeenCalledOnce();
    expect(NextResponse.json).toHaveBeenCalledWith(
      {
        success: false,
        error: 'An unexpected internal server error occurred.',
        code: 'UNKNOWN_ERROR',
      },
      { status: 500 }
    );
    
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
        success: false,
        error: 'An unexpected internal server error occurred.',
        code: 'UNKNOWN_ERROR'
    });
  });
});
