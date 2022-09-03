import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import User from '@/shared/interfaces/User';

interface authState{
  isAuth: boolean,
  isLoading: boolean,
  user: User
}

const initialState: authState = {
  isAuth: false,
  isLoading: true,
  user: {
    _id: '',
    login: '',
    lastOnline: null,
    avatar: null
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth(state){
      state.isAuth = true;
    },
    unAuth(state){
      state.isAuth = false;
    },
    defineUser(state, action: PayloadAction<User>){
      state.user = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>){
      state.isLoading = action.payload;
    }
  },
})

export const { auth, defineUser, unAuth, setLoading } = authSlice.actions
export default authSlice.reducer