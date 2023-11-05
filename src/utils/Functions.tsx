/**
 * 
 * @param text 
 * @param max 
 * @returns 
 */
export function textSlicer(text: string, max: number = 50) {
  if (text.length >= max) return `${text.slice(0, max)}...`;
  return text;
}
