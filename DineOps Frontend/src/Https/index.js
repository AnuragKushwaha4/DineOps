import axios from "axios"

const api = axios.create({
    baseURL:import .meta.env.VITE_BACKEND_URL,
    withCredentials:true,
    headers:{
        "Content-Types":"application/json",
        Accept:"application/json"
    }
})


// API login end points:
