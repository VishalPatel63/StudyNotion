import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchInstructorCourses } from '../../../services/operations/courseDetailsAPIs';
import { IconBnt } from '../../common/IconBnt';
import { FaPlus } from 'react-icons/fa';
import { CoursesTable } from './InstructorCourses/CoursesTable';

export const MyCourses = () => {
    const {token} = useSelector((state)=> state.auth);
    const navigate = useNavigate();
    const [courses,setCourses] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
      const fetchCourses = async() =>{
        setLoading(true);
        const result = await fetchInstructorCourses(token);

     
        if(result){
            setCourses(result);
        }

        setLoading(false);
      }

      fetchCourses();
    },[])
  return (
    <div className='lg:mt-10 md:mt-10 mt-12'>
      <div className=' mb-14  flex justify-between  items-center lg:gap-x-0 md:gap-x-0 gap-x-7 '>
        <h1 className='lg:text-3xl md:text-3xl text-2xl font-medium text-richblack-5'>My Courses</h1>
        <IconBnt text= "Add Course" onclick={()=> navigate("/dashboard/add-course")}
          customClasses= "lg:p-3 md:p-3 p-0 lg:mr-0 md:mr-0 mr-13"
          >
        <FaPlus />
        </IconBnt>
      </div>
      {
        courses && <CoursesTable courses = {courses} setCourses ={setCourses}/>
      }
    </div>
  )
}
