import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekday from 'dayjs/plugin/weekday'
import updateLocale from 'dayjs/plugin/updateLocale'
import localeData from 'dayjs/plugin/localeData'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/uk'

dayjs.extend(weekday)
dayjs.extend(weekOfYear)
dayjs.extend(updateLocale)
dayjs.extend(localeData)
dayjs.extend(utc)
dayjs.extend(timezone)

export { dayjs as dayjsClient }
