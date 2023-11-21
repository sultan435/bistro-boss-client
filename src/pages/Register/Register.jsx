import { useForm } from 'react-hook-form';
import login from '../../assets/others/authentication1.png'
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/socialLogin';
const Register = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const {createUser, updateUserProfile}= useContext(AuthContext)
    const {register, handleSubmit, formState: { errors },} = useForm()

    const onSubmit = (data) => {
        // console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            console.log(result.user)
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{

                const userInfo={
                    name: data.name,
                    email: data.email,
                }
                axiosPublic.post('/users', userInfo)
                .then(res=>{
                    if(res.data.insertedId){
                        console.log("user added to the database");
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User Created Successfully",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate('/')
                    }
                })
                
               
            })
        })
    }

    return (
        <>
            <Helmet>
                <title>Bistro | register</title>
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
                        <h1 className="text-5xl font-bold text-center mb-10">Register</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="px-10" >
                            <div className=''>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name", { required: true })} name='name' className="input input-bordered w-full" />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>
                            <div className=''>
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" placeholder="PhotoURL" {...register("photoURL", { required: true })} name='photoURL' className="input input-bordered w-full" />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} name='email' className="input input-bordered w-full" />
                                {errors.email && <span className='text-red-500'>email is required</span>}
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/,
                                }
                                )} placeholder="password" name='password' className="input input-bordered w-full" />
                                {errors.password?.type === 'required' && <span className='text-red-500'>password is required</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-500'>password is less then 6 cherecter</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>password is 20 less then </span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-500'>password is jkshfkj kjdsfkjha</span>}
                                
                            </div>

                            <div className=" mt-6">
                                <input className="btn btn-success py-3 rounded-lg text-white w-full" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='px-10 mt-5 text-center'>Already have account? Please  <Link to="/login" className='text-red-600'>Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Register;