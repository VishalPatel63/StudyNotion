import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { contactusEndpoint } from "../apis";
  
const {  CONTACT_US_API} =  contactusEndpoint; 
export const sendMessage  =  async(data) =>{
   
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector(
                "POST",
                CONTACT_US_API,
             
            )
            console.log("CONTACT_US_API response............", response)

            if (!response.data.success) {
              throw new Error(response.data.message)
            }
            toast.success("Message send Successfully")
           
        } catch (error) {
            console.log(" CONTACT_US_API API ERROR............", error)
            toast.error("Could not send message")
        }
        toast.dismiss(toastId)
    }
  