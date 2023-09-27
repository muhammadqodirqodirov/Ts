import {create} from "zustand"
import axios from "axios"
export const useData = create ((set)=>({
    post:[],
    img:[],
    loading:false,
    error:""  ,
    getData: async()=>{
        set({loading:true});
        try {
          const res= await axios.get(("http://207.154.221.44:4002/api/dishes"))
          
         set({post:res.data.data.data,loading:false})
        } catch (error) {
            console.log(error)
        }
    }  
})) 
