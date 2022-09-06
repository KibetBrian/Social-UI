import { axiosInstance } from './axiosInstance'
import {signInStart, signInSuccess,signInFailure} from './Redux/Slices/userSlice'
interface userInput{
    email: string
    password: string
}

export const handleSignInApiCall = async(dispatch:any, userInput:userInput)=>
{
    dispatch(signInStart());
    try{
        const user = await axiosInstance.post('/v1/auth/login', userInput);
        dispatch(signInSuccess(user.data));
    }
    catch(err)
    {
        console.error(err);
        dispatch(signInFailure());
    }
    
}

export const handleSignUpApiCall =async(dispatch:any, userInput:userInput)=>
{
    try{
        const res = await axiosInstance.post("/v1/auth/register", userInput)
        console.log(res)


    }catch(err){
        console.log(err)
    }
}