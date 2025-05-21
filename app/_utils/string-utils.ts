/**
 * Formats a string (typically an enum key) into a display-friendly name.
 * Example: "VIRTUAL_DESKTOP" -> "Virtual Desktop"
 * @param key - The string to format.
 * @returns The formatted string.
 */
export function formatCategoryName(key: string): string {
  if (!key) return ''; // Handle empty or null input gracefully
  return key
    .toLowerCase()
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
