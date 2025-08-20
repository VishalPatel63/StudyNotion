
import React from 'react'
import { FiTrash2 } from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteProfile } from '../../../../services/operations/SettingsAPI'

export const DeleteAccount = () => {
    const {token} = useSelector((state) =>state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    async function handleDeleteAccount(){
        try {
            dispatch(deleteProfile(token,navigate))
        } catch (error) {
            console.log("error message:-",error.message)
        }
    }

  return (
    <div className='my-10 flex flex-row gap-x-5 rounded-md border-[1px] border-pink-700 bg-pink-900   lg:px-12 md:px-12 px-1 lg:p-8 md:p-8 p-2 lg:mr-0 md:mr-0 mr-2'>
        <div className='flex aspect-square lg:h-14 md:h-14   lg:w-15 md:w-14 h-14 w-25   items-center justify-center lg:rounded-full md:rounded-full rounded-full bg-pink-700'>
        <button
              type="button"
              className="w-fit cursor-pointer italic text-pink-300 font-bold"
              onClick={handleDeleteAccount}
            >
           
        <FiTrash2 className="text-3xl text-pink-200 lg:h-[30px] md:h-[30px] lg:w-[30px] md:w-[30px] h-[30px] w-[30px]" />
            </button>
        </div>
        <div className='flex flex-col lg:space-y-2 md:space-y-2 space-y-3'>
            <h2 className='text-lg font-semibold text-richblack-5'>
            Delete Account
            </h2>
            <div className='lg:w-3/5 md:w-3/5 w-6/5 text-pink-25 lg:space-y-1 md:space-y-1 space-y-2'>
                <p>
                Would you like to delete account? 
                </p>
                <p className=''>
                This account may contain Paid Courses. Deleting your account is
                permanent and will remove all the contain associated with it.
                </p>
            </div>
            <p className="w-fit cursor-pointer italic text-pink-300 font-bold">
            I want to delete my account.
            </p>


        </div>
    </div>
  )
}
