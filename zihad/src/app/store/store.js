import { configureStore } from '@reduxjs/toolkit'
import friendSlice from '../features/data/friendSlice'



export const store = configureStore({
    reducer: {
      friendDetails: friendSlice,
    }
})