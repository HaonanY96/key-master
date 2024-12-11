import { z } from "zod";
import { ShortcutGroup } from "./common";

/**
 * API response type
 */
export interface ShortcutResponse {
  groups: ShortcutGroup[];
  total: number;
  platform?: string | null;
  appType?: string | null;
}

/**
 * API error response type
 */
export interface ErrorResponse {
  error: string;
  code: string;
  details?: unknown;
}

/**
 * API query parameters validation
 */
export const shortcutQuerySchema = z.object({
  platform: z.string().nullable(),
  appType: z.string().nullable(),
  category: z.string().nullable(),
  query: z.string().nullable(),
});

export type ShortcutQueryParams = z.infer<typeof shortcutQuerySchema>; 