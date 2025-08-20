import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { IoIosDesktop } from 'react-icons/io'
import { RiDashboard2Line } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'
import { SidebarLink } from '../core/Dashboard/SidebarLink'
import { sidebarLinks } from '../../data/dashboard-links'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../services/operations/authAPI'
import { VscSignOut } from 'react-icons/vsc'

export const InstructorModal = ({setConfirmationModalInstr}) => {


  const {user,loading:profileLoading} = useSelector((state) => state.profile);
  const {loading:authLoading} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ConfirmationModals,setConfirmationModal] = useState(null);
 
    return (
        <div className='fixed lg:hidden md:hidden inset-0 z-[100]  grid place-items-start  justify-items-start mt-14 overflow-auto transition-colors duration-700   '>
        <div className='w-5/12 h-80 max-w-[350px] rounded-lg border-richblack-400 bg-richblack-800  bg-opacity-95 p-6 transition-colors duration-700'>
                 {/* <div className='flex justify-end '>
                    
                <button
                onClick={modalData?.btn7Handler}
                className='text-white    '
                >
                 <RxCross2 size={30} /> 
                </button>
                 </div>
                <hr className='text-white opacity-20' />
            <div className='flex flex-col items-center gap-y-7 text-richblack-5 font-bold transition-colors duration-700 mt-3 '>
                
               <div className='ml-2 mr-2 flex flex-col gap-y-3'>

                <button   
                onClick={modalData?.btn3Handler}>
                  <div className='flex justify-center items-center gap-x-[0.6rem]'>
                  <CgProfile  size={25} />
                  {modalData?.btn3Text}
                  </div>
                </button>
                <hr className='text-white opacity-20' />
                <button   
                onClick={modalData?.btn4Handler}>
                   <div className='flex justify-center items-center gap-x-2 '>
                   <RiDashboard2Line size={25}/>
                  {modalData?.btn4Text}
                  </div>
                </button>
                <hr className='text-white opacity-20' />
                <button   
                onClick={modalData?.btn5Handler}>
                  <div className='flex justify-center items-center gap-x-2'>
                  <IoIosDesktop size={25} />
                  {modalData?.btn5Text}
                  </div>
                </button>
                <hr className='text-white opacity-20' />
                <button   
                onClick={modalData?.btn6Handler}>
                  <div className='flex justify-center items-center gap-x-4'>
                  <AiOutlinePlus size={25} />
                  {modalData?.btn6Text}
                  </div>
                </button>
               </div>
            
                </div> */}



<div className=' hidden md:block  flex-col border-r-[1px] border-r-richblack-700
         lg:h-[calc(100vh-3.5rem)]  bg-richblack-800 py-10 md:mr-2'>

          <div className='  flex flex-col  '>
            {
                sidebarLinks.map((link) =>{
                   if(link.type && user?.accountType !== link.type) return null;
                   return (
                    <SidebarLink key={link.id} link={link} iconName ={link.icon}></SidebarLink>
                   )
                    
                })
            }
          </div>
          <div className='mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700'></div>

          <div className='flex flex-col'>
            <SidebarLink 
            link = {{name:"Settings",path:"dashboard/settings"}}
            iconName = "VscSettingsGear"
            />

            <button
            onClick={() => setConfirmationModal({
                text1:"Are Your Sure ?",
                text2:"You will be logged out of your Account",
                btn1Text:"Logout",
                btn2Text:"Cancel",
                btn1Handler:() => dispatch(logout(navigate)),
                btn2Handler:() => setConfirmationModal(null),
            })}

            className=' px-8 py-2 text-sm font-medium text-richblack-300'

            >
              <div className='flex flex-row items-center  gap-x-2'>
              <VscSignOut className='text-lg' />
              <span>Logout</span>
              </div>
            </button>
          </div>
        </div>
        <button onClick={setConfirmationModalInstr(false)}>
          cancel
        </button>
        </div>
    </div>
      )
}
