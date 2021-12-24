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
        const user = await axiosInstance.post('/user/sign-in', userInput);
        dispatch(signInSuccess(user.data));
    }
    catch(err)
    {
        console.error(err);
        dispatch(signInFailure());
    }
    
}