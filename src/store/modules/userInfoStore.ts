import { createSlice } from '@reduxjs/toolkit'
import { AppDispatch } from '..'
import { request } from '@/services'

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

interface Company {
  name: string
  catchPhrase: string
  bs: string
}

type UserInfo = {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

const userInfoStore = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo: [] as UserInfo[],
  },
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
  },
})

const { setUserInfo } = userInfoStore.actions

const fetchUserInfo = () => async (dispatch: AppDispatch) => {
  const response = await request('/0')
  const data: UserInfo = await response.json()
  dispatch(setUserInfo(data))
}

const userinfoReducer = userInfoStore.reducer

export { setUserInfo, fetchUserInfo }
export default userinfoReducer
