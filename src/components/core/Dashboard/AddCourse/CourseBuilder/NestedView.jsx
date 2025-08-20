
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxDropdownMenu } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';
import { SubSectionModals } from './SubSectionModals';
import { ConfirmationModal } from '../../../../common/ConfirmationModal';
import { deleteSection, deleteSubSection } from '../../../../../services/operations/courseDetailsAPIs';
import { setCourse } from '../../../../../slices/courseSlice';
import { BiDownArrow } from 'react-icons/bi';

export const NestedView = ({ handleChangeEditSectionName }) => {
    const { course } = useSelector((state) => state.course);
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [addSubSection, setAddSubSection] = useState(null);
    const [viewSubSection, setViewSubSection] = useState(null);
    const [editSubSection, setEditSubSection] = useState(null);

    const [confirmationModal, setConfirmationModal] = useState(null);
    



    const handleDeleteSection = async(sectionId) => {
        const result = await deleteSection({
             sectionId,
             courseId: course._id,
             
            },token);
           
           
        if(result){
            dispatch(setCourse(result))
        }
        setConfirmationModal(null);
    }

    const handleDeleteSubSection = async (subSectionId,sectionId) =>{
       const result =  await  deleteSubSection({
        subSectionId,sectionId,token,
       })
       if(result){
        //  extra kya kr sakte hai yaha pr
        const updatedCourseContent = course.courseContent.map((section) =>
        section._id === sectionId ? result : section
        );
        const updatedCourse = {...course, courseContent : updatedCourseContent};
        dispatch(setCourse(updatedCourse));
       }
       setConfirmationModal(null)
    }
    return (
        <div>
            <div className='rounded-lg bg-richblack-700 p-6 px-8' 
            id='nestedViewContainer'
            >
                {course?.courseContent?.map((section) => (
                    <details key={section._id} open>
                        <summary className='flex items-center cursor-pointer justify-between border-b-2 border-b-richblack-600 py-2'>
                            <div className='flex items-center gap-x-3'>
                                <RxDropdownMenu  className='text-2xl text-richblack-50'/>
                                <p className='font-semibold text-richblack-50'>{section.sectionName}</p>
                            </div>
                            <div className='flex items-center gap-x-3'>
                                <button
                                    onClick={() => handleChangeEditSectionName(section._id, section.sectionName)}
                                >
                                    <CiEdit className='text-xl text-richblack-300' />
                                </button>
                                <button
                                    onClick={() => {
                                        setConfirmationModal({
                                            text1: "Delete this Section?",
                                            text2: "All the lecture in this section will be deleted",
                                            btn1Text: "Delete",
                                            btn2Text: "Cancel",
                                            btn1Handler: () => handleDeleteSection(section._id),
                                            btn2Handler: () => setConfirmationModal(null),

                                        })
                                    }}
                                >
                                    <RiDeleteBin6Line className='text-xl text-richblack-300' />
                                </button>
                                <span className='font-medium text-richblack-300'>|</span>
                                <BiDownArrow className={`text-xl text-richblack-300`} />
                            </div>
                        </summary>

                        <div className='px-6 pb-4'>
                            {
                                section.subSection.map((data) => {
                                    return (
                                        <div key={data?._id}
                                            onClick={() => setViewSubSection(data)}
                                            className='flex items-center cursor-pointer justify-between gap-x-3 border-b-2 border-b-richblack-600 py-2'
                                        >
                                            <div className='flex items-center gap-x-3 py-2'>
                                                <RxDropdownMenu className='text-2xl text-richblack-50' />
                                                <p className='font-semibold text-richblack-50'>{data.title}</p>
                                            </div>
                                            <div className='flex items-center gap-x-3 '
                                            onClick={(e) => e.stopPropagation()}
                                            >
                                               <button
                                               onClick={() => setEditSubSection({...data,sectionId: section._id})}
                                               >
                                               <CiEdit className='text-xl text-richblack-300' />
                                               </button>
                                               <button
                                                  onClick={() => {
                                                  setConfirmationModal({
                                                   text1: "Delete this SubSection",
                                                   text2: "All the lecture in this Subsection will be deleted",
                                                   btn1Text: "Delete",
                                                   btn2Text: "Cancel",
                                                   btn1Handler: () => handleDeleteSubSection(data._id,section._id),
                                                   btn2Handler: () => setConfirmationModal(null),

                                                     })
                                                }}
                                               >
                                               <RiDeleteBin6Line className='text-xl text-richblack-300' />
                                               </button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                          
                          {/* adding new lecture to section */}
                            <button  
                            onClick={ () =>setAddSubSection(section._id)}
                            className='mt-3 flex items-center gap-x-1 text-yellow-50'
                            >
                            <FaPlus  className='text-lg'/>
                            <p >Add Lecture</p>
                            </button>
                        </div>

                    </details>       
                ))}

            </div>
                 {addSubSection ? (<SubSectionModals
                 modalData = {addSubSection}
                 setModalData = {setAddSubSection}
                 add = {true}
                 />) 
                 : viewSubSection ?(<SubSectionModals
                    modalData = {viewSubSection}
                    setModalData = {setViewSubSection}
                    view = {true}
                 />)
                 : editSubSection ? (<SubSectionModals
                    modalData = {editSubSection}
                    setModalData = {setEditSubSection}
                    edit = {true}
                 />) 
                 : (<div></div>)}
                 {confirmationModal ?
                 (
                    <ConfirmationModal modalData={confirmationModal}/>
                 )
                 :(
                    <div></div>
                 )
                }
        </div>
        
    )
}
