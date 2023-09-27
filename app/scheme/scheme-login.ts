import {z} from "zod"


export const schemeLogin=z.object({
    email:z.string().email({message:"Enter your email"}),
    password:z.string().min(4,{message:"Enter your password"})
})