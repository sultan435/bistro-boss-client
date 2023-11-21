import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react"

import useAxiosPublic from "./useAxiosPublic";

const useMenu = () =>{
    // const [menu, setMenu] =useState([])
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(()=>{
    //     fetch('http://localhost:5000/menus')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setMenu(data)
    //         setIsLoading(false)
    //     })
    // },[])
    const axiosPublic = useAxiosPublic()

    const {data: menu=[], isPending: isLoading, refetch} = useQuery({
        queryKey: ["menu"],
        queryFn: async()=>{
            const res =await axiosPublic.get("/menus")
            return(res.data)
        }
    })
    return [menu, isLoading, refetch]

}
export default useMenu;