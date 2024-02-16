import type { IAuditorium, ISchedule, ITeacher } from 'nurekit'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { LessonsFilter, SubjectShortType } from '../types'
import { flow } from '../utils'

export const useFiltersStore = defineStore(
  'filters',
  () => {
    const teachersFilter = ref<ITeacher[]>([])
    const auditoriumsFilter = ref<IAuditorium[]>([])
    const lessonsFilter = ref<LessonsFilter[]>([])

    const addLessonsFilter = (lesson: LessonsFilter) => {
      const exists = lessonsFilter.value.includes(lesson)

      if (!exists) {
        lessonsFilter.value.push(lesson)
      } else {
        removeLessonFilter(lesson)
      }
    }

    const addTeachersFilter = (teacher: ITeacher) => {
      const exists = teachersFilter.value.some((t) => {
        return t.id === teacher.id
      })

      if (!exists) {
        teachersFilter.value.push(teacher)
      } else {
        removeTeacherFilter(teacher)
      }
    }

    const addAuditoriumFilter = (auditorium: IAuditorium) => {
      const exists = auditoriumsFilter.value.some((a) => {
        return a.id === auditorium.id
      })

      if (!exists) {
        auditoriumsFilter.value.push(auditorium)
      } else {
        removeAuditoriumFilter(auditorium)
      }
    }

    const removeLessonFilter = (lesson: LessonsFilter) => {
      const removedItemIndex = lessonsFilter.value.findIndex((l) => {
        return l.name === lesson.name
      })

      if (removedItemIndex !== -1) {
        lessonsFilter.value.splice(removedItemIndex, 1)
      }
    }

    const removeTeacherFilter = (teacher: ITeacher) => {
      const removedItemIndex = teachersFilter.value.findIndex((t) => {
        return t.id === teacher.id
      })

      if (removedItemIndex !== -1) {
        teachersFilter.value.splice(removedItemIndex, 1)
      }
    }

    const removeAuditoriumFilter = (auditorium: IAuditorium) => {
      const removedItemIndex = auditoriumsFilter.value.findIndex((a) => {
        return a.id === auditorium.id
      })

      if (removedItemIndex !== -1) {
        auditoriumsFilter.value.splice(removedItemIndex, 1)
      }
    }

    const applyLessonsFilter = (pairs: ISchedule[]) => {
      const exclusionArr = lessonsFilter.value.map((filter) => filter.type)

      return pairs.filter((pair) => !exclusionArr.includes(pair.type as SubjectShortType))
    }

    const applyTeachersFilter = (pairs: ISchedule[]) => {
      const exclusionSet = new Set(teachersFilter.value.map((teacher) => teacher.id))

      return pairs.filter((pair) => {
        if (!pair.teachers.length) {
          return pair
        }

        return pair.teachers.some((teacher) => {
          return !exclusionSet.has(teacher.id)
        })
      })
    }

    const applyAuditoriumsFilter = (pairs: ISchedule[]) => {
      return pairs.filter((pair) => {
        return !auditoriumsFilter.value.map((auditorium) => auditorium.name).includes(pair.auditory)
      })
    }

    const applyFilters = flow(applyAuditoriumsFilter, applyLessonsFilter, applyTeachersFilter)

    return {
      teachersFilter,
      auditoriumsFilter,
      lessonsFilter,
      addAuditoriumFilter,
      addLessonsFilter,
      addTeachersFilter,
      removeAuditoriumFilter,
      removeLessonFilter,
      removeTeacherFilter,
      applyFilters
    }
  },
  {
    persist: true
  }
)
