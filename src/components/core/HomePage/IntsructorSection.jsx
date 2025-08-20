import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import { HighlightText } from './HighlightText'
import CTAButton from "../HomePage/Button"
import { FaArrowRight } from 'react-icons/fa6'
export const IntsructorSection = () => {
  // return (
  //   <div className='mt-16'>
  //       <div className='flex flex-row gap-20 items-center'>
  //       <div className='w-[50%] '>
  //          <img src= {Instructor} alt="Instructor"
  //          className='shadow-[-10px_-10px_0px_0px_rgba(255,300,275)]'
  //          />
  //       </div>

  //       <div className='w-[50%] flex flex-col gap-10'>
  //       <div className='text-4xl font-semibold w-[50%]'>
  //           Become an 
  //           <HighlightText text = {"Instructor"}></HighlightText>
  //       </div>

  //       <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
  //       Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
  //       </p>

  //      <div className='w-fit'>

  //       <CTAButton active={true} linkto={"/signup"}>
  //        <div className='flex flex-row gap-2 items-center'>
  //          Start Learning Today 
  //          <FaArrowRight></FaArrowRight>
  //        </div>
  //       </CTAButton>
  //      </div>
  //       </div>
  //       </div>
  //   </div>
  // )

  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-[50%] lg:mt-20 mt-5">
            <img
              src={Instructor}
              alt=""
              className="lg:shadow-white lg:shadow-[-20px_-20px_0_0]"
            />
          </div>
          <div className="lg:w-[50%] flex gap-10 flex-col">
            <h1 className="lg:w-[50%] text-4xl font-semibold ">
              Become an
              <br></br>
              <HighlightText text={"instructor"} />
            </h1>

            <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
              Instructors from around the world teach millions of students on
              StudyNotion. We provide the tools and skills to teach what you
              love.
            </p>

            <div className="w-fit ">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Start Teaching Today
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
       

        </div>
    </div>
  )
}
