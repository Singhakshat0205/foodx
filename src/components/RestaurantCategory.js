import { useState } from "react"
import ItemList from "./ItemList"


const RestaurantCategory=({data, showItems, setShowIndex})=>{

  

  const handleClick=()=>{
  setShowIndex();
  }
     
    return(
      <div> 
      <div className="m-[50px] text-2xl font-bold bg-gray-100 shadow-lg p-4 " >
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="text-[30px]"> {data.title} ({data.itemCards.length})</span>
        <span>🔽</span>
        </div>
        
       {showItems && <ItemList items={data.itemCards}/>}
      
        </div>

  
    
        </div>
    )
}

export default RestaurantCategory;