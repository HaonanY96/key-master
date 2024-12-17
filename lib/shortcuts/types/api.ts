import { Category, Shortcut } from './common';
import { z } from "zod";

/**
 * API response type
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  metadata?: {
    total: number;
    currentPage?: number;
    totalPages?: number;
    limit?: number;
  };
}

export interface ShortcutResponse extends ApiResponse<Shortcut[]> {}
export interface CategoryResponse extends ApiResponse<Category[]> {}

/**
 * API query parameters validation
 */
export const shortcutQuerySchema = z.object({
  platform: z.string().nullable(),
  category: z.string().nullable(),
  software: z.string().nullable(),
  query: z.string().nullable(),
  page: z.number().optional(),
  limit: z.number().optional(),
  sort: z.enum(['popularity', 'complexity', 'name']).optional()
});

export type ShortcutQueryParams = z.infer<typeof shortcutQuerySchema>; 