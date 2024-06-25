import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";



const RestaurantMenu=()=>{
   
    
   

    const {resId}= useParams();

    const resInfo= useRestaurantMenu(resId); 

    
    const [showIndex,setShowIndex]= useState(0);
    const [showItems,setShowItems]= useState(false);
    
    if(resInfo==null){
        return <Shimmer/>;
    }

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
    const {text}= resInfo?.cards[0]?.card?.card;
    
    const categories= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
            c.card?.["card"]?.["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (

        <div className="text-center">
              <h1 className="font-bold my-6 text-2xl">
                {text}
              </h1>

             <p className="font-bold text-lg">
                 
             </p>
  
            {

            categories.map((category,index)=>
             <RestaurantCategory
              key={category.card.card.title} 
              data={category?.card?.card }  
            
             showItems= {index===showIndex? true:false}
            setShowIndex={()=>setShowIndex(index)}
               
             />)
             }
        
        </div>
    )
}
export default RestaurantMenu;





