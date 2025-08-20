import React from 'react'
import signupImg from "../assets/Images/signup.webp"
import { Template } from '../components/core/Auth/Template'
export const Signup = () => {
  return (
     <Template
     title="Join the millions learning to code with StudyNotion for free"
     description1="Build skills for today, tomorrow, and beyond."
     description2="Education to future-proof your career."
     image={signupImg}
     formType="signup"
     
     >

     </Template>
  )
}




// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import OtpInput from "react-otp-input";
// import { signUp } from '../services/operations/authAPI';
// import { useNavigate } from 'react-router-dom';
// import { sendOtp } from '../services/operations/authAPI';
// import { Link } from 'react-router-dom';
// import { FaArrowLeftLong } from "react-icons/fa6";



// export const VerifyEmail = () => {
//     const [otp,setOtp] = useState("");
//     const {signupData,loading} = useSelector((state) => state.auth);
//     const dispatch = useDispatch();
//     const navigate  = useNavigate();
       
//     useEffect( ()=>{
//         if(!signupData){
//             navigate("/signup");
//         }
//     }, []);

//     const handleOnSubmit = (e) =>{
//         e.preventDefault();
//         const {
//             accountType,
//             firstName,
//             lastName,
//             email,
//             password,
//             confirmPassword,
           
//         } = signupData;
//         dispatch(signUp(accountType,firstName, lastName, email,  password,confirmPassword, otp, navigate));
//     }
//   return (
//     <div className='text-white'>
//         {
//             loading 
//             ?(<div className='.spinner'>Loading...</div>)
//             :(
//                 <div>
//                     <h1>Verify Email</h1>
//                     <p>A verification code has been sent to you. Enter the code below</p>
//                     <form onSubmit={handleOnSubmit}>
//                         <OtpInput
//                         value={otp}
//                         onChange={setOtp}
//                         numInputs={6}
//                         renderInput={(props) => <input {...props} />}
//                         />
//                         <button type='submit'>
//                             Verify email
//                         </button>
//                     </form>
//                     <div>
//                     <div>
//                     <Link  to={"/login"}>
//                     <FaArrowLeftLong />
//                     <p> Back to Login</p>
//                      </Link>
//                      </div>
//                       <button
//                       onClick={()=> dispatch(sendOtp(signupData.email))}
//                       >
//                         Resend it
//                       </button>
//                     </div>
//                 </div>

//             )
//         }
//     </div>
//   )
// }