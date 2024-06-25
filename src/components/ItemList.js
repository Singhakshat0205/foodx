import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList=({items})=>{

    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
        //dispatch an action
      dispatch(addItem(item));
    }

    return (
        <div>
         {
           items.map((item)=>(
                <div key={item.card.info.id} className="p-2  border-gray-200 border-b-2 text-left flex  justify-between"> 
                
                <div className="w-9/12">
                    <div className="py-2 text-[25px]">  
                    <span>{item.card.info.name}</span>
                    <br></br>
                    <span>
                        Rs. {item.card.info.defaultPrice/100}
                    </span>
                    </div>
                    <p className="text-[20px]">{item.card.info.description}</p>
                </div>
                  <div className="w-3/12 p-4 m-5">
                  <div className="relative">
                  <img className="w-[200px] rounded-xl" src={CDN_URL + item.card.info.imageId} />
                  <button className=" absolute bottom-0 ml-[35px] mb-4 w-32 h-12 bg-black rounded-xl  text-white text-center 
                  " onClick={()=>handleAddItem(item)}>Add +</button>
                  </div>
                 </div>
                </div>
            ))
         }
          
        </div>
    )
}

export default ItemList;