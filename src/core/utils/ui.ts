import { SUBJECT_COLORS } from '@/core/constants'
import type { SubjectShortType } from '@/core/types'

interface CardDetails {
  avatarColor: string
  subjectType: string
}

const getCardDetails = (brief: SubjectShortType): CardDetails => {
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

const getCardIcon = (type: SubjectShortType) => {
  switch (type) {
    case 'Екз':
      return 'ic:baseline-text-snippet'
    case 'Зал':
      return 'ic:baseline-text-snippet'
    case 'Конс':
      return 'ic:baseline-help'
    case 'Лб':
      return 'ic:baseline-science'
    case 'Лк':
      return 'ic:baseline-library-books'
    case 'Пз':
      return 'ic:baseline-menu-book'
  }
}

const getPairColor = (type: SubjectShortType) => {
  switch (type) {
    case 'Екз':
      return SUBJECT_COLORS.exam
    case 'Зал':
      return SUBJECT_COLORS.test
    case 'Конс':
      return SUBJECT_COLORS.consultation
    case 'Лб':
      return SUBJECT_COLORS.lab
    case 'Лк':
      return SUBJECT_COLORS.lecture
    case 'Пз':
      return SUBJECT_COLORS.practise
  }
}

export { getCardDetails, getCardIcon, getPairColor }
