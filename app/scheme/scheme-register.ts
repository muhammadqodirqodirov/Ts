import {z} from "zod"


export const schemeRegister=z.object({
    fullname:z.string().min(4,{message:"Enter your fullname"}),
    email:z.string().email({message:"Enter your email"}),
    password:z.string().min(4,{message:"Enter your password"})
})