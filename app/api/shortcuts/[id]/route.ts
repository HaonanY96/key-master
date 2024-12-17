import { NextResponse } from 'next/server';
import { shortcuts } from '@/lib/shortcuts/data/shortcuts';

// PUT method - Update shortcut
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const data = await request.json();
        const id = parseInt(params.id);
        
        // Find the shortcut to update
        const index = shortcuts.findIndex(s => s.id === params.id);
        if (index === -1) {
            return NextResponse.json(
                { success: false, error: "Shortcut not found" },
                { status: 404 }
            );
        }

        // Update the shortcut
        shortcuts[index] = {
            ...shortcuts[index],
            name: data.name,
            keys: Array.isArray(data.keys) ? data.keys : [data.key],
            description: data.description,
            category: data.category || shortcuts[index].category
        };

        return NextResponse.json({
            success: true,
            data: shortcuts[index]
        });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { success: false, error: "Failed to update shortcut" },
            { status: 500 }
        );
    }
}

// DELETE method - Remove shortcut
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        const index = shortcuts.findIndex(s => Number(s.id) === id);
        
        if (index === -1) {
            return NextResponse.json(
                { success: false, error: "Shortcut not found" },
                { status: 404 }
            );
        }

        // Remove the shortcut
        shortcuts.splice(index, 1);

        return new NextResponse(null, { status: 204 });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { success: false, error: "Failed to delete shortcut" },
            { status: 500 }
        );
    }
} 