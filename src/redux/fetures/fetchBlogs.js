import instance from "../../axios/axiosInstance"

export const fetchBlogsApi = async()=>{
   const response = await instance("/blogs")
   return response.data
}