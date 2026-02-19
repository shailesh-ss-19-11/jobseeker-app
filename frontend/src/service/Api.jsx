
import axios from "axios";
import { baseURL } from "../constant";

const getdata= async(success, error)=>{
   try {
       const response=await axios.get(baseURL+"app/v1/roles")
    if(response.status===200){
        success(response)
    }
   } catch (err) {
    error(err.message)    
   }

}

const createdata=async(success,error)=>{
try {
        
} catch (error) {
    
}
}

export {
    getdata
}