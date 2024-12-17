import { NextResponse } from 'next/server';
import { categories } from '@/lib/shortcuts/data/categories';
import { CategoryType, type Category } from '@/lib/shortcuts/types/common';

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const type = searchParams.get('type') as CategoryType | null;
    const platform = searchParams.get('platform');
    const software = searchParams.get('software');
    
    let results = [...categories];

    // 如果指定了具体ID，返回该分类及其子分类
    if (id) {
      const category = categories.find(c => c.id === id);
      if (!category) {
        return NextResponse.json(
          { success: false, error: 'Category not found' },
          { status: 404 }
        );
      }
      results = [
        category,
        ...getDescendants(id)
      ];
    }
    
    // 按平台筛选
    if (platform) {
      results = results.filter(cat => 
        cat.id === platform || 
        isDescendantOf(cat, platform)
      );
    }
    
    // 按软件筛选
    if (software) {
      results = results.filter(cat => 
        (cat.id === software && cat.type === CategoryType.SOFTWARE) || 
        isDescendantOf(cat, software)
      );
    }
    
    // 按类型筛选
    if (type && Object.values(CategoryType).includes(type)) {
      results = results.filter(cat => cat.type === type);
    }

    // 排序结果
    results.sort((a, b) => (a.order || 0) - (b.order || 0));

    return NextResponse.json({
      success: true,
      data: results,
      metadata: {
        total: results.length,
        filters: { type, platform, software, id }
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

// 获取所有子分类
function getDescendants(categoryId: string): Category[] {
  return categories.filter(cat => isDescendantOf(cat, categoryId));
}

// 检查是否是某个分类的后代
function isDescendantOf(category: Category, ancestorId: string): boolean {
  let current = category;
  while (current.parentId) {
    if (current.parentId === ancestorId) return true;
    current = categories.find(c => c.id === current.parentId)!;
  }
  return false;
} 