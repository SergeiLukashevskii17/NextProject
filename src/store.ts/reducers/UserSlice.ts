import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface User{
  uid: string;
  email: string | null;
}
interface UserState {
  data: User | null ;
  error: string ;
  isLoading:boolean;
}

const initialState: UserState = {
  data: null,
  error: '',
  isLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<User | null>) {
      state.data = action.payload
        ? {
          uid: action.payload.uid,
          email: action.payload.email
        }
        : null
    },
    setUserError(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
    setIsUserLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
  },
})

export default userSlice.reducer