import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})

const useAxios = () => {

    const navigate = useNavigate()
    const {logoutUser} = useAuth()

    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        const token = localStorage.getItem('access token')
        // console.log('request stopped by interceptor', token);
        config.headers.authorization= `Bearer ${token}`
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

      //interceptors 401 and 403 status

      axiosSecure.interceptors.response.use(function (response) {
        return response;
      }, async(error)=> {
        
        const status = error.response.status;
        // console.log('status error in the interceptor', status);
        //for 401 and 403 logout the user  and remove the user to the login
        if(status === 401 || status === 403){
            await logoutUser()
            navigate('/login')
        }
        return Promise.reject(error);
      });
    return axiosSecure;
};

export default useAxios;