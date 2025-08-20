import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { IconBnt } from '../../../../common/IconBnt';
import { resetCoursesState, setStep } from '../../../../../slices/courseSlice';
import { COURSE_STATUS } from '../../../../../utils/constants';
import { editCourseDetails } from '../../../../../services/operations/courseDetailsAPIs';
import { useNavigate } from 'react-router-dom';

export const PublishCourse = () => {

    const {register,handleSubmit,setValue,getValues} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {course} = useSelector((state) => state.course);
    const {token} = useSelector((state) => state.auth);
    const [loading,setLoading] = useState(false);

    
    useEffect(() =>{
        if(course?.status === COURSE_STATUS.PUBLISHED){
            setValue("public",true);
        }
    },[]);
    const goBack = ()=>{
       dispatch(setStep(2));
    }

    const goToCourses = () =>{
        dispatch(resetCoursesState());
        navigate("/dashboard/my-courses");
    }
    const handleCoursePublish = async ()=>{
       
        if((course?.status === COURSE_STATUS.PUBLISHED && getValues("public") === true) ||
          (course.status === COURSE_STATUS.DRAFT && getValues("public") === false))
    {
    //   no updation in form
    //  no need to make api call
      goToCourses();
      return;
        }

        // if form updated
        const formData = new FormData();
        formData.append("courseId",course._id);
        const courseStatus = getValues("public") ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT;
        formData.append("status",courseStatus);

        setLoading(true);

        const result = await editCourseDetails(formData,token);
        if(result){
            goToCourses();
        }
        setLoading(false);

    }
    const onSubmit = () =>{
       handleCoursePublish();
    }
  return (
    <div className='rounded-md border-[1px] bg-richblack-800  border-richblack-700 lg:p-6 md:p-6 p-2 lg:mr-0 md:mr-0 mr-2 '>
      <p className='text-2xl font-semibold text-richblack-5'>Publish Course</p>
      <form onSubmit={handleSubmit(onSubmit)}>
       <div className='my-6 mb-6'>
        <label htmlFor="public" className='inline-flex items-center text-lg'>
        <input 
        type="checkbox" 
        id='public'
        {...register("public",{required:true})}
        className='rounded h-4 w-4 border-pure-greys-300 bg-richblack-500 text-richblack-400 focus:ring-2 focus:ring-richblack-5'
        />
        <span className='ml-2 text-richblack-400'>
        Make this Course as Public
        </span>
        </label>
       </div>

       <div className='ml-auto flex max-w-max items-center gap-x-4 '>
        <button
        disabled = {loading}
        type='button'
        onClick={goBack}
        className='flex items-center cursor-pointer gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900'
        >
            Back
        </button>
        <IconBnt disabled={loading} text= "save changes" />
       </div>
      </form>
    </div>
  )
}
