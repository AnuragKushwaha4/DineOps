import { configureStore } from '@reduxjs/toolkit'
import CustomoerSlice from "../Slice/CustomerSlice"
 const store = configureStore({
  reducer: {
    customer:CustomoerSlice,
  },
})

export default store;