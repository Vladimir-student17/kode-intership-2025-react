import useGetUserByID from "@/hooks/useGetUserByID";
import type { User } from "@/types/UserData";
import { useEffect, useState, type FC } from "react"
import { useParams } from "react-router-dom";
interface Props {
    className?: string;
}

const UserDetails:FC<Props>= ({}) => {
    const [userData, setUserData] = useState<User>()
    const {userID} = useParams() 

    useEffect(()=> {
        userID &&  setUserData(useGetUserByID(userID))
    })

    useEffect
    return(
        <div>
            
            
        </div>

    )

}


export default UserDetails;