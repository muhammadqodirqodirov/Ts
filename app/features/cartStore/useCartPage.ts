import {  Set, State } from "@/app/types"
import {create} from "zustand"
import {createJSONStorage, persist} from "zustand/middleware"
const countStore=(set:any)=>({
    post:[],
    product:{},
    loading:false,
    error:""  ,
    count:1,
    addCart:(params:any)=>{
        const {newItem}= params
        set((state:State)=>{
            const newCart=[...state?.post,newItem]
            return{
                ...state,
                post:newCart
            }
        })
    },
    icrement:()=>set((state:any)=>({count : state.count + 1})),
    decrement:()=>set((state:any)=>({count : state.count - 1 })),
    reset:()=>set((state:any)=>({count : state.count - 1 }))
})

export const  useCartPage=create(
    persist(countStore,{
        name:"addpage",
        storage:createJSONStorage(()=>sessionStorage)
    })
)
