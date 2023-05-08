import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/UserSlice'
import {postAPI} from '../services/PostService'
import {premiumPostAPI} from '@/services/PremiunPostService'

const rootReducer = combineReducers({
  userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [premiumPostAPI.reducerPath]: premiumPostAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
        .concat(postAPI.middleware)
        .concat(premiumPostAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
