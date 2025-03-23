import { User } from '@/modal/user'
import { createApi } from '@/services/request'

interface LoginRequest {
  userName: string
  password: string
}

interface UpdatePwDInfo {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

export const getUserInfo = () => createApi<User>('get', '/user/info')

export const getAllUser = () => createApi<User[]>('get', '/user')

export const register = (credentials: LoginRequest) => {
  const formData = new URLSearchParams()
  formData.append('userName', credentials.userName)
  formData.append('password', credentials.password)

  return createApi<User>('post', '/user/register', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

export const login = (credentials: LoginRequest) => {
  const formData = new URLSearchParams()
  formData.append('userName', credentials.userName)
  formData.append('password', credentials.password)

  return createApi<User>('post', '/user/login', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

export const updatePWd = (updateInfo: UpdatePwDInfo) =>
  createApi<void>('patch', '/user/update-password', updateInfo)

export const updateUser = (data: Partial<User>) =>
  createApi<User>('put', '/user/update', data)
