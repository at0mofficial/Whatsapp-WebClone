const sizeOf = require("image-size");
export function isPortrait(path: string): boolean {
  const dimensions = sizeOf(`public${path}`);
  return dimensions.height > dimensions.width;
}
