type SubjectShortType = 'Лк' | 'Лб' | 'Пз' | 'Конс' | 'Зал' | 'Екз'

interface ViewProps<T> {
  // TODO: Fix issue with types
  data: T[]
  select: 'name' | 'shortName'
  type: string
}

export type { SubjectShortType, ViewProps }
