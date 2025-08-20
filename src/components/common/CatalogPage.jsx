import React, { useEffect, useState } from 'react'
import { Link, matchPath, useLocation , } from 'react-router-dom'
import { apiConnector } from '../../services/apiconnector'
import { categories } from '../../services/apis'

export const CatalogPage = () => {
   
    const location = useLocation()
  
    const [subLinks, setSubLinks] = useState([])
    const [loading, setLoading] = useState(false)

   useEffect(() =>{


    const fetchAllCategory = async() =>{
      setLoading(true)
      try {
          const result = await apiConnector("GET",categories.CATEGORIES_API)
          console.log("result category",result);
          setSubLinks(result.data.data);

      } catch (error) {
          console.log("Could not fetch Categories", error)
      }
      setLoading(false)
    }
    fetchAllCategory();
   },[])


   if(loading){
    
   }
   console.log("length",subLinks.length);
  //  console.log("lengthset",setSubLinks);

    const matchRoute = (route) =>{
        return matchPath({path:route},location.pathname);
    }
  return (
    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]  cat">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : subLinks.length ? (
                        <>
                          {subLinks
                            // ?.filter(
                            //   (subLink) => subLink?.courses?.length > 0
                            // )
                            ?.map((subLink, index) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                key={index}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))}
                        </>
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
    
   
    
  )
}
