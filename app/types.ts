export type Posts={
    name:string,
    email:string,
    password:number
}
export type State={
    post:any;
    map:any,
    id:number
    image:()=>void,
    name:string,
    price:number,
    time:number,
    mark:number,
    type:string,
    getData:()=>void  
}
export type Set={
    post:any,
    product:object,
    loading:boolean,
    error:string  ,
    count:number,
    set:any
    addCart:()=>void
}
export type Data={
    map:any,
    id:number
    image:()=>void,
    name:string,
    price:number,
    time:number,
    mark:number,
    type:string,
    getData:()=>void
}

export type Login={
    email:string
    password:string
}