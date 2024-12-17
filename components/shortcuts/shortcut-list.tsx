'use client';

import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { ShortcutGroup, Shortcut } from '@/lib/shortcuts/types/common';
import ShortcutCard from './shortcut-card';
import { getShortcuts } from '@/lib/shortcuts/api';

interface ShortcutListProps {
  groups?: ShortcutGroup[];
  shortcuts?: Shortcut[];
  
  layout?: 'grid' | 'list';
  showGroupInfo?: boolean;
  animated?: boolean;
  
  platform?: string;
  category?: string;
}

export function ShortcutList({ 
  groups,
  shortcuts,
  layout = 'list',
  showGroupInfo = true,
  animated = false,
  platform = 'windows',
  category 
}: ShortcutListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [fetchedGroups, setFetchedGroups] = useState<ShortcutGroup[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchData() {
      if (!groups && !shortcuts) {
        try {
          setIsLoading(true);
          setError(null);
          const data = await getShortcuts({ 
            platform, 
            category: category?.toUpperCase()
          });
          if (data.groups) {
            setFetchedGroups(Object.values(data.groups));
          }
        } catch (err) {
          console.error('Error fetching shortcuts:', err);
          setError(err instanceof Error ? err.message : 'Failed to fetch shortcuts');
        } finally {
          setIsLoading(false);
        }
      }
    }

    fetchData();
  }, [groups, shortcuts, platform, category]);

  const finalGroups = groups || fetchedGroups;
  const finalShortcuts = shortcuts || (finalGroups?.[0]?.shortcuts ?? []);

  if (isLoading) {
    return <div className="text-text-secondary">Loading shortcuts...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!finalGroups && !finalShortcuts) {
    return <div className="text-text-secondary">No shortcuts found</div>;
  }

  const renderShortcut = (shortcut: Shortcut, showAnimation: boolean) => {
    if (showAnimation) {
      return (
        <ShortcutCard
          key={shortcut.id}
          shortcut={shortcut}
          variant={expandedId === shortcut.id ? 'expanded' : 'compact'}
          onExpand={() => setExpandedId(shortcut.id)}
        />
      );
    }

    return (
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
    );
  };

  if (shortcuts) {
    return (
      <div className={layout === 'grid' ? 'grid grid-cols-2 gap-4' : 'space-y-4'}>
        {shortcuts.map(shortcut => renderShortcut(shortcut, animated))}
        
        {animated && expandedId && (
          <Dialog
            open={!!expandedId}
            onClose={() => setExpandedId(null)}
          >
            <div className="fixed inset-0 bg-text-primary/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="bg-page-white rounded-lg shadow-lg max-w-3xl w-full">
                <ShortcutCard
                  shortcut={shortcuts.find(s => s.id === expandedId)!}
                  variant="expanded"
                />
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {finalGroups?.map((group) => (
        <div key={group.id} className="bg-page-white rounded-lg shadow-sm p-6">
          {showGroupInfo && (
            <>
              <h2 className="text-xl font-bold text-text-primary mb-4">{group.name}</h2>
              <p className="text-text-secondary mb-6">{group.description}</p>
            </>
          )}
          
          <div className={layout === 'grid' ? 'grid grid-cols-2 gap-4' : 'space-y-4'}>
            {group.shortcuts.map(shortcut => renderShortcut(shortcut, animated))}
          </div>
        </div>
      ))}
    </div>
  );
} 