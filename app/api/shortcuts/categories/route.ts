import { NextResponse } from "next/server";
import { shortcutGroups } from "@/lib/shortcuts/data/windows/system";
import { type ShortcutGroup } from "@/lib/shortcuts/types/common";

/**
 * GET /api/shortcuts/categories
 * Fetch all available categories
 */
export async function GET(request: Request) {
  try {
    const categories = new Set<string>();
    (Object.values(shortcutGroups) as ShortcutGroup[]).forEach(group => {
      categories.add(group.category);
    });

    return NextResponse.json({
      categories: Array.from(categories),
      total: categories.size
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : "Internal Server Error",
        code: error instanceof Error ? error.name : "UNKNOWN_ERROR"
      }, 
      { status: 500 }
    );
  }
} 