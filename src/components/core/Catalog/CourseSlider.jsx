import React from 'react'
import {Swiper , SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
// import {FreeMode,Pagination} from "swiper"
import { Course_Card } from './Course_Card'
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules'
export const CourseSlider = ({Courses}) => {
    return (
        <>
        <div className=''>
            {
                Courses?.length ? (
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        spaceBetween={20}
                        pagination={true}
                        modules={[FreeMode,Pagination,Autoplay]}
                         
                        autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        }}
                        navigation={true}
                        breakpoints={{
                            1024:{slidesPerView:3,}
                        }}
                        className='lg:max-h-[30rem] md:max-h-[30rem] max-h-[20rem] '
                    >
                        {
                            Courses?.map((course, index)=> (
                                <SwiperSlide key={index}>
                                    <Course_Card course={course}  />
                                </SwiperSlide>
                            ))
                        }   
                    </Swiper>
                ) : (
                    <p className='text-xl text-richblack-5'>No Course Found</p>
                )
    
            }
            </div>
        </>
      )
}
