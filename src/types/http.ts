import { Nullable } from './utility'

export interface LoginSign {
  changePasswordFlag: boolean
  changePasswordMessage: Nullable<unknown>
  errorMessage: Nullable<unknown>
  orgId: string
  passwordMatch: true
  reAuthClientId: Nullable<unknown>
  secret: string
  staffName: string
  sysAdmin: true
  token: string
  userId: string
}