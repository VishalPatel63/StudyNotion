
import React, { useEffect, useState } from 'react'
import { Footer } from '../components/common/Footer'
import { Link, useParams } from 'react-router-dom'
import { apiConnector } from '../services/apiconnector';
import { categories } from '../services/apis';
import { getCatalogPageData } from '../services/operations/pageAndComponentData';
import { CourseSlider } from '../components/core/Catalog/CourseSlider';
import { Course_Card } from '../components/core/Catalog/Course_Card';
import { useSelector } from 'react-redux';
import { Error } from './Error';


export const Catalog = () => {
    const {catalogName} = useParams();
    const [catalogPageData,setCatalogPageData] = useState(null);
    const [categoryId,setCategoryId] = useState("");
    const { loading } = useSelector((state) => state.profile)
    const [active, setActive] = useState(1)
    // fetch all ctaegories
    useEffect(() =>{
    const getCategories = async() =>{
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        const category_id = res?.data?.data?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
        setCategoryId(category_id);
    }
    getCategories();
    },[catalogName]);

    useEffect(()=>{
        const getCategoryDetails = async() =>{
            try {
                const res = await getCatalogPageData(categoryId);
                console.log("printing",res);
                setCatalogPageData(res);
            } catch (error) {
                console.log(error);
            }
        }
        if(categoryId){
            getCategoryDetails();
        }
    },[categoryId]);

    
    if (loading || !catalogPageData) {
        return (
          <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
            <div className="spinner"></div>
          </div>
        )
      }
      if (!loading && !catalogPageData.success) {
        return <Error />
      }
  return (
    <div className=''>
       
       {/* hero section */}
      <div className='box-content bg-richblack-800 px-4 flex justify-between lg:pl-40 md:pl-40 lg:gap-x-3 md:gap-x-5 gap-x-10  lg:pr-40 md:pr-40 '>

        <div className=' flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent'>
        <p className='lg:text-sm md:text-sm text-[10px] text-richblack-300'>
            {`Home / Catalog /`}
            <span className='text-yellow-25'>
             {catalogPageData?.data?.selectedCategory?.name}
            </span>
        </p>
        <p className='lg:text-3xl md:text-3xl text-2xl text-richblack-5'>
             {catalogPageData?.data?.selectedCategory?.name}
       </p>
        <p className='max-w-[870px] text-richblack-200'>
             {catalogPageData?.data?.selectedCategory?.description.length>50
              ? `${catalogPageData?.data?.selectedCategory?.description.slice(0,50)}...`
              :  catalogPageData?.data?.selectedCategory?.description
               
             }
       </p>

      </div>

      <div className='flex flex-col text-white mt-12'>
        <div>

        <p className='lg:text-lg md:text-lg text-base font-semibold text-richblack-5'>Related resources</p>
        </div>
        <div>
            <ul className='lg:text-sm md:text-sm text-xs text-richblack-200 list-disc llg:eading-8 md:leading-7 leading-5 tracking-widest'>
               <Link to = {"https://cloud.google.com/document-ai/docs"}><li>Doc  {catalogPageData?.data?.selectedCategory?.name} </li> </Link> 
                <li>Cheatsheets</li>
                <li>Articles</li>
                <li>Community Formus</li>
                <li>Project</li>
            </ul>
        </div>
      </div>
    
      </div>
        {/* section 1 */}
     
        <div className=" mx-auto box-content w-full max-w-maxContentTab lg:px-4 py-12 lg:max-w-maxContent">
            <div className='section_heading lg:ml-0 md:ml-0 ml-8'>Courses to get you started</div>
            <div className='my-4 flex border-b border-b-richblack-600 text-sm'>
                <p className={`px-4 py-2 ${
                    active === 1
                    ? "border-b border-b-yellow-25 text-yellow-25"
                    :" text-richblack-50"
                } cursor-pointer`}
                onClick={()=> setActive(1)}
                >
                    Most Popular
                </p>
                <p className={`px-4 py-2 ${
                    active === 2
                    ? "border-b border-b-yellow-25 text-yellow-25"
                    :" text-richblack-50"
                } cursor-pointer`}
                onClick={()=> setActive(2)}
                >
                    New
                 </p>
            </div>

            <div className='lg:py-8 md:py-8 py-4 items-center lg:ml-0 md:ml-0 ml-8 lg:mr-0 md:mr-0 mr-2'>
            <CourseSlider Courses = {catalogPageData?.data?.selectedCategory?.courses}/>
            </div>
         </div>
         {/* section 2 */}
         <div className=" mx-auto box-content lg:w-full md:full max-w-maxContentTab lg:px-4 md:px-4  lg:py-12 md:py-12 lg:max-w-maxContent -mt-10 ">
           <div className='section_heading lg:ml-0 md:ml-0 ml-8'>
            Top Courses in {catalogPageData?.data?.differentCategory?.name}
             </div>
             <div className='lg:py-8 md:py-8 py-4 items-center lg:ml-0 md:ml-0 ml-8 lg:mr-0 md:mr-0 mr-2'>
            <CourseSlider Courses = {catalogPageData?.data?.differentCategory?.courses}/>
            </div>
         </div>
         {/* section 3 */}
         <div className=" mx-auto box-content lg:w-full md:w-full max-w-maxContentTab lg:px-4 py-12 lg:max-w-maxContent -mt-10  ">
            <div className='section_heading lg:ml-0 md:ml-0 ml-8 '>
                Frequently Bought Together
             </div>
            <div className='lg:py-8 md:py-8 py-4 lg:ml-0 md:ml-0 ml-8 lg:mr-0 md:mr-0 mr-2'>
              <div className='grid grid-cols-1 lg:gap-6 md:gap-6 gap-5 md:grid-cols-1  lg:grid-cols-2'>
              
              {
                catalogPageData?.data?.mostSellingCourses?.slice(0,4)
                .map((course,index) => (
                   
                    <Course_Card course= {course}  key= {index}  />
                    
                ))
              }
              </div>
            </div>
         </div>
      <Footer/>
    </div>
  )
}

