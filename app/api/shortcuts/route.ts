import { NextResponse } from 'next/server';
// Removed: import { shortcutsByPlatform, shortcuts } from '@/lib/shortcuts/data/shortcuts';
import { FunctionType, Shortcut } from '@/lib/shortcuts/types';
import { db } from '@/app/_utils/firebase'; // Firebase config
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'; // Firestore functions for GET and POST
import { handleApiError } from '@/app/_utils/api-helpers'; // Import the new error handler

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const platform = searchParams.get('platform'); // Keep platform optional for now
    const category = searchParams.get('category');
    
    const shortcutsCollection = collection(db, 'shortcuts');
    let q = query(shortcutsCollection);

    if (platform) {
      q = query(q, where('platform', '==', platform));
    }

    const querySnapshot = await getDocs(q);
    let results = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Shortcut));

    // Simplified category filtering (post-fetch)
    if (category) {
      const normalizedCategory = category.toLowerCase();
      results = results.filter(shortcut => shortcut.category?.toLowerCase() === normalizedCategory);
    }

    // 构建分组数据 (this logic can remain, operating on Firestore results)
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
    return handleApiError(error);
  }
}

// 添加 POST 方法来处理创建新快捷键
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 创建新的快捷键对象 (without local id generation for now, Firestore will generate one)
    const shortcutData: Omit<Shortcut, 'id'> = { // Prepare data without id
      name: data.name,
      keys: Array.isArray(data.keys) ? data.keys : [data.key],
      description: data.description,
      category: data.category || 'Custom',
      metadata: {
        complexity: "basic",
        context: "general"
      }
    };

    // Add the new shortcut to Firestore
    const docRef = await addDoc(collection(db, "shortcuts"), shortcutData);

    // Create the shortcut object to return, now including the Firestore-generated ID
    const newShortcut: Shortcut = {
      id: docRef.id,
      ...shortcutData
    };

    return NextResponse.json({
      success: true,
      data: newShortcut,
      message: "Shortcut added successfully to Firestore."
    }, { status: 201 });

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