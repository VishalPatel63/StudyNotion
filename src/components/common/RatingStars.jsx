
import React, { useEffect, useState } from 'react'
import { RiStarLine } from "react-icons/ri";
import { RiStarHalfFill } from "react-icons/ri";
import { RiStarFill } from "react-icons/ri";

export const RatingStars = ({Review_Count,Star_Size}) => {
    const [starCount,setStarCount] = useState({
        full: 0,
        half: 0,
        empty: 0,
    })

    useEffect(() =>{
        const wholeStars = Math.floor(Review_Count) || 0
        setStarCount({
            full: wholeStars,
            half: Number.isInteger(Review_Count) ? 0 : 1,
            empty: Number.isInteger(Review_Count)? 5 - wholeStars : 4 - wholeStars,
        })
    },[Review_Count])
  return (
    <div className="flex gap-1 text-yellow-100">
    {[...new Array(starCount.full)].map((_, i) => {
      return <RiStarFill key={i} size={Star_Size || 20} />
    })}
    {[...new Array(starCount.half)].map((_, i) => {
      return <RiStarHalfFill key={i} size={Star_Size || 20} />
    })}
    {[...new Array(starCount.empty)].map((_, i) => {
      return <RiStarLine key={i} size={Star_Size || 20} />
    })}
  </div>
  )

}
