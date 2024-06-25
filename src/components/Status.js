
import { useState } from "react";
import { online_img,offline_img } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";




const Status=()=>{

   let imgStatus={online_img};


      let status=useOnlineStatus();

   if(status==true){
    imgStatus=online_img;
   }
   else imgStatus=offline_img;


    return (
        <div className="status">
            <h2 className="status-msg">
                <img src={imgStatus} width="20px"/>
            
            </h2>
        </div>
    )
}

export default Status;