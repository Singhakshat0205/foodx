
import React, { useEffect, useState} from "react";
import { lazy ,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider , Outlet, useSearchParams} from "react-router-dom";
import UserContext from "./utils/Usercontext";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "../components/Grocery";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery=lazy(()=> import("./components/Grocery"));
const About= lazy(()=>import("./components/About"));

const Applayout=()=>{

    const [userName, setUserName]= useState();

    useEffect(()=>{
        const data={
            name:"Akshat"
        };

        setUserName(data.name);
    },[]);
  
    // //subscribing to the store using a selector
    // const cart= useSelector();

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <div className="app">
            <Header/>
           <Outlet/>

        </div>
        </UserContext.Provider>
        </Provider>
    );
}



const appRouter=createBrowserRouter([

    {
        path: "/",
        element: <Applayout/>,
        errorElement: <Error/>,
        children:[
        {
            path: "/",
            element:<Body/>
        },
            {
                path:"/about",
                element: (<Suspense fallback={<h1>Loading.....</h1>}><About/></Suspense>),
                errorElement: <Error/>
            },
            {
                path:"/contact",
                element:<Contact/>,
                errorElement: <Error/>
            },
            {
                path:"/grocery",
                element:(<Suspense fallback={<h1>Loading</h1>}>
                <Grocery/>
                </Suspense>),
               
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }

        ]
    },
   
]);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
