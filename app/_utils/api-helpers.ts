import { NextResponse } from 'next/server';

/**
 * Handles API errors by logging them and returning a standardized JSON response.
 * @param error - The error object.
 * @returns A NextResponse object with success: false and an error message.
 */
export function handleApiError(error: unknown): NextResponse {
  console.error('API Error:', error);

  const message = error instanceof Error ? error.message : 'An unexpected internal server error occurred.';
  
  return NextResponse.json(
    { 
      success: false, 
      error: message,
      code: error instanceof Error ? error.name : "UNKNOWN_ERROR" // Optional: include error name/code
    },
    { status: 500 }
  );
}
