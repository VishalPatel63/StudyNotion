import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"
const timeline = [
  {
    Logo:Logo1,
    Heading:"Leadership",
    Description:"Fully committed to the success comapny",
  },
  {
    Logo:Logo2,
    Heading:"Responsibility",
    Description:"Fully committed to the success comapny",
  },
  {
    Logo:Logo3,
    Heading:"Flexibility",
    Description:"Fully committed to the success comapny",
  },
  {
    Logo:Logo4,
    Heading:"Solve the problem",
    Description:"Fully committed to the success comapny",
  },
]
export const TimelineSection = () => {
  return (
    <div>
      <div className='flex lg:flex-row flex-col lg:gap-15 gap-20 items-center'>
        {/* left part */}
       <div className='lg:w-[45%] flex flex-col   lg:gap-5 gap-8'>
       {
        timeline.map((element,index) =>{
          return (
            <div className='flex flex-row gap-6 ' key={index}>
             <div className='w-[50px] h-[50px] bg-white flex  items-center rounded-full realtive'>
             <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
             <img src={element.Logo}   />

              </div>
             </div>

             <div>
              <h2 className='font-semibold text-[18px]'>{element.Heading}</h2>
            <p className='text-base'>{element.Description}</p>
             </div>
            </div>
          )
        })
       }
       </div>

       {/* right part */}

       {/* <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">

        <div>
        <img src={timelineImage} alt="timelineImage"  
        loading='lazy'
        className='shadow-[10px_10px_0px_0px_rgba(255,300,275)]  object-cover h-fit'
        
        />

        <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 
        left-[50%] translate-x-[-50%] translate-y-[-50%]
        '> 
           <div className='flex flex-row gap-5 items-center  border-r border-caribbeangreen-300 px-7'>
             <p className='text-3xl font-bold'>10</p>
            <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
           </div>

           <div className='flex gap-5 items-center px-7'>
           <p className='text-3xl font-bold'>250</p>
           <p className='text-caribbeangreen-300 text-sm'>Type of Courses</p>
            
           </div>
           </div>
        </div>
       </div> */}

<div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
            {/* Section 1 */}
            <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
              <h1 className="text-3xl font-bold w-[75px]">10</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                Years experiences
              </h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold w-[75px]">250</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                types of courses
              </h1>
            </div>
            <div></div>
          </div>
          
          <img
            src={timelineImage}
            alt="timelineImage"
            className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
          />
        </div>

      </div>
    </div>
  )
}
