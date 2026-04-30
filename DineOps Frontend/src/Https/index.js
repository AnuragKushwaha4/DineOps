import axios from "axios"

const api = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL,
    withCredentials:true,
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
    }
})


// Auth APIs end points:



const login = (data)=> api.post("/auth/login",data);
const register =(data)=>api.post("/auth/register",data);
const getData =()=>api.get("/auth")
const logout =()=>api.post("/auth/logout")

//Table HandleAPI endpoints:

const addTable = (data)=>api.post("/table",data)
const GetTables =()=>api.get("/table")


//Payment Handling APIs endpoints:

const createOrder =(data)=>api.post("/payment/createOrder",data)
const verifyPayment =(data)=>api.post("/payment/verifyPayment",data)
const updatePayments =(data)=>api.post("/payment/updatePayment")
export {login,register,getData,logout,addTable,GetTables,createOrder,verifyPayment,updatePayments}