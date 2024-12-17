import { NextResponse } from 'next/server';
import { shortcutsByPlatform, shortcuts } from '@/lib/shortcuts/data/shortcuts';
import { calculateSimilarity } from '@/lib/shortcuts/utils/search';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const platform = searchParams.get('platform') || 'windows';
    const category = searchParams.get('category');
    const software = searchParams.get('software');
    const query = searchParams.get('query');
    const page = parseInt(searchParams.get('page') || '1');
    if (page < 1) {
      return NextResponse.json({
        success: false,
        error: 'Page number must be greater than 0'
      }, { status: 400 });
    }
    const limit = parseInt(searchParams.get('limit') || '20');
    if (limit < 1 || limit > 100) {
      return NextResponse.json({
        success: false,
        error: 'Limit must be between 1 and 100'
      }, { status: 400 });
    }
    const sort = searchParams.get('sort');
    if (sort && !['popularity', 'complexity', 'name'].includes(sort)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid sort parameter'
      }, { status: 400 });
    }

    let results = platform === 'windows' 
      ? [...shortcutsByPlatform.windows.system] 
      : [...shortcuts];

    // 按分类筛选
    if (category) {
      results = results.filter(shortcut => shortcut.category === category);
    }

    // 按软件筛选
    if (software) {
      results = results.filter(shortcut => shortcut.software === software);
    }

    // 搜索
    if (query) {
      results = results.filter(shortcut => {
        const nameMatch = calculateSimilarity(shortcut.name.toLowerCase(), query.toLowerCase()) > 0.7;
        const descMatch = calculateSimilarity(shortcut.description.toLowerCase(), query.toLowerCase()) > 0.7;
        return nameMatch || descMatch;
      });
    }

    // 排序
    if (sort) {
      results.sort((a, b) => {
        switch (sort) {
          case 'popularity':
            return (b.metadata?.popularity || 'low').localeCompare(a.metadata?.popularity || 'low');
          case 'complexity':
            return (a.metadata?.complexity || 'basic').localeCompare(b.metadata?.complexity || 'basic');
          case 'name':
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
    }

    // 分页
    const total = results.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const end = start + limit;
    results = results.slice(start, end);

    return NextResponse.json({
      success: true,
      data: results,
      metadata: {
        total,
        currentPage: page,
        totalPages,
        limit
      }
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Internal Server Error'
      },
      { status: 500 }
    );
  }
} 