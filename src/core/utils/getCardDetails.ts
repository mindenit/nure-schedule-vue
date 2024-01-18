import { SUBJECT_COLORS } from '@/core/constants/'
import type { SubjectType } from '@/core/types/ui.types'

export function getCardDetails(brief: SubjectType): any {
  switch (brief) {
    case 'Лк':
      return { avatarColor: SUBJECT_COLORS.lecture, subjectType: 'Лекція' }
    case 'Лб':
      return {
        avatarColor: SUBJECT_COLORS.lab,
        subjectType: 'Лабораторна робота'
      }
    case 'Пз':
      return {
        avatarColor: SUBJECT_COLORS.practise,
        subjectType: 'Практичне заняття'
      }
    case 'Конс':
      return {
        avatarColor: SUBJECT_COLORS.consultation,
        subjectType: 'Консультація'
      }
    case 'Зал':
      return {
        avatarColor: SUBJECT_COLORS.test,
        subjectType: 'Залік'
      }
    case 'Екз':
      return {
        avatarColor: SUBJECT_COLORS.exam,
        subjectType: 'Екзамен'
      }
    default:
      return {
        avatarColor: SUBJECT_COLORS.checkCode,
        subjectType: 'ПЕРЕВІРТЕ КОД'
      }
  }
}
