
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import RestaurantMenu from "./RestaurantMenu";



const RestaurantCard=(props)=>{
    const {resData}=props;
    const {
        id,
        name,
        cuisines,
        costForTwo,
        avgRating
    }=resData?.info;
    const {deliveryTime}=resData?.info?.sla;
     




    return (
        
        <div className="m-4 p-4 w-[250px] h-[400px] bg-indigo-100 rounded-2xl  hover:bg-blue-200">
           
            <img className="w-[220px] h-[130px] rounded-2xl mb-3"   alt="res-logo" src={ CDN_URL+ resData.info.cloudinaryImageId} /> 
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{costForTwo}  </h4>
            <h4>{avgRating} ⭐</h4> 
        </div>
    );
}



//higher order component 

// export const withPromotedLabel=(RestaurantCard)=>{
//   return (props)=>{
//     return (
//         <div>
//             <label>Promoted </label>
//             <RestaurantCard 
//             {...props}/>
//         </div>
//     )
      
    
//   }
// }

export default RestaurantCard;