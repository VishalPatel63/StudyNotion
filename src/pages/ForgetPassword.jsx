import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { getPasswordResetToken } from '../services/operations/authAPI';
export const ForgetPassword = () => {

    const [emailSent, setEmailSent] = useState(false);  // ye batayega email send hui ya nhi
    const [email, setEmail] = useState("");
    const { loading } = useSelector((state) => state.auth);
    const disptach = useDispatch();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        disptach(getPasswordResetToken(email, setEmailSent));
    }
    return (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center  lg:mr-0 md:mr-0 lg:ml-0 md:ml-0 ml-3 mr-3">
            {
                loading ? (
                    <div className='.spinner'>Loading...</div>
                ) : (
                    // yaha pr check email ka page ya reset password ka page dikhana hai  emailSent,setEmailSent isase pata karenge if email sent ho gai hogi to email nhi to reset password 
                    <div className="max-w-[500px] p-4 lg:p-8">
                        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
                            {
                                !emailSent ? "Reset You Password" : "Check Your Email"
                            }
                        </h1>
                        <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
                            {
                                !emailSent
                                    ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                                    : `We have sent the reset email to ${email}`
                            }
                        </p>
                        <form onSubmit={handleOnSubmit} className='mt-9' >
                            {
                                !emailSent && (
                                    <label className='w-full '>
                                        <p className="-mb-4 text-[0.875rem] leading-[1.375rem] text-richblack-5">Email Address<sup className='text-pink-200'>*</sup></p>
                                        <input
                                            required
                                            type='email'
                                            name='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder='Enter Your Email Address'
                                            style={{
                                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                            }}
                                            className=" w-full py-[12px] px-[12px] rounded-[8px] mt-6 
                                      font-medium bg-richblack-800 outline-none text-richblack-5"
                                        />
                                    </label>
                                )
                            }

                            <button type='submit'
                                className="mt-8 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
                            >
                                {
                                    !emailSent ? "Reset Password" : "Reset Email"
                                }
                            </button >

                        </form>
                        <div className="mt-6 flex items-center justify-between">
                            <Link to={"/login"}>
                              
                                <p  className="flex items-center gap-x-2 text-richblack-5">
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
