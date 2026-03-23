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


export const getTotal = (state)=>{
  state.cart.reduce((total,item)=>total+item.price,0);
}
export const { addItems,deleteItem } = MenuCartSlice.actions

export default MenuCartSlice.reducer