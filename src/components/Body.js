import RestaurantCard  from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {  MENU_API } from "../utils/constants";
import Filter from "./Filter";
import useRestaurantDetail from "../utils/useRestaurantDetail";
import useOnlineStatus from "../utils/useOnlineStatus";
import Status from "./Status";
import UserContext from "../utils/Usercontext";
import Header from "./Header";


const Body=()=>{

 
  const [listofRestaurants,setlistofRestaurant]= useState([]);
  const [searchText, setsearchText]= useState("");
  
  const [filteredrestaurant, setfilteredrestaurant]= useState([]);
    

  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  

    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData= async ()=>{
     const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json= await data.json();
      setlistofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
      
    };
       

  const {setUserName}= useContext(UserContext);

    const onlineStatus= useOnlineStatus();
    

    if(onlineStatus === false)
    return (
      <div>
      { 
        alert("please check your internet connection")
      }
      <Status/>
       <h2 className="offline_gif">
        <img src="https://cdn.svgator.com/images/2022/11/Cactus-party-of-4.gif"/>
       </h2>
      </div>
  );


  const {loggedInUser}=useContext(UserContext);


    return listofRestaurants.length===0 ?
     (<Shimmer/>) : 
     (

        <div id="bodyComp" className="ml-20 ">
            <div className="flex mb-6 ml-4 mt-6 "> 
            
              <input id="inputDetail" className="border border-solid border-black rounded-lg mr-4" 
              type="text"
               value={searchText} 
               onChange={(e)=>{
                setsearchText(e.target.value);
               }}
              />
              <button 
              className="w-20 border border-solid border-black bg-green-100 mr-4 rounded-lg " 
              onClick={()=>{

                 const filteredrestaurants= listofRestaurants.filter((res)=> 
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())); 
                  setfilteredrestaurant(filteredrestaurants);
                   
                }}
  
              >search</button>
              
              <label className="p-2 m-2">UserName:</label>
              <input className="border border-black p-2 m-2" value={loggedInUser} 
              onChange={(e)=>{
                setUserName(e.target.value)
              }}/>
            
        
           
            <div>
           
            <button className="w-60 border border-solid border-black bg-green-100 mr-4 rounded-lg"  onClick={()=>{
           
             const filteredList= listofRestaurants.filter((res)=>
             res.info.avgRating > 4.5);

             setfilteredrestaurant(filteredList);
            }
             
            
            } >Top Rated Restaurants</button>

            <button className="w-40 border border-solid border-black bg-green-100 mr-4 rounded-lg "
             onClick={
              ()=>{
                setfilteredrestaurant(listofRestaurants);
              }
            }>Remove Filter</button>

            </div>



         

            </div>


            <div className="flex flex-wrap ml-24 mr-20 ">
                 {
                   filteredrestaurant.map((restaurant)=>
                   
                    <Link key={restaurant.info.id}
                     to={"/restaurant/"+restaurant.info.id}
                     className="no-underline">

                  <RestaurantCard key={restaurant.info.id}  resData={restaurant}/> 
                  </Link>
                   )
                 } 
            </div>
        </div>
    )
} 


export default Body;