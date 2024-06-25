import { useEffect, useState } from "react";



const useOnlineStatus= ()=>{

   
   //try to check online or offline
   
   const [onlineStatus, setonlineStatus]= useState(true);

   
   useEffect(()=>{
       
    window.addEventListener("online", ()=>{
        setonlineStatus(true)});

    window.addEventListener("offline", ()=>{setonlineStatus(false);})

   },[]);



   return onlineStatus;
}

export default useOnlineStatus;