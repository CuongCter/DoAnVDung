import { axiosPrivate } from '../configHttp'
import { toast } from 'react-toastify'

export const postLogin = async (email,password) => {
  try{
    const resData = axiosPrivate.post('/api/v1/auth/sign-in', {email,password})
    console.log(resData);
    return (await resData).data
  }catch(error){
    toast.error("Fail")
  }
}


