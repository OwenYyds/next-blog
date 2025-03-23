export interface User {
  id: number
  userName: string
  email: string
  phone?: string
  avatar?: string
  createTime?: string
  updateTime?: string
  lastLoginTime?: string
  status?: number
  deleted?: number
  role?: string
  token?: string
  description?: string
  nickName: string
}
