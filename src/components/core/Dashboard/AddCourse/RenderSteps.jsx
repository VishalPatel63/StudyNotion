import React from 'react'
import { FaCheck } from 'react-icons/fa6';
import { useSelector } from 'react-redux'
import { CourseInformationForm } from './CourseInformation/CourseInformationForm';
import { CourseBuilderForm } from './CourseBuilder/CourseBuilderForm';
import { PublishCourse } from './PublishCourse/PublishCourse';

export default function RenderSteps () {
    const {step} = useSelector((state) => state.course);
    const steps = [
        {
            id:1,
            title:"Course Information",
        },
        {
            id:2,
            title:"Course Builder",
        },
        {
            id:3,
            title:"Publish",
        },
    ]
  return (
   <>
        <div className='lg:relative mb-2 flex w-full lg:justify-center md:justify-center justify-start  lg:ml-0 md:ml-0 ml-3 lg:mr-0 md:mr-0 mr-10  '>
            {
                steps.map((item,index) =>(
                    <>
                    <div key={item.id}
                    className='flex flex-col items-center'
                    >
                         <button
                         className={`grid cursor-pointer aspect-square lg:w-[34px] md:w-[34px] w-[25px] place-items-center lg:gap-8 md:gap-8 gap-4 rounded-full border-[1px] 
                            ${step === item.id
                                ? "border-yellow-50 bg-yellow-900 text-yellow-50"
                                :"border-richblack-700 bg-richblack-800 text-richblack-300"
                            } ${step > item.id && "bg-yellow-50 text-yellow-50"}`}
                         >
                           {
                            step > item.id 
                            ? (<FaCheck className='font-bold text-richblack-900'/>)
                             :(
                                item.id
                             )
                           }
                         </button>
                    </div>
                     
                     {item.id !== steps.length &&(
                        <>
                        <div className= {`h-[calc(34px/2)] w-[33%] border-dashed border-b-2
                            ${step > item.id ? "border-yellow-50" :"border-richblack-500"}`}>
                            
                        </div>
                        </>
                     )}
                    </>
                ))
                   
                    
                    
            }
        </div>

        <div className='relative mb-16 flex w-full select-none justify-between'>
            {
                steps.map((item) =>{
                    return (
                        <>
                        <div key={item.id}
                        className='flex lg:min-w-[130px] md:min-w-[120px] min-w-[110px] flex-col items-center gap-y-2'
                        >
                            <p className= {`lg:text-sm md:text-sm text-[11px] ${step >= item.id ? "text-richblack-5":"text-richblack-500"}`}>
                                {item.title}
                            </p>
                        </div>
                        
                        </>
                    )
                })
            }
        </div>
        <div className=' '>

        {step === 1 && <CourseInformationForm />}
         {step === 2 && <CourseBuilderForm/>}
        {step === 3 && <PublishCourse/>} 
        </div>
    </>
  )
}
