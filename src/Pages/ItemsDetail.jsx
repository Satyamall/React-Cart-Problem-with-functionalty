import axios from "axios"
import {useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ItemsDetails() {

    const getItems = (id) => {
        return axios.get("http://localhost:3000/cartItems/" + id)
    }

    const [data, SetData] = useState([]);
    const { id } = useParams();

    var [count,setCount]=useState(1);

    useEffect(() => {
        getItems(id)
            .then((res) => {
                SetData(res.data)
            })
    }, [id])

    const handleCart=({count,price,id})=>{
            postData(id)
            const payload ={
                id: id,
                count: count,
                price: price,
                finalPrice: count*price
            }
            const config={
                url: "http://localhost:3000/cartTable",
                method: "post",
                data: payload
            }
            return axios(config)
        }
//    console.log(item);

   const postData=(id)=>{
       const config={
           url: `http://localhost:3000/cartTable/${id}`,
           method: "delete"
       }
       return axios(config)
   }

    const handleAdd=()=>{
        setCount(count+1);
    }

    const handleDelete=()=>{
        if(count>1)
        {
            setCount(count-1);
        }
    }
    return (
        <div style={{display: "flex",flexDirection:"column",alignItems: "center"}}>
            <h1>Item Details Page</h1>
            <div style={{ 
                display: "flex", 
                gap: "1rem", 
                border: "2px solid red", 
                padding: 20, 
                borderRadius: "20px",
                width: "550px"
            }}>
                <div>
                    <img src={data.image_url} alt="" />
                </div>
                <div>
                    <p>Product name: {data.product_name}</p>
                    <p>Description: {data.description}</p>
                    <p>Price: ₹ {data.price}</p>
                </div>
                <div style={{ display: "flex", gap: "5rem", flexDirection: "column" }}>
                    <div style={{display: "flex",gap: ".5rem"}}>
                        <button onClick={handleDelete}>-</button>
                        <p style={{border: "1px solid black",padding: 10,background:"black",color: "white"}}>{count}</p>
                        <button onClick={handleAdd}>+</button>
                    </div>
                    <div>
                        <button onClick={()=>handleCart({...data,count})}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div>
            {id !== "1" && <Link to={`/items/${Number(id) - 1}`}>Prev</Link>}
            <Link to={`/items/${Number(id) + 1}`} style={{margin: 20}}>Next</Link>
            </div>
        </div>
    )
}