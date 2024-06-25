
import { useState, useContext } from "react";
import { LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import { online_img,offline_img } from "../utils/constants";
import Status from "./Status";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/Usercontext";
import { useSelector } from "react-redux";

const Header=()=>{
   const[login, setlogin]=useState("login");
  

  const onlineStatus= useOnlineStatus();
  const {loggedInUser}=useContext(UserContext);
   const cartItems= useSelector((store)=> store.cart.items);



    return  (
        <div className="flex justify-between shadow-lg sm:bg-pink-100 lg:bg-yellow-100 "> 
         <div className="logo-container">
            <img className="w-20" src={LOGO_URL}></img>
         </div>
         <div className="flex items-center">
          <ul  className="flex p-4 m-4">
          
               <li className="px-4"><Status/></li>

               <li className="px-4"><Link to="/">Home</Link></li>

               <li className="px-4"><Link to="/about">About Us</Link></li>

               <li className="px-4"><Link to="/contact">Contact</Link></li>

               <li className="px-4"><Link to="/grocery">Grocery</Link></li>
               
               <li className="px-4 font-bold text-xl"><Link to="/cart">cart -({cartItems.length}) </Link></li> 
           
            <button className="login-button" onClick={()=>{
                    login=="login"? setlogin("logout") :setlogin("login");
            }}>{login}</button>
             <li className="px-4">{loggedInUser}</li>
          </ul>
         </div>
        </div>
        );
    
}


export default Header;