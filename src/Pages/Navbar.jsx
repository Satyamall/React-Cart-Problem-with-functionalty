import {Link} from "react-router-dom";

export default function Navbar(){

    return(
        <div style={{display: "flex", gap: "2rem", marginTop: 20}}>
            <Link to="/">Home</Link>
            <Link to="/showCart">Show Cart</Link>
        </div>
    )
}