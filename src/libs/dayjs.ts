import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekday from 'dayjs/plugin/weekday'
import updateLocale from 'dayjs/plugin/updateLocale'
import localeData from 'dayjs/plugin/localeData'
import 'dayjs/locale/uk'

dayjs.extend(weekday)
dayjs.extend(weekOfYear)
dayjs.extend(updateLocale)
dayjs.extend(localeData)

export { dayjs as dayjsClient }
