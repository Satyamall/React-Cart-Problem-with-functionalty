import { useContext} from "react"
import { AppContext } from "./AppContext";
import style from "./Cart.module.css";

export default function CartDetails(){
    const [item,total]=useContext(AppContext);
    return (
        <div>
            <h1>Cart Details Page</h1>
            <div>
                <table>
                    <tbody>

                    <tr>
                        <th></th>
                        <th>Invoice</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th className={style.box1}>Item</th>
                        <th className={style.box1}>Qty</th>
                        <th className={style.box1}>Price(in Rs)</th>
                        <th className={style.box1}>Final Price</th>
                    </tr>
                    {
                        item.map((data)=>{
                            return <tr key={data.id}>
                                <td className={style.box1}>Item {data.id}</td>
                                <td className={style.box1}>{data.count}</td>
                                <td className={style.box1}>{data.price}</td>
                                <td className={style.box1}>{data.finalPrice}</td>
                            </tr>
                        })
                    }
                    <tr>
                        <td></td>
                        <th>Total Price: ₹</th>
                        <td></td>
                        <th className={style.box1}>{total}</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}