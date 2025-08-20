import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { resetPassword } from '../services/operations/authAPI';
export const UpdatePassword = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation();
    const { loading } = useSelector((state) => state.auth)
    const [formData, setFormData] = useState(
        {
            password: "",
            confirmPassword: ""
        }
    )
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { password, confirmPassword } = formData;
    const handleOnchange = (e) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value,
            }
        ));
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password, confirmPassword, token, navigate))
    }
    return (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center lg:mr-0 md:mr-0 lg:ml-0 md:ml-0 ml-3 mr-3">
            {
                loading ? (
                    <div className='spinner'>Loading...</div>
                ) : (
                    <div className="max-w-[500px] p-4 lg:p-8" >
                        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">Choose  new password</h1>
                        <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
                            Almost done. Enter your new password and youre all set.
                        </p>
                        <form onSubmit={handleOnSubmit}>
                            <label className='relative' >
                                <p className="-mb-4 text-[0.875rem] leading-[1.375rem] text-richblack-5">New Password<sup className='text-pink-200'>*</sup></p>
                                <input
                                    required
                                    type={showPassword ? "text" : "password"}
                                    name='password'
                                    value={password}
                                    onChange={handleOnchange}
                                    placeholder='Enter Password'
                                    style={{
                                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                    }}
                                    className="  w-full py-[12px] px-[12px] rounded-[8px] mt-6 
                         font-medium bg-richblack-800 outline-none text-richblack-5"
                                />
                                <span
                                    onClick={() => setShowPassword((prev) => !prev)}

                                    className="absolute right-3 top-[39px] z-[10] cursor-pointer"
                                >
                                    {
                                        showPassword ? <AiFillEye fontSize={24} fill="#AFB2BF" /> : <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />
                                    }
                                </span>
                            </label>
                               <div className='h-[20px]'></div>
                            <label className='relative  '>
                                <p className="-mb-4 text-[0.875rem] leading-[1.375rem] text-richblack-5" >Confirm new Password<sup className='text-pink-200'>*</sup></p>
                                <input
                                    required
                                    type={showConfirmPassword ? "text" : "password"}
                                    name='confirmPassword'
                                    value={confirmPassword}
                                    onChange={handleOnchange}
                                    placeholder='Enter Confirm Password'
                                    style={{
                                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                    }}
                                    className=" w-full py-[12px] px-[12px] rounded-[8px] mt-6 
                        font-medium bg-richblack-800 outline-none text-richblack-5"
                                />
                                <span
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                    className='absolute right-3 top-[39px] z-[10] cursor-pointer'
                                >
                                    {
                                        showConfirmPassword ? <AiFillEye fontSize={24} fill="#AFB2BF" /> : <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />
                                    }
                                </span>
                            </label>

                            <button type='submit'
                                className="mt-8 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
                            >
                                Reset Password
                            </button >
                        </form>

                        <div className="mt-6 flex items-center justify-between">
                            <Link to={"/login"}>

                                <p className="flex items-center gap-x-2 text-richblack-5">
                                    <FaArrowLeftLong /> Back to login
                                </p>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
