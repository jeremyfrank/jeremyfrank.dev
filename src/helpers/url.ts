export function getDomainFromUrl(url: string): string | null {
  const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i)
  return match ? match[1] : null
}
