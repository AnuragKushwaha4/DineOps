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
    },
    deleteAllItems:(state)=>{
      return []
    }
  },
})


export const getTotal = (state) =>state.cart.reduce((total,item)=> total + item.price * item.count, 0);


export const { addItems,deleteItem ,deleteAllItems} = MenuCartSlice.actions

export default MenuCartSlice.reducer