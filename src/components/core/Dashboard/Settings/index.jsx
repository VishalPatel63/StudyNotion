
import { ChangeProfilePicture } from "./ChangeProfilePicture";
import { DeleteAccount } from "./DeleteAccount";
import { EditProfile } from "./EditProfile";
import { UpdatePassword } from "./UpdatePassword";



export default function Settings(){
    return (
        <div>
            <h1 className="mb-14 lg:text-3xl md:text-3xl text-2xl font-semibold text-richblack-5 lg:mt-0 md:mt-0 mt-12">
                Edit Profile
            </h1>
            {/* change Profile Picture */}
            <ChangeProfilePicture/>
            {/* Edit profile */}
            <EditProfile/>
            {/* update Password */}
            <UpdatePassword/>
            {/* Delete Account */}
            <DeleteAccount/>
        </div>
    )
}