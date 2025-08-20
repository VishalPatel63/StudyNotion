
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconBnt } from '../../../common/IconBnt'
import { buyCourse } from '../../../../services/operations/studentFeaturesApI';
import { useNavigate } from 'react-router-dom';

export const RenderTotalAmount = () => {
    const {total,cart} = useSelector((state) =>state.cart);
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBuyCourse =() =>{
      const courses = cart.map((course) => course._id)
      // todo
      buyCourse(token, courses, user, navigate, dispatch)
    }
  return (
    <div className='lg:min-w-[280px] md:min-w-[280px] min-w-[200px] rounded-md border-[1px] border-richblack-700 bg-richblack-800 lg:p-6 md:p-6 p-4'>
        <p className='mb-1 text-sm font-medium text-richblack-300'>Total:</p>
        <p className='mb-6 text-3xl font-medium text-yellow-100'>Rs. {total}</p>
        <IconBnt
         text="Buy Now"
         onclick={handleBuyCourse}
          customClasses= "w-full justify-center"
        />
    </div>
  )
}
