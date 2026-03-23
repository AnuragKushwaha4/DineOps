import { createSlice } from '@reduxjs/toolkit'


const initialState =[]
export const MenuCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems:(state,action)=>{
        state.push(action.payload);
    },
    deleteItem:(state,action)=>{
        return state.filter(item=>item.id!=action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItems,deleteItem } = MenuCartSlice.actions

export default MenuCartSlice.reducer