"use client";

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import KeyboardVisualizer from './keyboard-visualizer';
import { Shortcut } from '@/lib/shortcuts/types/common';

interface AnimationModalProps {
  isOpen: boolean;
  onClose: () => void;
  shortcut: Shortcut | null;
}

export default function AnimationModal({ isOpen, onClose, shortcut }: AnimationModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isOpen && shortcut) {
      setIsPlaying(true); // Auto-play when modal opens with a shortcut
    } else {
      setIsPlaying(false); // Stop playing if modal is closed or no shortcut
    }
  }, [isOpen, shortcut]);

  // Handler for KeyboardVisualizer's setIsPlaying, if we want modal to know about internal pauses
  const handleVisualizerPlayStateChange = (playing: boolean) => {
    setIsPlaying(playing);
    // If the visualizer pauses itself (e.g. animation ends and not looping),
    // we might want to reflect this or allow it to be replayed from modal.
    // For now, just sync state.
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => {
        setIsPlaying(false); // Ensure animation stops
        onClose();
      }}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 mb-4"
                >
                  {shortcut?.name || 'Keyboard Animation'}
                </Dialog.Title>
                
                {shortcut && (
                  <KeyboardVisualizer
                    shortcut={shortcut}
                    isPlaying={isPlaying}
                    setIsPlaying={handleVisualizerPlayStateChange} // Use the new handler
                    platform="windows" // Or determine dynamically if necessary
                    loop={true} // Example: loop animation in modal
                    showInternalControls={false} // Hide KeyboardVisualizer's own controls
                  />
                )}

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => {
                      setIsPlaying(false); // Ensure animation stops
                      onClose();
                    }}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
