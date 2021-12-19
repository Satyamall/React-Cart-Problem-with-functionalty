import { Link } from "react-router-dom";

export default function Card({id,image,name,price}){

    return(
        <div style={{
            border: "2px solid red",
            padding: 20, 
            marginTop: 20,
            width: "400px"
         }}>
            <div>
                <img src={image} alt="" />
            </div>
            <h1>Product Name: {name}</h1>
            <h1>Price: ₹ {price}</h1>
            <div>
                <Link style={{fontSize: "20px"}} to={`/items/${id}`}>Details of Item</Link>
            </div>
        </div>
    )
}