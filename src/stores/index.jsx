import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import favReducer from './favSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    favs: favReducer,
  },
})
