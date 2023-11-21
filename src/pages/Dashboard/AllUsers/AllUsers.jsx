import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axios = useAxios()
    const {data: users= [], refetch} = useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await axios.get("/users")
            return res.data
        }
    })
    // console.log(users);

    const handleMakeAdmin = user =>{
        axios.patch(`/users/admin/${user._id}`)
        .then(res=>{
            // console.log(res.data);
            if(res.data.modifiedCount> 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDeleteUser = user =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-start my-4">
                <h2 className="text-3xl font-semibold">Total User: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full" >
                    {/* head */}
                    <thead className="bg-orange-400 text-white">
                        <tr className="">
                            <th>
                                Number
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                            {
                                users.map((user, index)=>  <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td className="text-[#737373]">
                                        {user.name}
                                    </td>
                                    <td>
                                        <div>
                                            <div className="text-[#737373]">{user.email}</div>
                                        </div>
                                    </td>
                                    <td>
                                   {
                                    user.role === "admin" ? "Admin" : <button onClick={()=>handleMakeAdmin(user)} className="btn bg-[#D1A054]"><FaUsers className="text-white"></FaUsers></button>
                                   }
                                        
                                    </td>
                                    <th>
                                        <button onClick={()=>handleDeleteUser(user)} className="btn bg-red-700"><FaTrashAlt className="text-white"></FaTrashAlt></button>
                                    </th>
                                </tr>
                            )
                            }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;