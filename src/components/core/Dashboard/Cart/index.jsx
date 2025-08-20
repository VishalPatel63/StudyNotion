import { useSelector } from "react-redux"
import { RenderCartCourses } from "./RenderCartCourses";
import { RenderTotalAmount } from "./RenderTotalAmount";



export default function Cart(){
    const {total, totalItems} = useSelector((state) => state.cart);

    return (
        <div className="lg:mt-10 md:mt-10 mt-12">
            <h1 className="mb-14 lg:text-3xl md:text-3xl text-2xl font-medium text-richblack-5">
                Your Cart
            </h1>
            <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400">
                {totalItems } Course in Cart
            </p>
            {
                total > 0
                ?(
                    <div className="mt-8 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
                        <RenderCartCourses/>
                        <RenderTotalAmount/>
                    </div>
                )
                :(<p className="mt-14 text-center text-3xl text-richblack-100">
                    Your Cart is Empty
                </p>)
            }
        </div>
    )
}