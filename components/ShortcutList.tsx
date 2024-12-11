import { ShortcutGroup } from '@/lib/shortcuts/types/common';

interface ShortcutListProps {
  platform?: string;
  category?: string;
}

async function getShortcuts(platform?: string, category?: string) {
  const params = new URLSearchParams();
  if (platform) params.append('platform', platform);
  if (category) params.append('category', category);
  
  const res = await fetch(`/api/shortcuts?${params.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch shortcuts');
  return res.json();
}

export async function ShortcutList({ platform, category }: ShortcutListProps) {
  const { groups } = await getShortcuts(platform, category);
  
  if (!groups || groups.length === 0) {
    return <div className="text-gray-500">No shortcuts found</div>;
  }
  
  return (
    <div className="space-y-8">
      {groups.map((group: ShortcutGroup) => (
        <div key={group.id} className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">{group.name}</h2>
          <p className="text-gray-600 mb-4">{group.description}</p>
          
          <div className="space-y-4">
            {group.shortcuts.map((shortcut) => (
              <div key={shortcut.id} className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{shortcut.description}</h3>
                    <p className="text-sm text-gray-600">{shortcut.usage}</p>
                  </div>
                  <div className="flex gap-2">
                    {shortcut.keys.map((key, index) => (
                      <kbd key={index} className="px-2 py-1 bg-gray-100 rounded">
                        {key}
                      </kbd>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 