import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(weekday)
dayjs.extend(weekOfYear)

export { dayjs as dayjsClient }
