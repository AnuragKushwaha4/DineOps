import { configureStore } from '@reduxjs/toolkit'
import CustomoerSlice from "../Slice/CustomerSlice"
import  MenuCartSlice  from '../Slice/MenuCartSlice';
import userSlice from "../Slice/UserSlice"


 const store = configureStore({
  reducer: {
    customer:CustomoerSlice,
    cart:MenuCartSlice,
    user:userSlice
  },
})

export default store;