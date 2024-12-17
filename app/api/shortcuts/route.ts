import { NextResponse } from 'next/server';
import { shortcutsByPlatform, shortcuts } from '@/lib/shortcuts/data/shortcuts';
import { FunctionType } from '@/lib/shortcuts/types/common';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const platform = searchParams.get('platform') || 'windows';
    const category = searchParams.get('category');
    
    // 获取基础数据
    let results = platform === 'windows' 
      ? [...shortcutsByPlatform.windows.system] 
      : [...shortcuts];

    // 按分类筛选
    if (category) {
      // 确保大小写匹配
      const normalizedCategory = category.toLowerCase();
      results = results.filter(shortcut => 
        shortcut.category?.toLowerCase() === normalizedCategory
      );

      // 如果没有找到结果，尝试使用 FunctionType 匹配
      if (results.length === 0) {
        const functionTypeKey = Object.entries(FunctionType).find(
          ([_, value]) => value.toLowerCase() === normalizedCategory
        )?.[0];

        if (functionTypeKey) {
          results = results.filter(shortcut => 
            shortcut.category === FunctionType[functionTypeKey as keyof typeof FunctionType]
          );
        }
      }
    }

    // 构建分组数据
    const groups = results.reduce<Record<string, any>>((acc, shortcut) => {
      const category = shortcut.category as string;
      if (!acc[category]) {
        acc[category] = {
          id: category,
          name: category,
          description: `${category} shortcuts`,
          shortcuts: []
        };
      }
      acc[category as string].shortcuts.push(shortcut);
      return acc;
    }, {});

    return NextResponse.json({
      success: true,
      data: results,
      groups: groups,
      metadata: {
        total: results.length,
        categories: Object.keys(groups)
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