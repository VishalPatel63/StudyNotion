
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { IconBnt } from '../../../common/IconBnt';
import { updateProfile } from '../../../../services/operations/SettingsAPI';

const gender = ["Male","Female","No-Binary","Prefer-not to say","Other"]
export const EditProfile = () => {
    const {user} = useSelector((state) => state.profile);
    const {token} = useSelector((state) => state.auth);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm();


    const submitProfileForm = async (data) =>{
        try {
            dispatch(updateProfile(token,data));
        } catch (error) {
            console.log("Error message",error.message);
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitProfileForm)}>
            {/* profile Infromation */}
            <div className='my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800  px-12 lg:p-8 md:p-8 p-2 lg:mr-0 md:mr-0 mr-2'>
                <h2 className='text-lg font-semibold text-richblack-5'>
                    Profile Information
                </h2>
                <div className='flex flex-col gap-5 lg:flex-row'>
                    {/* firstName */}
                    <div className='flex flex-col gap-2 lg:w-[48%]'>
                        <label htmlFor="firstName" className='lable-style'>
                            First Name
                        </label>
                        <input
                         type="text"
                         name='firstName'
                         id='firstName'
                         placeholder='Enter first name'
                         className='form-style' 
                         {...register("firstName",{required:true})}
                         defaultValue={user?.firstName}
                        />
                        {
                            errors.firstName && (
                                <span className='-mt-1 text-[12px] text-yellow-100'>
                                    Please Enter your First Name.
                                </span>
                            )
                        }
                    </div>

                    {/* lastname */}
                    <div className="flex flex-col gap-2 lg:w-[48%]">
                        <label htmlFor="lastName" className='lable-style'>
                            Last Name
                        </label>
                        <input
                         type="text"
                         name='lastName'
                         id='lastName'
                         placeholder='Enter last name'
                         className='form-style' 
                         {...register("lastName",{required:true})}
                         defaultValue={user?.lastName}
                        />
                        {
                            errors.lastName && (
                                <span className='-mt-1 text-[12px] text-yellow-100'>
                                    Please Enter your First Name.
                                </span>
                            )
                        }
                    </div>
                </div>
                {/* ______________ */}

                <div className='flex flex-col gap-5 lg:flex-row'>
                    {/* date of birth */}
                    <div className="flex flex-col gap-2 lg:w-[48%]">
                        <label htmlFor="dateOfBirth" className='lable-style'>
                            Date of Birth
                        </label>
                        <input
                         type="date"
                         name='dateOfBirth'
                         id='dateOfBirth'
                         placeholder='Enter date of birth'
                         className='form-style' 
                         {...register("dateOfBirth",
                            {required:{
                                value:true,
                                message:"Please enter your Date of Birth"
                            },
                           max:{
                               value: new Date().toISOString().split("T")[0],
                               message:"Date of Birth cannot be in the future.",
                            },
                        })}
                         defaultValue={user?.additionalDetails?.dateOfBirth}
                        />
                        {
                            errors.dateOfBirth && (
                                <span className='-mt-1 text-[12px] text-yellow-100'>
                                    {errors.dateOfBirth.message}
                                </span>
                            )
                        }
                    </div>

                    {/* gender */}
                    <div className="flex flex-col gap-2 lg:w-[48%]">
                        <label htmlFor="gender" className='lable-style'>
                            Gender
                        </label>
                        <select
                         type="text"
                         name='gender'
                         id='gender'
                         placeholder='Enter gender'
                         className='form-style' 
                         {...register("gender",{required:true})}
                         defaultValue={user?.additionalDetails?.gender}
                        >
                            {
                                gender.map((element,index) =>{
                                    return (
                                        <option key={index} value={element}>
                                           {element}
                                        </option>
                                    )
                                })
                            }

                        </select>
                        {
                            errors.firstName && (
                                <span className='-mt-1 text-[12px] text-yellow-100'>
                                    Please Enter your gender Name.
                                </span>
                            )
                        }
                    </div>
                </div>
                {/* ________________ */}

                <div className="flex flex-col gap-5 lg:flex-row">
                {/* phone number */}
                <div className="flex flex-col gap-2 lg:w-[48%]">
                        <label htmlFor="conatctNumber" className='lable-style'>
                            Contact Number
                        </label>
                        <input
                         type="tel"
                         name=''
                         id='conatctNumber'
                         placeholder='Enter contact Number'
                         className='form-style' 
                         {...register("conatctNumber",
                            {
                                required:{
                                    value:true,
                                    message:"Please Enter your Contact Number"
                                },
                                maxLength: { value: 12, message: "Invalid Contact Number" },
                                minLength: { value: 10, message: "Invalid Contact Number" },

                            })}
                         defaultValue={user?.additionalDetails?.contactNumber}
                        />
                        {
                            errors.contactNumber && (
                                <span className='-mt-1 text-[12px] text-yellow-100'>
                                  {errors.contactNumber.message}
                                </span>
                            )
                        }
                    </div>

                    {/* About */}
                    <div className="flex flex-col gap-2 lg:w-[48%]">
                        <label htmlFor="about" className='lable-style'>
                            About
                        </label>
                        <input
                         type="text"
                         name='about'
                         id='about'
                         placeholder='Enter Bio Details'
                         className='form-style' 
                         {...register("about",{required:true})}
                         defaultValue={user?.additionalDetails?.about}
                        />
                        {
                            errors.about && (
                                <span className='-mt-1 text-[12px] text-yellow-100'>
                                    Please Enter your About.
                                </span>
                            )
                        }
                    </div>
                </div>
                {/* _________________ */}

                <div className='flex justify-between'>
                    <button 
                    onClick={() =>{
                        navigate("/dashboard/my-profile")
                    }}
                    className='cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50 mb-3'
                    >
                        Cancel
                    </button>
                    <IconBnt type="submit " text="Save"  customClasses={'px-4  '}  /> 
                </div>
            </div>
        </form>
    </div>
  )
}
