import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IconBnt } from '../../common/IconBnt';
import { IoIosArrowBack } from 'react-icons/io';
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { VideoModal } from '../../common/VideoModal';
import { VideoDetails } from './VideoDetails';

export const VideoDetailsSidebar = ({setReviewModal}) => {
    const [activeStatus,setActiveStatus] =  useState("");
    const [videobarActive,setVideobarActive] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const {sectionId,subSectionId} = useParams();
    const value = false;


    const setThvale = (value) =>{
      if(value === false){
         setModal(true);
      }
      else if(value === true){
      setModal(false);
      }
   }

    const [modal,setModal] = useState(value);

    const {
        courseSectionData,
        courseEntireData,
        totalNoOfLectures,
        completedLectures,

    } = useSelector((state) => state.viewCourse);

    useEffect(() =>{
         const setActiveFlags = () =>{
          if(!courseSectionData.length) return;
         

          const currentSectionIndex = courseSectionData.findIndex(
            (data) => data._id === sectionId
          )

         const currentSubSectionIndex = courseSectionData?.[currentSectionIndex]?.subSection.findIndex(
            (data) => data._id === subSectionId
         )

         const activeSubSectionId = courseSectionData[currentSectionIndex]?.subSection?.[currentSubSectionIndex]?._id;
        //  set current section here
         setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
        //  set current sub-section here
         setVideobarActive(activeSubSectionId);
         }
         setActiveFlags();
    },[courseSectionData,courseEntireData,location.pathname])

   

  return (
      <>
      <div className='relative'>
      <div className='h-4 w-2 '>

     <button
      className='lg:hidden md:hidden ml-1 w-4 '
       onClick={() => setThvale(value)

         
          }
      >
         <AiOutlineMenu fontSize={30} fill="#AFB2BF"/>
      </button> 
      {modal && <VideoModal setModal={setModal}  setReviewModal={setReviewModal} ></VideoModal>}
      </div>

<div className='hidden md:block'>
<div className="  flex h-[calc(100vh-3.5rem)] lg:w-[320px] md:w-[280px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
          <div className="flex w-full items-center justify-between ">
            <div
              onClick={() => {
                navigate(`/dashboard/enrolled-courses`)
              }}
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
              title="back"
            >
              <IoIosArrowBack size={30} />
            </div>
            <IconBnt
              text="Add Review"
              customClasses="ml-auto"
              onclick={() => setReviewModal(true)}
            />
          </div>
          <div className="flex flex-col">
            <p>{courseEntireData?.courseName}</p>
            <p className="text-sm font-semibold text-richblack-500">
              {completedLectures?.length} / {totalNoOfLectures}
            </p>
          </div>
        </div>
 
        
        <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
          {courseSectionData.map((course, index) => (
            <div
              className="mt-2 cursor-pointer text-sm text-richblack-5"
              onClick={() => setActiveStatus(course?._id)}
              key={index}
            >
              {/* Section */}
              <div className="flex flex-row justify-between bg-richblack-600 px-5 py-4">
                <div className="w-[70%] font-semibold">
                  {course?.sectionName}
                </div>
                <div className="flex items-center gap-3">
                  {/* <span className="text-[12px] font-medium">
                    Lession {course?.subSection.length}
                  </span> */}
                  <span
                    className={`${
                      activeStatus === course?.sectionName
                        ? "rotate-180"
                        : "rotate-0"
                    } transition-all duration-500`}
                  >
                    <BsChevronDown />
                  </span>
                </div>
              </div>

              {/* Sub Sections */}
              {activeStatus === course?._id && (
                <div className="transition-[height] duration-500 ease-in-out">
                  {course.subSection.map((topic, i) => (
                    <div
                      className={`flex gap-3  px-5 py-2 ${
                        videobarActive === topic._id
                          ? "bg-yellow-200 font-semibold text-richblack-800"
                          : "hover:bg-richblack-900"
                      } `}
                      key={i}
                      onClick={() => {
                        navigate(
                          `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
                        )
                        setVideobarActive(topic._id)
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={completedLectures.includes(topic?._id)}
                        onChange={() => {}}
                      />
                      {topic.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

     
     </div>
      </div>
     
     

      </>
  )
}

