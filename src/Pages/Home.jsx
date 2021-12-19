
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Home(){

    const [data,setData]=useState([]);
    const getItems=()=>{
        return axios.get("http://localhost:3000/cartItems");
    }

    useEffect(()=>{
        getItems()
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{

        })

    },[])
    
    return(
        <div>
           <h1>Home Page</h1>
           <h1>Product Cards</h1>
           <div>
               {
                   data.map((item)=>{
                       return <Card 
                         key={item.id}
                         id={item.id}
                         name={item.product_name}
                         image={item.image_url}
                         price={item.price}
                       />
                   })
               }
           </div>
        </div>
    )
}