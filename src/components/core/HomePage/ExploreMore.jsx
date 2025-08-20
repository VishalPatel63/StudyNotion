import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore"
import { HighlightText } from './HighlightText';
import { CourseCard } from './CourseCard';



const tabsName = [
    
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];
export const ExploreMore = () => {
    const [currentTab,setCurrentTab]  = useState(tabsName[0]);
    const [courses,setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard,setCurrentCard] =  useState(HomePageExplore[0].courses[0].heading);
   
    const setMyCards = (value) =>{
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        console.log("result:", result);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);

    }

  return (
    <div className=' '>
        <div className='text-4xl font-semibold text-center my-10 '>
            Unlock the 
            <HighlightText text = {"Power of Code"}></HighlightText>
        </div>
        <p className='text-center text-richblack-300 text-sm text-[16px] mt-3 tracking-wider '>
        Learn to Build Anything You Can Imagine
        </p>
        <div className="flex   md:gap-5  lg:gap-5  mt-3  mx-auto w-max bg-richblack-800 text-richblack-200 md:p-2 p-1 lg:p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] mb-10 md:mb-10 lg:mb-10">
            {
                tabsName.map((element,index) =>{
                    return (
                        <div
                        className={`lg:text-[16px] text-[10px] flex flex-row flex-wrap items-center lg:gap-2 gap-1
                            ${currentTab === element ?"bg-richblack-900 text-richblack-5 font-medium"
                                :"text-richblack-200" } rounded-full transition-all duration-200 cursor-pointer hover:ring-richblack-900 hover:text-richblack-5 lg:px-7 lg:py-[7px] md:px-6 md:py-6 px-[6px] py-[5px]  `}
                                key={index}

                                onClick={() => setMyCards(element)}
                        >
                           {element}
                        </div>
                    )
                })
            }
        </div>


        <div className='hidden lg:block h-[200px] '></div>
        {/* course card group */}
        <div className="lg:absolute  justify-center lg:gap-x-0 md:gap-x-9 lg:gap-0 flex lg:justify-between flex-wrap lg:w-full md:w-full  lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0  lg:px-0 px-3">
            {
                courses.map((element,index) =>{
                    return (
                        <CourseCard
                        key ={index}
                        cardData = {element}
                        currentCard ={currentCard}
                        setCurrentCard = {setCurrentCard}
                        className = 'mt-10'
                        ></CourseCard>
                    )

                  
                })
            }
        </div>
    </div>
  )
}
