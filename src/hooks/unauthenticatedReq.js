import { axiosClient } from "../api/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


const userLogin = async (loginData) =>{
    try{
        const response = await axiosClient.post('/user/signin', loginData)
        console.log(response)
        return response.data
    } catch (error){
        throw new Error("Could not login use");
    }
}

const registerUser = async (registerData) =>{
    try{
        const response = await axiosClient.post('/user/create', registerData)
        console.log(response)
        return response.data
    } catch (error){
        throw new Error("Could not create user");
    }
}

export const useLoginUser = ()=> {
    return useMutation ({
        mutationFn: userLogin,
        onSuccess: (data)=> {
            console.log(data)
        }, 

        onError: (error) => {
            console.log(error.message)
        }
    })
}

export const useRegisterUser = ()=> {
    return useMutation ({
        mutationFn: registerUser,
        onSuccess: (data)=> {
            console.log(data)
        }
    })
}