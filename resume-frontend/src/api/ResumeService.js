import axios from "axios";


export const baseURLL = "http://localhost:9090";

export const axiosInstance = axios.create({
  baseURL: baseURLL,
    headers: {
        "Content-Type": "application/json", 
    },  
});

export const generateResume= async(prompt)=>{
    const response  = await axiosInstance.post("/api/v1/resume/generate", {
          userDescription : prompt
        });
    return response.data;
}