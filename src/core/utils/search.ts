export function search<T extends Record<string, any>>(items: T[], query: string, select: string) {
  const trimmed = query.trim()

  return items.filter((item) => {
    if (trimmed === '') {
      return item
    }

    return item[select].toLowerCase().includes(trimmed.toLowerCase())
  })
}
