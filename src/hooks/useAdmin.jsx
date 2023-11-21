import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useAdmin = () => {
    const axios = useAxios()
    const {user} = useAuth()
   const {data: isAdmin, isPending: isAdminPending} = useQuery({
    queryKey:[user?.email,'isAdmin'],
    queryFn: async()=>{
        const res = await axios.get(`/users/admin/${user.email}`)
        // console.log(res.data);
        return res.data?.admin
    }
   })
   return [isAdmin, isAdminPending]
};

export default useAdmin;