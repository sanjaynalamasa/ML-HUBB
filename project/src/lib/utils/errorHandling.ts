import { APIError } from '../types/api';

export function createAPIError(error: unknown): APIError {
  if (error instanceof Error) {
    return {
      message: error.message,
      code: 'API_ERROR'
    };
  }
  return {
    message: 'An unexpected error occurred',
    code: 'UNKNOWN_ERROR'
  };
}