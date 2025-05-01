/**
 * Normalizes a marker to ensure it has open and close properties
 * @param marker String marker or object with open/close properties
 * @returns Object with open and close properties
 */
export const normalizeMarker = (
  marker: string | { open: string; close: string } | undefined,
): { open: string; close: string } | null => {
  if (!marker) return null;

  if (typeof marker === "string") {
    return { open: marker, close: marker };
  }

  return marker;
};
