import useAuth from "../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleUser } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogle = () => {
        googleUser()
            .then(result=> {
                console.log(result.user,'google sign in successfully');
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName
                }
                axiosPublic.post('/users', userInfo)
                .then(res=>{
                    console.log(res.data);
                    navigate("/")
                })
            })
    }
    return (
        <button onClick={handleGoogle} className="btn w-full mt-6">
            <FaGoogle />
            with Google
        </button>
    );
}
export default SocialLogin;