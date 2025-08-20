import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconBnt } from '../../../common/IconBnt';
import { FiUpload } from "react-icons/fi"

import { updateDisplayPicture } from '../../../../services/operations/SettingsAPI';


export const ChangeProfilePicture = () => {
    const {token} = useSelector((state) => state.auth);
    const {user} = useSelector((state) => state.profile);
    const dispatch = useDispatch()

    const [loading,setLoading] = useState(false)
    const [imageFile,setImageFile] = useState(null)
    const [previewSource,setPreviewSource] = useState(null)

    const fileInputRef = useRef(null)

    const handleClick = () =>{
        fileInputRef.current.click()
    }

    const handleFileChange = (e) =>{
        const file = e.target.files[0]
        if(file){
            setImageFile(file)
            previewFile(file)
        }
    }

    const previewFile = (file) =>{
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () =>{
            setPreviewSource(reader.result)
        }
    }

    const handleFileUpload = () =>{
        try {
            console.log("uploading...")
            setLoading(true)
            const formData = new FormData()
            formData.append("displayPicture",imageFile)

            dispatch(updateDisplayPicture(token,formData)).then(()=>{
                setLoading(false)
            })
            
        } catch (error) {
            console.log("ERROR MESSAGE - ", error.message)
        }
    }

    useEffect(() => {
        if (imageFile) {
          previewFile(imageFile)
        }
      }, [imageFile])

  return (
    <div className='flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 px-12  text-richblack-5 lg:p-8 md:p-8 p-2 lg:mr-0 md:mr-0 mr-2'>
     <div className='flex items-center lg:gap-x-2 md:gap-x-2 gap-x-6'>
        <img src={previewSource || user?.image}  alt={`profile-${user?.firstName}`}
        className='aspect-square lg:w-[78px] md:w-[78px] w-[50px] rounded-full object-cover'/>
        <div className='space-y-2'>
            <p>Change Profile Picture</p>
            <div className='flex flex-row lg:gap-3 md:gap-3 gap-3'>
                <input 
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className='hidden'
                accept="image/png, image/gif, image/jpeg"
                 />
                 <button
                 onClick={handleClick}
                 disabled={loading}
                 className='cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50'
                 >
                    Select
                 </button>
                 <IconBnt
                 text={loading ? "Uploading...":"Upload"}
                 onclick={handleFileUpload}
                 customClasses='p-2'
                 >
                    {
                        !loading &&(
                            <FiUpload className='text-lg text-richblack-900'/>
                        )
                    }

                 </IconBnt>
            </div>
        </div>
     </div>
    </div>
  )
}
