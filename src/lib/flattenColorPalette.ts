// utils/flattenColorPalette.ts
export function flattenColorPalette(colors: Record<string, string | Record<string, string>>): Record<string, string> {
    const result: Record<string, string> = {};
  
    for (const [color, value] of Object.entries(colors)) {
      if (typeof value === "string") {
        result[color] = value;
      } else {
        for (const [shade, hex] of Object.entries(value)) {
          result[`${color}-${shade}`] = hex;
        }
      }
    }
  
    return result;
  }