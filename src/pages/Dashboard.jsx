import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/core/Dashboard/Sidebar';
export const Dashboard = () => {
    const {loading: authLoading} = useSelector((state) =>state.auth);
    const {loading:profileLoading} = useSelector((state) => state.profile);

    if(profileLoading || authLoading){
        return (
            <div className='grid min-h-[calc(100vh-3.5rem)] place-items-center'>
                <div className='spinner'>Loading...</div>
            </div>
        )
    }
  return (
    <div className=' lg:relative md:relative flex min-h-[calc(100vh-3.5rem)]   '>
     

    <Sidebar></Sidebar>
     {/* <div className='    h-[calc(100vh-3.rem)] lg:flex-1 md:flex-1 flex '>
          <div className='lg:mx-auto lg:w-11/12 md:w-11/12 w-[382px] lg:max-w-[1000px] md:max-w-[1000px] max-w-[1200px]   lg:py-10 md:py-10 -p-20  '>
            <Outlet></Outlet>

          </div>
     </div> */}
           <div className="  h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
