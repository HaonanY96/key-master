'use client';

import React, { useState } from 'react'; // Removed useEffect
import { Dialog } from '@headlessui/react';
import { ShortcutGroup, Shortcut } from '@/lib/shortcuts/types';
import ShortcutCard from './shortcut-card';
// Removed: import { getShortcuts } from '@/lib/shortcuts/api';

interface ShortcutListProps {
  groups?: ShortcutGroup[];
  shortcuts?: Shortcut[]; // This will be the primary way to pass single lists of shortcuts
  
  layout?: 'grid' | 'list';
  showGroupInfo?: boolean;
  animated?: boolean;
  
  // Removed platform and category as they are for fetching, handled by parent
}

export function ShortcutList({ 
  groups,
  shortcuts, // Now directly passed from server components
  layout = 'list',
  showGroupInfo = true,
  animated = false,
}: ShortcutListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  // Removed: fetchedGroups, isLoading, error states
  // Removed: useEffect for data fetching

  // Use props directly. If groups is provided, it takes precedence for display.
  // If only shortcuts is provided, that's used.
  const finalGroups = groups;
  const finalShortcuts = shortcuts; // This can be a flat list or derived if needed.

  // Adjusted loading/error/empty states: Handled by server component or parent.
  // This component now expects data to be resolved.
  // A simple check for empty data passed as props:
  if (!finalGroups && !finalShortcuts) {
    return <div className="text-text-secondary">No shortcuts found.</div>;
  }
  // If groups are provided, but empty, or shortcuts are provided but empty.
  if ((finalGroups && finalGroups.length === 0) && (finalShortcuts && finalShortcuts.length === 0)) {
    return <div className="text-text-secondary">No shortcuts found.</div>;
  }
  if (finalGroups && finalGroups.length === 0 && !finalShortcuts) {
     return <div className="text-text-secondary">No shortcut groups found.</div>;
  }
  if (finalShortcuts && finalShortcuts.length === 0 && !finalGroups ) {
     return <div className="text-text-secondary">No shortcuts found in the list.</div>;
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

  // If `shortcuts` prop is provided, render them directly (flat list scenario)
  if (finalShortcuts && finalShortcuts.length > 0) {
    return (
      <div className={layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-4'}>
        {finalShortcuts.map(shortcut => renderShortcut(shortcut, animated))}
        
        {/* Dialog for expanded view remains the same, ensure `finalShortcuts` is the source */}
        {animated && expandedId && finalShortcuts.find(s => s.id === expandedId) && (
          <Dialog
            open={!!expandedId}
            onClose={() => setExpandedId(null)}
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="bg-page-white rounded-lg shadow-lg max-w-lg w-full">
                <ShortcutCard
                  shortcut={finalShortcuts.find(s => s.id === expandedId)!}
                  variant="expanded"
                />
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </div>
    );
  }

  // If `groups` prop is provided, render them (grouped list scenario)
  if (finalGroups && finalGroups.length > 0) {
    return (
      <div className="space-y-8">
        {finalGroups.map((group) => (
          <div key={group.id} className="bg-page-white rounded-lg shadow-sm p-6">
            {showGroupInfo && (
              <>
                <h2 className="text-xl font-bold text-text-primary mb-4">{group.name}</h2>
                {group.description && <p className="text-text-secondary mb-6">{group.description}</p>}
              </>
            )}
            
            <div className={layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-4'}>
              {group.shortcuts.map(shortcut => renderShortcut(shortcut, animated))}
            </div>
             {/* Dialog for expanded view (needs to access shortcuts from the group) */}
            {animated && expandedId && group.shortcuts.find(s => s.id === expandedId) && (
              <Dialog
                open={!!expandedId && group.shortcuts.some(s => s.id === expandedId)}
                onClose={() => setExpandedId(null)}
              >
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                  <Dialog.Panel className="bg-page-white rounded-lg shadow-lg max-w-lg w-full">
                    <ShortcutCard
                      shortcut={group.shortcuts.find(s => s.id === expandedId)!}
                      variant="expanded"
                    />
                  </Dialog.Panel>
                </div>
              </Dialog>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  // Fallback if neither groups nor shortcuts have content, though initial checks should catch this.
  return <div className="text-text-secondary">No shortcuts to display.</div>;
} 