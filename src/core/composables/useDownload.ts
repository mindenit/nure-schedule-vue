import type { ConvertFn, ExportableScheduleArgs } from '../types'
import { convertSchedule } from '../utils'

export const useDownload = (convertFn: ConvertFn) => {
  const downloadFile = async ({ type, name }: ExportableScheduleArgs) => {
    const url = URL.createObjectURL(await convertSchedule({ type, name }, convertFn))

    const link = document.createElement('a')
    link.href = url
    link.download = 'Schedule'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return { downloadFile }
}
