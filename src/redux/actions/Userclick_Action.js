import { getuserDowloadResume, userDowloadResume } from "../../services/auth_services/auth_services"
import { userClickFail, userClickRequest, userClickSuccess } from "../reducers/UserClick_reduecr";

const createUserClickAction=(type,id)=>async()=>{
    try {

        const dataResponse={
                userType:type, userId:id
        }
        const response=await userDowloadResume(dataResponse);
        if(response)
        {
        }
        
    } catch (error) {
        
    }
}

const getUserClickAction=()=>async(dispatch)=>{
    dispatch(userClickRequest());
    try {

      
        const response=await getuserDowloadResume();
        if(response)
        {
            dispatch(userClickSuccess(response?.data))
        }
        
    } catch (error) {
        dispatch(userClickFail(error));
    }
}


export {createUserClickAction,getUserClickAction}