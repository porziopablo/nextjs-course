/**
 * Formats a date to a human readable format based on the locale en-US. Example: 2021-01-01 -> January 1, 2021
 * @param date the date to be formatted
 * @returns a formatted date string
 */
export function getHumanReadableDate(
  date: Date | string | number,
  hideDay?: boolean
): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: hideDay ? undefined : 'numeric',
  });
}
