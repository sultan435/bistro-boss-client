import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";
// import axios from "axios";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const {user} = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxios()
    const [,refetch] = useCart()

    const handleAddCart= (food) =>{
        console.log(food, user.email);
        if(user && user.email){
            //send the user to the login page
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            // axios.post('http://localhost:5000/carts',cartItem)
            axiosSecure.post('/carts',cartItem)
            .then(res =>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title:`${name} added to your order cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/login")
                }
              });
        }
    }
    return (
        <div className="bg-[#F3F3F3] shadow-lg rounded-lg relative">
            <img className="w-full h-[300px] rounded-lg object-cover" src={image} alt="" />
            <p className="bg-slate-800 text-white absolute right-5 top-5 p-2 rounded-lg">${price}</p>
            <div className="py-8 px-10 flex flex-col justify-center text-center">
                <h3 className="text-2xl font-semibold text-[#151515]">{name}</h3>
                <p>{recipe}</p>
                <button 
                onClick={()=>handleAddCart(item)}
                className="btn btn-outline mt-12 border-0  border-b-4 border-[#BB8506] text-[#BB8506] font-medium">Add to Cart</button>
            </div>
        </div>
    );
};

export default FoodCard;