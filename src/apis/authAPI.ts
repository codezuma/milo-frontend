import axios from "axios"
import { api } from "./config/axios-config"

export const authAPI = {
    "validateEmail":async (email:string)=>{
      return api.post('/auth/login/email-validate',{email:email});
    }
}