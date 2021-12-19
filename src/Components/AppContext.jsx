
import React, { useEffect, useState } from "react";
import axios from "axios";

export const AppContext=React.createContext();


function AppContexProvider({children}){

    const [item,setItem]=useState([]);
    const [total,setTotal]=useState([]);

    const getItems = () => {
        return axios.get("http://localhost:3000/cartTable")
    }
    const handleItems=async()=>{
        try{
            getItems()
            .then((res)=>{
                setItem(res.data);
                var val=0;
                item.map((v)=> val+=v.finalPrice)
                setTotal(val);
            })
        }
        catch{

        }
    }
    useEffect(()=>{
       handleItems();
    },[item])

    return(
        <AppContext.Provider value={[item,total]}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContexProvider;