export const basePath = "/ejcaubat";
export const siteUrl = `https://krazydec.github.io${basePath}`;

export function publicAssetUrl(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (path === basePath || path.startsWith(`${basePath}/`)) return path;
  return `${basePath}${path}`;
}
