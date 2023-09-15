import { ALERT_TYPE } from '../constants/alerts'

export type IAlertType = keyof typeof ALERT_TYPE

export interface IAlert {
  id: number
  title: string
  message: string
  type: IAlertType
}