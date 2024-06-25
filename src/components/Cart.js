import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";



const Cart= ()=>{
   

    const dispatch= useDispatch();
   const handleClearCart=()=>{
         dispatch(clearCart());
   }
    const cartItems= useSelector((store)=>store.cart.items)

return <div className="text-center m-4 p-4">
        <h1 className="mt-5 p-4 text-2xl font-bold">cart</h1>
        <div className="w-9/12 m-auto">
           <button className="w-auto p-3 bg-black text-white rounded-lg hover:pointer" onClick={handleClearCart}>clear cart</button>
            <ItemList items={cartItems} />
        </div>
</div>

}

export default Cart;
