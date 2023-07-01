/**
 * Formats the address to be displayed in multiple lines.
 * Example: 1234 Main St, City, State, Zip -> 1234 Main St\nCity, State, Zip
 * @param address the address to be formatted
 * @returns the formatted address
 */
export function getFormattedAddress(address: string) {
  return address.replace(', ', '\n');
}
