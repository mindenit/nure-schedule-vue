import { dayjsClient } from '@/libs/dayjs'

const USER_TIMEZONE = dayjsClient.tz.guess()

export { USER_TIMEZONE }
