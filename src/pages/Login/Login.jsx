import { useContext, useEffect, useState } from 'react';
import login from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'
import SocialLogin from '../../components/socialLogin';


const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const {loginUser} = useContext(AuthContext)

   const navigate = useNavigate()
    const location = useLocation()

    const  from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
        .then(result =>{
            console.log('login hoice',result.user)
            Swal.fire({
                title: "login successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              navigate(from,{replace: true})
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }

    const handleValidCaptcha = (e) => {
        e.preventDefault()
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro | login</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className=" min-h-screen bg-white p-5">
                <div className="flex bg-white-400 shadow-2xl">
                    <div className="flex items-center text-center lg:text-left flex-1">

                        <div className=''>
                            <img className=' h-full mx-auto' src={login} alt="" />
                        </div>
                    </div>
                    <div className="w-full  flex-1 m-10">
                        <h1 className="text-5xl font-bold text-center mb-10">Login now!</h1>
                        <form className="px-10" onSubmit={handleLogin}>
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered w-full" />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered w-full" />
                            </div>
                            <div className='my-2'>
                                <label className=''>
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidCaptcha} type="text" placeholder="type the text above" name='captcha' className="input input-bordered w-full" />
                                
                            </div>
                            <div className=" mt-6">
                                <input disabled={disabled} className="btn btn-success py-3 rounded-lg text-white w-full" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='px-10 mt-5 text-center'>Do not have account? Please  <Link to="/register" className='text-red-600'>Register</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;