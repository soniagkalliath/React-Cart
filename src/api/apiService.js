import axiosInstance from "./axiosInstance";

const apiService = async (method,url,data)=>{
   try{
     const response = await axiosInstance({method,url,data})
     return response
   }catch(err){
    throw err
   }
}

export default apiService