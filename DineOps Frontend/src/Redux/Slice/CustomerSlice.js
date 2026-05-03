import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    customerName:"",
    customerPhone:"",
    customerCount:0,
    tableNo:null,
    orderID:""
}


export const CustomerSlice = createSlice({
  name: 'customerslice',
  initialState,
  reducers: {
    createCustomer:(state,action)=>{
        const {name , phone , customercount}=action.payload;
        state.customerName=name;
        state.customerCount=customercount;
        state.customerPhone=phone;
        state.orderID = new Date().toISOString().slice(2,10).replace(/-/g,'') + Math.floor(1000 + Math.random()*9000);        console.log(action.payload)
    },
    deleteCustomer:(state)=>{
        state.customerName=""
        state.customerPhone=""
        state.customerCount=0
        state.tableNo=null
        state.orderID=""
    },
    setTableNumber:(state,action)=>{
        const {table}=action.payload;
        state.tableNo=table;
        console.log(action.payload)
    }
  },
})

export const { createCustomer,deleteCustomer,setTableNumber} = CustomerSlice.actions

export default CustomerSlice.reducer