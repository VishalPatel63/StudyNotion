import ProgressBar from '@ramonak/react-progress-bar';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserEnrolledCourses } from '../../../services/operations/profileAPI';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const EnrolledCourses = () => {
    const {token} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [enrolledCourses,setEnrolledCourses] = useState(null);
         useEffect(()=>{

           const getEnrolledCourses = async() =>{
               try {
               
                   const response = await getUserEnrolledCourses(token);
                   const filterPublishCourse = response.filter((ele) => ele.status !== "Draft")
                   setEnrolledCourses(filterPublishCourse);
               } catch (error) {
                   console.log("Unable to Fetch Enrolled Courses");
               }
           };
           getEnrolledCourses();
         },[])
  
return (
    <>
         <div className='mt-12 md:mt-10 lg:mt-10 w-full px-4'>
      <div className='text-2xl md:text-3xl lg:text-3xl text-richblack-50 text-center md:text-left'>Enrolled Courses</div>
      {!enrolledCourses ? (
        <div className='grid min-h-[calc(100vh-3.5rem)] place-items-center'>
          <div className='spinner'></div>
        </div>
      ) : !enrolledCourses.length ? (
        <p className='grid h-[10vh] w-full place-content-center text-richblack-5 text-center'>
          You have not enrolled in any course yet.
        </p>
      ) : (
        <div className='my-8 w-full text-richblack-5 overflow-x-auto'>
          {/* Headings */}
          <div className='flex min-w-[600px] md:min-w-full rounded-t-lg bg-richblack-500'>
            <p className='w-[50%] md:w-[45%] px-5 py-3'>Course Name</p>
            <p className='w-1/2 md:w-1/4 px-5 py-3'>Duration</p>
            <p className='flex-1 px-5 py-3'>Progress</p>
          </div>
          {/* Course Names */}
          {enrolledCourses.map((course, i, arr) => (
            <div
              className={`flex items-center min-w-[600px] md:min-w-full border border-richblack-700 ${
                i === arr.length - 1 ? 'rounded-b-lg' : 'rounded-none'
              }`}
              key={i}
            >
              <div
                className='flex w-[50%] md:w-[45%] cursor-pointer items-center gap-3 md:gap-4 px-2 md:px-5 py-3'
                onClick={() => {
                  navigate(
                    `/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSection?.[0]?._id}`
                  )
                }}
              >
                <img
                  src={course.thumbnail}
                  alt='course_img'
                  className='h-12 w-12 md:h-14 md:w-14 rounded-lg object-cover'
                />
                <div className='flex max-w-xs flex-col gap-2'>
                  <p className='font-light md:font-semibold'>{course.courseName}</p>
                  <p className='text-xs text-richblack-25 md:text-richblack-300'>
                    {course.courseDescription.length > 20
                      ? `${course.courseDescription.slice(0, 20)}...`
                      : course.courseDescription}
                  </p>
                </div>
              </div>
              <div className='w-1/2 md:w-1/4 px-2 py-3'>{course?.totalDuration}</div>
              <div className='flex w-1/5 flex-col gap-2 px-2 py-3'>
                <p>Progress: {course.progressPercentage || 0}%</p>
                <ProgressBar
                  completed={course.progressPercentage || 0}
                  height='8px'
                  isLabelVisible={false}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  )
}
