import { MAIN_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantDetail=()=>{

const [listofRestaurants, setlistofRestaurant]= useState([]);

    useEffect(()=>{
    fetchData();
    },[]);


const fetchData=async ()=>{

    const data= await fetch(MAIN_API);
    const json= await data.json();
    setlistofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
}

console.log(listofRestaurants);

return listofRestaurants;

}



export default useRestaurantDetail;