import { NextResponse } from "next/server";
import { shortcutGroups } from "@/lib/shortcuts/data/windows/system";
import {
  shortcutQuerySchema,
  type ShortcutResponse,
  type ErrorResponse,
} from "@/lib/shortcuts/types/api";
import { type ShortcutGroup } from "@/lib/shortcuts/types/common";

/**
 * GET /api/shortcuts
 * Fetch shortcuts with optional filters
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const params = {
      platform: searchParams.get("platform"),
      appType: searchParams.get("appType"),
      category: searchParams.get("category"),
      query: searchParams.get("query"),
    };

    // Validate query parameters
    const validatedParams = shortcutQuerySchema.parse(params);

    // Filter shortcuts based on parameters
    let results = Object.values(shortcutGroups) as ShortcutGroup[];

    if (validatedParams.platform) {
      results = results.filter(group => 
        group.metadata?.platform === validatedParams.platform
      );
    }

    if (validatedParams.appType) {
      results = results.filter(group => 
        group.metadata?.context === validatedParams.appType
      );
    }

    if (validatedParams.category) {
      results = results.filter(group => 
        group.category === validatedParams.category
      );
    }

    if (validatedParams.query) {
      const query = validatedParams.query.toLowerCase();
      results = results.filter(group => 
        group.shortcuts.some(shortcut => 
          shortcut.description.toLowerCase().includes(query) ||
          shortcut.usage.toLowerCase().includes(query)
        )
      );
    }

    const response: ShortcutResponse = {
      groups: results,
      total: results.length,
      platform: validatedParams.platform,
      appType: validatedParams.appType,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('API Error:', error);
    const errorResponse: ErrorResponse = {
      error: error instanceof Error ? error.message : "Internal Server Error",
      code: error instanceof Error ? error.name : "UNKNOWN_ERROR",
      details: error instanceof Error ? error : undefined,
    };

    return NextResponse.json(
      errorResponse,
      { status: error instanceof Error ? 422 : 500 }
    );
  }
} 