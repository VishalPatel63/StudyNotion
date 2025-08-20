import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { HighlightText } from '../components/core/HomePage/HighlightText';
import  CTAButton  from '../components/core/HomePage/Button';
import  Banner from "../assets/Images/banner.mp4"
import { CodeBlocks } from '../components/core/HomePage/CodeBlocks';
import { TimelineSection } from '../components/core/HomePage/TimelineSection';
import { StudyLanguageSection } from '../components/core/HomePage/StudyLanguageSection';
import { IntsructorSection } from '../components/core/HomePage/IntsructorSection';
import { ExploreMore } from '../components/core/HomePage/ExploreMore';
import { Footer } from '../components/common/Footer';
import { ReviewSlider } from '../components/common/ReviewSlider';
import { ReviewSlider1 } from '../components/common/ReviewSlider1';


export const Home = () => {
  return (
    <div>
        {/* section 1 */}
        <div className='relative mx-auto flex flex-col  w-11/12 max-w-maxContent items-center text-white justify-between'>
           
            <Link to = {"/signup"}>
            <div className=' group  mt-16  p-1  mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit'
             >
                <div className=' flex flex-row  items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900
                '>
                    <p>Become an Instructor</p>
                        <FaArrowRight />
                </div>
            </div>
            </Link>
     

     <div className='text-center text-4xl font-semibold mt-7 '>
        Empower Your Future with
         <HighlightText  text = {"Coding Skills"}/>
     </div>

     <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-500 '>
        with our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a 
        wealth of resources, including hands-on projects, quizzes,and personalizes from instructors.
     </div>

     {/* __________________
     button */}
     <div className='flex flex-row gap-7 mt-8'>
       <CTAButton active ={true} linkto={"/signup"} >
        Learn More
       </CTAButton>
       <CTAButton active= {false} linkto={"/login"}>
        Book a Demo
       </CTAButton>
     </div>

{/* video */}

<div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200 mt-10">
    <video
    muted 
    loop
     autoPlay
      className="  shadow-[8px_8px_rgba(255,255,255)]"
    >
    <source src={Banner} type="video/mp4"></source>
    </video>
   </div>
  

  {/* codeSection 1 */}
  <div  >
     <CodeBlocks
     position={"lg:flex-row"}
    
     heading={
        <div className='text-4xl font-semibold'>
            Unlock Your 
            <HighlightText text = {"coding potential"}/>
            {" "}
            with our online courses
        </div>
     }
     subheading={
        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
     }

     ctabtn1={
        {
            btnText:"Try it yourself",
            linkto:"/signup",
            active:true,
        }
     }
     ctabtn2={
        {
            btnText:"learn more",
            linkto:"/login",
            active:false,
        }
     }


     codeblock={
        `<!DOCTYPE html>\n<html>\nhead><title>Example</\ntitle><linkrel="stylesheet"href="styles.css">
        /head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`
     }
     backgroudGradient = {"bg-gradient-to-br from-[#8A2BE2] via-[#FFA500] to-[#F8F8FF] bg-tranasparent"}
     codeColor={"bg-gradient-to-br from-[#C5C7D4] via-[#D43D63] to-[#C5C7D4] bg-clip-text text-transparent font-extrabold"}
     backgroundGradient ={<div className="codeblock1 absolute"></div>}
     ></CodeBlocks>
  </div>

{/* codeSection 2 */}
  <div>
     <CodeBlocks
       className = 'codeblock1 '
     position={"lg:flex-row-reverse"}
     heading={
        <div className='text-4xl font-semibold'>
             Start 
      
            <HighlightText text = {"coding in seconds"}/>

        </div>
     }
     subheading={
        "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
     }

     ctabtn1={
        {
            btnText:"try it yourself",
            linkto:"/signup",
            active:true,
        }
     }
     ctabtn2={
        {
            btnText:"learn more",
            linkto:"/login",
            active:false,
        }
     }


     codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
     backgroundGradient={<div className="codeblock2 absolute"></div>}
     codeColor={"bg-gradient-to-br from-[#C5C7D4] via-[#D43D63] to-[#C5C7D4] bg-clip-text text-transparent font-extrabold"}

     ></CodeBlocks>
  </div>


   <ExploreMore></ExploreMore>
 </div>
        {/* section 2 */}
      <div className='bg-pure-greys-5 text-richblack-700  '>
       <div className='homepage_bg lg:h-[310px] h-[290px]'>
     <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto'>
     <div className='h-[150px]'></div>
     <div className='flex flex-row gap-7  text-white'>
        <CTAButton active={true} linkto={"/signup"}>
         <div className=' flex flex-row  items-center gap-3'>
            Explore full catalog
            <FaArrowRight></FaArrowRight>
         </div>
        </CTAButton>

        <CTAButton active={false} linkto={"/signup"}>
         <div className=' flex flex-row  items-center gap-3'>
            Learn More
            <FaArrowRight></FaArrowRight>
         </div>
        </CTAButton>
     </div>
     </div>
       </div>

       <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

        <div className='flex lg:flex-row flex-col gap-5  mt-[95px]'>

         <div className='text-4xl font-semibold sm:items-center lg:w-[45%] '>
         Get the skills you need for a
         <HighlightText text={"Job that is in demand"}></HighlightText>
        </div>


        <div className='flex flex-col gap-10 lg:w-[40%]   sm:items-center items-start'>
       <div className='text-[16px]'>
       The modern StudyNotion is the dictates its own terms. Today, to be a competitive
        specialist requires more than professional skills.
        </div>
        <CTAButton  active={true} linkto={"/signup"}>
          <div>
            Learn More
          </div>
        </CTAButton>
        </div>

        </div>

       <TimelineSection></TimelineSection>
       <StudyLanguageSection></StudyLanguageSection>
       </div>

      </div>
 {/* ________________________________________________ */}
        {/* section 3 */}
          <div className='hidden md:block'>
          <div className='lg:w-full md:w-[800px]'>
        <div className=' w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between
        gap-8 bg-richblack-900 text-white
        '>
      <IntsructorSection></IntsructorSection>
         <h2 className='text-center text-4xl font-semibold mt-10'>Reviews from Other Learners</h2>
         {/* reviewa slider here */}
          <ReviewSlider/>
          
        </div>
        </div>
          </div>
        <div className=' lg:hidden md:hidden w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between
        gap-8 bg-richblack-900 text-white
        '>
      <IntsructorSection></IntsructorSection>
         <h2 className='text-center lg:text-4xl md:text-3xl text-3xl font-semibold mt-10'>Reviews from Other Learners</h2>
         {/* reviewa slider here */}
          <ReviewSlider1/>
          
        </div>


      
        {/*  footer section */}

        <Footer></Footer>
    </div>
  )
}


