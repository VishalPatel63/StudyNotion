import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Thead,Tr,Th, Tbody,Td } from 'react-super-responsive-table';
import { COURSE_STATUS } from '../../../../utils/constants';
import { IoTimerOutline } from 'react-icons/io5';
import { MdOutlineCheckCircleOutline, MdOutlineModeEditOutline } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ConfirmationModal } from '../../../common/ConfirmationModal';
import { deleteCourse, fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPIs';
import { setCourse } from '../../../../slices/courseSlice';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../../services/formatDate';


export const CoursesTable = ({courses,setCourses}) => {
    const dispatch = useDispatch();
    const naviaget = useNavigate();
    const {token} = useSelector((state) => state.auth);
    const [loading,setLoading] = useState(false);
    const [confirmationModal,setConfirmationModal] = useState(null);

    const handleCourseDelete = async(courseId)=>{
     setLoading(true);
     await deleteCourse({courseId:courseId},token);
     const result = await fetchInstructorCourses(token);
     if(result){
        setCourses(result);
     }
     setConfirmationModal(null);
     setLoading(false);
    }
  return (
    <div className='lg:p-0 md:p-0 p-0 lg:mr-0 md:mr-0 mr-0'>
    <Table className='rounded-xl border border-richblack-800'>
        <Thead>
             <Tr className='flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2 '>
                <Th className='flex-1 text-left text-sm font-medium uppercase text-richblack-100'>
                  Courses
                </Th>
                <Th className=' text-left text-sm font-medium uppercase text-richblack-100'>
                  Duration
                </Th>
                <Th className='text-left text-sm font-medium uppercase text-richblack-100'>
                  Price
                </Th>
                <Th className=' text-left text-sm font-medium uppercase text-richblack-100'>
                  Actions
                </Th>
             </Tr>
        </Thead>
        <Tbody>
            {
                courses.length === 0 ?(
                    <Tr>
                        <Td className='py-10 text-center text-2xl font-medium text-richblack-100'>
                            No Courses Found
                        </Td>
                    </Tr>
                )
                :(
                    courses?.map((course) =>(
                        <Tr key={course._id} className='flex gap-x-10 border-b border-b-richblack-800 px-6 py-8 '>
                            <Td className='flex flex-1 gap-x-4'>
                           <img src= {course?.thumbnail} alt=""
                            className='lg:h-[148px] lg:w-[220px] md:h-[148px] md:w-[220px] h-[140px] w-[240px] rounded-lg object-cover'
                           />

                           <div className='flex flex-col justify-between'>
                           <p className='text-lg font-semibold text-richblack-5'>
                            {course.courseName}
                           </p>
                           <p className='text-xs text-richblack-300'>
                            {course.courseDescription}
                           </p>
                           <p className='text-[12px] text-white'>
                            Created:{formatDate(course.createdAt)}
                            {/* Created: */}
                           </p>
                           {
                            course.status === COURSE_STATUS.DRAFT ?(
                              <p className='text-pink-100 flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium '> 
                                                              <div className='flex h-3 w-3 items-center justify-center rounded-full bg-pink-100 text-richblack-700'>
                              <IoTimerOutline size={14} />
                              </div>
                              DRAFTED
                              </p>
                            )
                            :(
                                <p className='text-yellow-100 flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium '> 
                                <div className='flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700'>
                                     <MdOutlineCheckCircleOutline size={17}/>
                                </div>
                                     PUBLISHED
                                </p>
                            )
                           }
                           </div>
                            </Td>
                            <Td className='text-sm font-semibold text-richblack-100'>
                                {/* 2hr 30min */}
                                {course?.totalDuration}
                            </Td>
                            <Td className='text-sm font-semibold text-richblack-100'>
                                ${course.price}
                            </Td>
                            <Td className='text-sm font-semibold text-richblack-100'>
                                <button
                                disabled={loading}
                                className='px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300'
                                onClick={()=>{
                                    naviaget(`/dashboard/edit-course/${course._id}`)
                                }}
                                title='Edit'
                               
                                >
                             <MdOutlineModeEditOutline size={20} />
                                </button>
                                <button
                                disabled = {loading}
                                onClick={()=>{
                                    setConfirmationModal({
                                        text1: "Do you want to delete this course?",
                                        text2:"All the data related to this course will be deleted",
                                        btn1Text:"Delete",
                                        btn2Text:"Cancel",
                                        btn1Handler: !loading ? ()=>handleCourseDelete(course._id) :()=>{},
                                        btn2Handler: !loading ? ()=> setConfirmationModal(null):()=>{},

                                    })
                                }}
                                title='Delete'
                                className='px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]'
                                >
                                <RiDeleteBin6Line size={20} />
                                </button>
                            </Td>
                        </Tr>
                    ))
                )
            }
        </Tbody>
    </Table>
    {confirmationModal && <ConfirmationModal modalData={confirmationModal}/> }
    </div>
  )
}


// home work select button checkbox  delete 
