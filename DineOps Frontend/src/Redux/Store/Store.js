import { configureStore } from '@reduxjs/toolkit'
import CustomoerSlice from "../Slice/CustomerSlice"
import { MenuCartSlice } from '../Slice/MenuCartSlice';


 const store = configureStore({
  reducer: {
    customer:CustomoerSlice,
    cart:MenuCartSlice
  },
})

export default store;