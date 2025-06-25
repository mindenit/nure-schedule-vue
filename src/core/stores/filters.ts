import type { Auditorium, Schedule, Teacher } from 'nurekit'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { LessonsFilter, SubjectShortType } from '../types'
import { flow } from '../utils'

export const useFiltersStore = defineStore(
  'filters',
  () => {
    const teachersFilter = ref<Teacher[]>([])
    const auditoriumsFilter = ref<Auditorium[]>([])
    const lessonsFilter = ref<LessonsFilter[]>([])

    const addLessonsFilter = (lesson: LessonsFilter) => {
      const exists = lessonsFilter.value.includes(lesson)

      if (!exists) {
        lessonsFilter.value.push(lesson)
      } else {
        removeLessonFilter(lesson)
      }
    }

    const addTeachersFilter = (teacher: Teacher) => {
      const exists = teachersFilter.value.some((t) => {
        return t.id === teacher.id
      })

      if (!exists) {
        teachersFilter.value.push(teacher)
      } else {
        removeTeacherFilter(teacher)
      }
    }

    const addAuditoriumFilter = (auditorium: Auditorium) => {
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

    const removeTeacherFilter = (teacher: Teacher) => {
      const removedItemIndex = teachersFilter.value.findIndex((t) => {
        return t.id === teacher.id
      })

      if (removedItemIndex !== -1) {
        teachersFilter.value.splice(removedItemIndex, 1)
      }
    }

    const removeAuditoriumFilter = (auditorium: Auditorium) => {
      const removedItemIndex = auditoriumsFilter.value.findIndex((a) => {
        return a.id === auditorium.id
      })

      if (removedItemIndex !== -1) {
        auditoriumsFilter.value.splice(removedItemIndex, 1)
      }
    }

    const applyLessonsFilter = (pairs: Schedule[]) => {
      const exclusionArr = lessonsFilter.value.map((filter) => filter.type)

      return pairs.filter((pair) => !exclusionArr.includes(pair.type as SubjectShortType))
    }

    const applyTeachersFilter = (pairs: Schedule[]) => {
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

    const applyAuditoriumsFilter = (pairs: Schedule[]) => {
      return pairs.filter((pair) => {
        return !auditoriumsFilter.value
          .map((auditorium) => auditorium.name)
          .includes(pair.auditorium.name)
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
