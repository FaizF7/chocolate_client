import { useState, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import ChocolateList from "../components/ChocolateList";
import ChocolateForm from "../components/ChocolateForm";
import Home from "../components/Home";
import Chocolate from "../components/Chocolate";

const ChocolateContainer = () => {
    const [chocolates, setChocolates] = useState([]);
    const [estates, setEstates] = useState([]);

    const fetchChocolates = async () => {
        const response = await fetch ("http://localhost:8080/chocolates")
        const data = await response.json()
        setChocolates(data)
    }

    const fetchEstates = async () => {
        const response = await fetch ("http://localhost:8080/chocolates")
        const data = await response.json()
        setEstates(data)
    }

    const postChocolate = async (newChocolate)=>{
        const response = await fetch("http://localhost:8080/chocolates",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(newChocolate)
        })
        const savedChocolate = await response.json();
        setChocolates([...chocolates,savedChocolate])
        console.log(savedChocolate)
    }

    const deleteChocolate = async (chocolate)=>{
            await fetch(`http://localhost:8080/chocolates/${chocolate.id}`,{
            method: "DELETE",
            headers:{"Content-Type":"application/json"}
        })
        chocolates.splice(chocolates.indexOf(chocolate),1)
        let updatedChocolates = [...chocolates]
        setChocolates(updatedChocolates)
    }

    useEffect(()=>{
        fetchChocolates()
        fetchEstates()
    },[])

    const chocolateRoutes = createBrowserRouter([
        {
            path:"/",
            element: <Home />,
            children:[
                {
                    path: "/chocolates",
                    element: <ChocolateList
                                chocolates={chocolates}
                                deleteChocolate={deleteChocolate}
                            />
                },
                {
                    path: "/chocolates/new",
                    element: <ChocolateForm 
                                estates = {estates} 
                                postChocolate={postChocolate}
                            />
                }
            ]
        }
    ])

    return (  
        <>
            <h1>Hello from Chocolate World</h1>
            <RouterProvider router = {chocolateRoutes} />
        </>
    );
}

export default ChocolateContainer;