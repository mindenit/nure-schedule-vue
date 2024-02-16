import { dayjsClient } from '@/libs/dayjs'
import { TIME_FORMAT } from '../constants'

const getTimeline = () => {
  return [
    dayjsClient.unix(1707889500).format(TIME_FORMAT),
    dayjsClient.unix(1707895200).format(TIME_FORMAT),
    dayjsClient.unix(1707895800).format(TIME_FORMAT),
    dayjsClient.unix(1707901500).format(TIME_FORMAT),
    dayjsClient.unix(1707902100).format(TIME_FORMAT),
    dayjsClient.unix(1707907800).format(TIME_FORMAT),
    dayjsClient.unix(1708686600).format(TIME_FORMAT),
    dayjsClient.unix(1708692300).format(TIME_FORMAT),
    dayjsClient.unix(1708692900).format(TIME_FORMAT),
    dayjsClient.unix(1708698600).format(TIME_FORMAT),
    dayjsClient.unix(1708699200).format(TIME_FORMAT),
    dayjsClient.unix(1708704900).format(TIME_FORMAT)
  ]
}

export { getTimeline }
